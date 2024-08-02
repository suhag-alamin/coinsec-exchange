import coinsec from "/assets/images/coinsec.svg";
import coinsecMap from "/assets/images/coinsec_map.svg";
import eth from "/assets/images/eth.svg";
import footerLogo from "/assets/images/foogerLogo.svg";
import frame2100 from "/assets/images/Frame2100.svg";
import trame2168 from "/assets/images/Frame2168.svg";
import linkedin from "/assets/images/linkedin-icon.svg";
import logo from "/assets/images/logo.png";
import payments from "/assets/images/payments.svg";
import payments2 from "/assets/images/payments2.svg";
import tokenomics from "/assets/images/pie-chart.svg";
import sec_diagram from "/assets/images/sec_diagram.svg";
import seo from "/assets/images/seo-border-img.svg";
import telegram from "/assets/images/telegram-icon.svg";
import twitter from "/assets/images/twitter-icon.svg";
import usdc from "/assets/images/usdc.svg";
import usdt from "/assets/images/usdt.svg";
import loginIcon from "/assets/images/login.svg";
import coinsecExhange from "/assets/images/coinsec-exchange.svg";
import search from "/assets/images/search.svg";

// Logo
export const Logo = () => <img src={logo} alt={logo} />;
// Logo
export const LogoFooter = () => <img src={footerLogo} alt={footerLogo} />;
export const LoginIcon = () => <img src={loginIcon} alt="" />;
// coinsec
export const CoinsecExhange = () => (
  <img src={coinsecExhange} alt={coinsecExhange} className="img-fluid" />
);
export const CoinsecImg = () => (
  <img src={coinsec} alt={coinsec} className="img-fluid" />
);
// coinsec Map
export const CoinsecMap = () => (
  <img src={coinsecMap} alt={coinsecMap} className="img-fluid w-100" />
);
// sec diagram
export const SecDiagram = () => (
  <img src={sec_diagram} alt={sec_diagram} className="img-fluid w-100" />
);
// payments
export const Payments = () => (
  <img src={payments} alt={payments} className="img-fluid w-100" />
);
// payments2
export const Payments2 = () => (
  <img src={payments2} alt={payments2} className="img-fluid w-100" />
);
// Frame2100
export const Frame2100 = () => (
  <img src={frame2100} alt={frame2100} className="img-fluid w-100" />
);
// Trame2168
export const Trame2168 = () => (
  <img src={trame2168} alt={trame2168} className="img-fluid w-100" />
);
// Tokenomics
export const Tokenomics = () => (
  <img src={tokenomics} alt={tokenomics} className="img-fluid w-100" />
);

export const Eth = () => <img src={eth} alt={eth} />;
export const Usdt = () => <img src={usdt} alt={usdt} />;
export const Usdc = () => <img src={usdc} alt={usdc} />;
export const Search = () => <img src={search} alt={search} />;

export const SeoImg = () => (
  <img src={seo} alt={seo} className="img-fluid w-100" />
);

export const Telegram = () => (
  <img src={telegram} alt={telegram} className="img-fluid" />
);

export const Twitter = () => (
  <img src={twitter} alt={twitter} className="img-fluid" />
);

export const Linkedin = () => (
  <img src={linkedin} alt={linkedin} className="img-fluid" />
);
