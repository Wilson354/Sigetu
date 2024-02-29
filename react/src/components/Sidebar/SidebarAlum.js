import { useState } from "react";
import { NavLink as NavLinkRRD, Link} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { PropTypes } from "prop-types";
import { getAuth, signOut } from "firebase/auth";
import { useAuth } from "context/AuthContext"; // Asegúrate de importar useAuth desde context/AuthContext
import {
  Collapse,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
} from "reactstrap";

const Sidebar = (props) => {
  const [collapseOpen, setCollapseOpen] = useState();
  const navigate = useNavigate(); // Usa useNavigate para navegación en React Router v6
  const auth = useAuth();


  const handleLogout = () => {
    const auth = getAuth(); // Obtener la instancia de autenticación
    signOut(auth)
      .then(() => {
        // Redirigir al usuario a la página de inicio y reemplazar la ruta actual
        navigate("/");
      })
      .catch((error) => {
        console.error("Error al cerrar sesión:", error);
      });
  };

  const activeRoute = (routeName) => {
    return props.location.pathname.indexOf(routeName) > -1 ? "active" : "";
  };

  const toggleCollapse = () => {
    setCollapseOpen((data) => !data);
  };
  const closeCollapse = () => {
    setCollapseOpen(false);
  };
  
  // crea los links que aparecen en el menu izquierdo sidebar
  const createLinks = (routes) => {
    return routes.map((prop, key) => {
      return (
        <NavItem key={key}>
          <NavLink
            to={prop.layout + prop.path}
            tag={NavLinkRRD}
            onClick={closeCollapse}
          >
            <i className={prop.icon} />
            {prop.name}
          </NavLink>
        </NavItem>
      );
    });
  };

  const { bgColor, routes, logo } = props;
  let navbarBrandProps;
  if (logo && logo.innerLink) {
    navbarBrandProps = {
      to: logo.innerLink,
      tag: Link,
    };
  } else if (logo && logo.outterLink) {
    navbarBrandProps = {
      href: logo.outterLink,
      target: "_blank",
    };
  }

  const { displayName } = auth.user; // Obtiene el nombre de usuario

  return (
    <Navbar
      className="navbar-vertical fixed-left navbar-dark bg-dark"
      expand="md"
      id="sidenav-main"
    >
      <Container fluid>
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleCollapse}
        >
          <span className="navbar-toggler-icon" />
        </button>
        
        {/* Collapse */}
        <Collapse navbar isOpen={collapseOpen}>
          {/* Collapse header */}
          <div className="navbar-collapse-header d-md-none">
            <Row>
              {logo ? (
                <Col className="collapse-brand" xs="6">
                  {logo.innerLink ? (
                    <Link to={logo.innerLink}>
                      <img alt={logo.imgAlt} src={logo.imgSrc} />
                    </Link>
                  ) : (
                    <a href={logo.outterLink}>
                      <img alt={logo.imgAlt} src={logo.imgSrc} />
                    </a>
                  )}
                </Col>
              ) : null}
              <Col className="collapse-close" xs="6">
                <button
                  className="navbar-toggler"
                  type="button"
                  onClick={toggleCollapse}
                >
                  <span />
                  <span />
                </button>
              </Col>
            </Row>
          </div>
          {/* Barra lateral web para la Navegacion alumno */}
          <div className="navbar-collapse-body">
          <Nav navbar>
            <img
              alt="..."
              style={{
                width: "70px",
                height: "auto",
                position: "relative",
                left: "80px",
                top: "-20px",
              }}
              src={require("../../assets/img/theme/sigetu_logo.png")}
            />
            {createLinks(routes)}
            <button onClick={(e) => handleLogout(e)} className="button">
              logout
            </button>
          </Nav>
          </div>
        </Collapse>
      </Container>
    </Navbar>
  );
};

Sidebar.defaultProps = {
  routes: [{}],
};

Sidebar.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.object),
  logo: PropTypes.shape({
    innerLink: PropTypes.string,
    outterLink: PropTypes.string,
    imgSrc: PropTypes.string.isRequired,
    imgAlt: PropTypes.string.isRequired,
  }),
};

export default Sidebar;
