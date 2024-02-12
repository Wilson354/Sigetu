/*!
Barra de navegacion superior
*/

import {
  Navbar,
  Nav,
  Container,
  Col,
} from "reactstrap";

import { useAuth } from "context/AuthContext";

const AdminNavbar = (props) => {
  const auth = useAuth();
    const {displayName} = auth.user
    console.log(displayName)
  return (
    <>
      <Navbar className="navbar-top navbar-dark pt-5" expand="md" id="navbar-main">
        <Container fluid>
          <Col >
            <div className="h1 mb-0 text-white text-uppercase d-none d-lg-inline-block">
              Bienvenido a sigetu
            </div>
            <div >
            {displayName && <div className="h1 mb-0 text-white text-uppercase d-none d-lg-inline-block">{displayName}</div>}
            </div>
          </Col>
        </Container>
      </Navbar>
    </>
  );
};

export default AdminNavbar;
