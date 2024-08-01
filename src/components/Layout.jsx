import PropTypes from "prop-types";
import Footer from "./Footer";
import NavigationBar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div>
      <header>
        <NavigationBar />
      </header>
      <main className="main">{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
