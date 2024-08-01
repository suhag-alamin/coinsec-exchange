/* eslint-disable no-unused-vars */
import { useEffect, useRef, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import io from "socket.io-client";
import Layout from "./components/Layout";
import BlueScoreContext from "./context/BlueScoreContext";
import LastBlocksContext from "./context/LastBlocksContext";
import PriceContext from "./context/PriceContext";
import Home from "./pages/Home";
import LegalDisclaimer from "./pages/LegalDisclaimer";
import NotFound from "./pages/NotFound";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";
import TermsConditions from "./pages/TermsConditions";

const socket = io("wss://api.kaspa.org", {
  path: "/ws/socket.io",
});

const App = () => {
  const [price, setPrice] = useState("");
  const [marketData, setMarketData] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [blocks, setBlocks] = useState([]);
  const [blueScore, setBlueScore] = useState(0);
  const [isConnected, setIsConnected] = useState();

  const blocksRef = useRef(blocks);
  blocksRef.current = blocks;

  const updatePrice = () => {
    setIsLoading(true);
    fetch(`https://api.kaspa.org/info/market-data`, {
      headers: { "Cache-Control": "no-cache" },
    })
      .then((response) => response.json())
      .then((data) => {
        setPrice(data["current_price"]["usd"].toFixed(4));
        setMarketData(data);
        setIsLoading(false);
      })
      .catch((r) => {
        console.log(r);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    updatePrice();

    const intervalPrice = setInterval(() => {
      updatePrice();
    }, 60000);

    // socketio
    socket.on("connect", () => {
      setIsConnected(true);
    });

    socket.on("disconnect", () => {
      setIsConnected(false);
    });

    socket.on("last-blocks", (e) => {
      setBlocks(e);
      socket.emit("join-room", "blocks");
    });

    socket.emit("last-blocks", "");

    socket.on("bluescore", (e) => {
      setBlueScore(e.blueScore);
    });
    socket.emit("join-room", "bluescore");

    socket.on("new-block", (d) => {
      setBlocks([...blocksRef.current, d].slice(-20));
    });

    return () => {
      clearInterval(intervalPrice);
      socket.off("connect");
      socket.off("disconnect");
      socket.off("new-block");
    };
  }, []);

  return (
    <LastBlocksContext.Provider value={{ blocks, isConnected, isLoading }}>
      <PriceContext.Provider value={{ price, marketData }}>
        <BlueScoreContext.Provider value={{ blueScore }}>
          <div className="App">
            <BrowserRouter>
              <>
                <div className="gradient-background"></div>
                <div className="content">
                  <Routes>
                    <Route
                      index
                      element={
                        <Layout>
                          <Home />
                        </Layout>
                      }
                    />

                    <Route
                      path="/terms"
                      element={
                        <Layout>
                          <Terms />
                        </Layout>
                      }
                    />
                    <Route
                      path="/terms-conditions"
                      element={
                        <Layout>
                          <TermsConditions />
                        </Layout>
                      }
                    />
                    <Route
                      path="/privacy-policy"
                      element={
                        <Layout>
                          <PrivacyPolicy />
                        </Layout>
                      }
                    />
                    <Route
                      path="/legal-disclaimer"
                      element={
                        <Layout>
                          <LegalDisclaimer />
                        </Layout>
                      }
                    />
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </div>
              </>
            </BrowserRouter>
          </div>
        </BlueScoreContext.Provider>
      </PriceContext.Provider>
    </LastBlocksContext.Provider>
  );
};

export default App;
