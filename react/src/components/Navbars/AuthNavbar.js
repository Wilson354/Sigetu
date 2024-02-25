import { Link } from "react-router-dom";

import {
  UncontrolledCollapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
} from "reactstrap";

const AdminNavbar = () => {

  return (
    <> 
      <Navbar className="navbar-top navbar-horizontal navbar-dark" expand="md">
        <Container className="px-5 justify-content-center">
          <NavbarBrand to="/" tag={Link}>
            <img
              alt="..."
              style={{ width: '110px', height: 'auto' }}
              src={require("../../assets/img/theme/sigetu_logo_black.png")}
            />
          </NavbarBrand>
        </Container>
      </Navbar>
    </>
  );
};

export default AdminNavbar;
