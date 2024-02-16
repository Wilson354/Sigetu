/*
  Footer del admin
*/

import {
  Row,
  Col,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

const Footer = () => {
  return (
    <footer className="footer bg-transparent">
      
      <Row className="align-items-center justify-content-xl-between bg-white">
        <Col xl="6">
          <div className="copyright text-center text-xl-left text-muted">
            © {new Date().getFullYear()}{" "}
            <a
              className="font-weight-bold ml-1"
              href=""
              rel="noopener noreferrer"
              target="_blank"
            >
              INKOVA
            </a>
          </div>
        </Col>

        <Col xl="6">
          <Nav className="nav-footer justify-content-center justify-content-xl-end">
            <NavItem>
              <NavLink
                href=""
                rel="noopener noreferrer"
                target="_blank"
              >
                UTTECAMAC
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink
                href=""
                rel="noopener noreferrer"
                target="_blank"
              >
                Sobre nosotros
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink
                href=""
                rel="noopener noreferrer"
                target="_blank"
              >
                Ayuda
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink
                href=""
                rel="noopener noreferrer"
                target="_blank"
              >
                Informar un problema
              </NavLink>
            </NavItem>
          </Nav>
        </Col>
      </Row>
    </footer>
  );
};

export default Footer;
