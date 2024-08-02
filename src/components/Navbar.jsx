/* eslint-disable react/prop-types */
import { useState } from "react";
import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import { CiGlobe } from "react-icons/ci";
import { Link } from "react-router-dom";
import { LoginIcon, Logo, Search } from "./Image";

const NavigationBar = () => {
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const closeOffcanvas = () => setShowOffcanvas(false);

  return (
    <>
      <Navbar expand="lg" className="navbar-main" fixed="top">
        <Container>
          <Navbar.Brand>
            <Link to="/">
              <Logo />
            </Link>
          </Navbar.Brand>
          <div className="d-flex align-items-center gap-3">
            <Navbar.Toggle
              aria-controls="offcanvasNavbar-expand-lg"
              onClick={() => setShowOffcanvas((prev) => !prev)}
            />
          </div>
          <Navbar.Offcanvas
            show={showOffcanvas}
            onHide={closeOffcanvas}
            id="offcanvasNavbar-expand-lg"
            aria-labelledby="offcanvasNavbarLabel-expand-lg"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel-expand-lg">
                <Link to="/">
                  <Logo />
                </Link>
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-center NavList">
                <NavLinkComponent closeOffcanvas={closeOffcanvas} />
              </Nav>
              {/* <div className="w-100">
                <SearchBar closeOffcanvas={closeOffcanvas} />
              </div> */}
              <Nav className="d-flex">
                <LogInfo closeOffcanvas={closeOffcanvas} />
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
};

const NavLinkComponent = ({ closeOffcanvas }) => (
  <>
    <Nav.Link href="/" onClick={closeOffcanvas}>
      Exchange
    </Nav.Link>

    <Nav.Link href="#" onClick={closeOffcanvas}>
      Derivatives
    </Nav.Link>
    <Nav.Link href="#" onClick={closeOffcanvas}>
      Finance
    </Nav.Link>
    <Nav.Link href="#" onClick={closeOffcanvas}>
      Business
    </Nav.Link>
    <Nav.Link href="#" onClick={closeOffcanvas}>
      Institutional
    </Nav.Link>
    <Nav.Link href="#" onClick={closeOffcanvas}>
      Our Network
    </Nav.Link>
  </>
);

const LogInfo = ({ closeOffcanvas }) => (
  <>
    <Nav.Link href="#" onClick={closeOffcanvas} className="navIcon ">
      <CiGlobe />
    </Nav.Link>
    <Nav.Link href="#" onClick={closeOffcanvas} className="navIcon">
      <Search />
    </Nav.Link>
    <Nav.Link href="#" onClick={closeOffcanvas}>
      <button className="loginBtn">
        <LoginIcon />
        Login
      </button>
    </Nav.Link>
  </>
);

export default NavigationBar;
