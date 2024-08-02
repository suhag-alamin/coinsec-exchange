import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Linkedin, LogoFooter, Telegram, Twitter } from "./Image";

const Footer = () => {
  return (
    <div className="footer-bg d-grid gap-4">
      <Container className="py-2 px-0">
        <div className="footer-area">
          <div className="row">
            <div className="col-lg-3">
              <div className="footer-item text-center text-md-start">
                <Link to="/">
                  <LogoFooter />
                </Link>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="footer-weget">
                <div className="footer-item d-none d-lg-block">
                  <div className="footerLinks">
                    <div>
                      <ul>
                        {" "}
                        <li>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href="http://testnet-explorer.coinsec.network/"
                          >
                            Explorer
                          </a>
                        </li>
                        <li>
                          <Link to="/">Our Network</Link>
                        </li>
                        <li>
                          <Link to="/">Status</Link>
                        </li>
                        <li>
                          <Link to="/">Mining Pool</Link>
                        </li>
                      </ul>
                    </div>
                    <div className="middleRow">
                      <ul>
                        <li>
                          <Link to="/">GitHub</Link>
                        </li>
                        <li>
                          <Link to="/">Documentation</Link>
                        </li>
                        <li>
                          <Link to="/">Research</Link>
                        </li>
                        <li>
                          <Link to="/">Ecosystem</Link>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <ul>
                        {" "}
                        <li>
                          <Link to="/terms-conditions">Terms & Conditions</Link>
                        </li>
                        <li>
                          <Link to="/terms">Terms of Use</Link>
                        </li>
                        <li>
                          <Link to="/privacy-policy">Privacy Policy</Link>
                        </li>
                        <li>
                          <Link to="/legal-disclaimer">Legal Disclaimer</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="footer-list-phone-show d-lg-none">
                  <div className="d-flex justify-content-center gap-3">
                    <Link to="/terms">Terms of Use</Link>
                    <Link to="/privacy-policy">Privacy Policy</Link>
                    <Link to="/legal-disclaimer">Legal Disclaimer</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-2">
              <div className="footer-item connect-icon">
                <div className="fs-20 text-center">Connect with us </div>
                <ul>
                  <li>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://www.linkedin.com/company/coinsec-network"
                      className="footerIcon"
                    >
                      <Linkedin />
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://www.twitter.com/coinsecnetwork"
                      className="footerIcon"
                    >
                      <Twitter />
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://t.me/coinsec_support"
                      className="footerIcon"
                    >
                      <Telegram />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="fs-16 text-center fw-medium copyright">
          2024 COINSEC. All rights reserved.
        </div>
      </Container>
    </div>
  );
};

export default Footer;
