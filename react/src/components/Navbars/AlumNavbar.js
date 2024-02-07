/*!
Barra de navegacion superior
*/
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Form,
  FormGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  InputGroup,
  Navbar,
  Nav,
  Container,
  Media,
  Col,
} from "reactstrap";

const AdminNavbar = (props) => {
  return (
    <>
      <Navbar className="navbar-top navbar-dark pt-5" expand="md" id="navbar-main">
        <Container fluid>
          <Col >
          <div className="h1 mb-0 text-white text-uppercase d-none d-lg-inline-block">Bienvenido a sigetu</div>
          </Col>

          <Nav className="align-items-center d-none d-md-flex" navbar>
                    <h3 className="h3 mb-0 text-white text-uppercase d-none d-lg-inline-block">
                      Nombre del Alumno
                    </h3>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default AdminNavbar;
