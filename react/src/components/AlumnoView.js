/*!
PARTE SUPERIOR DEL PERFIL de la barra lateral
*/
import React from "react";
import { useLocation, Route, Routes, Navigate } from "react-router-dom";
// reactstrap components
import { Container } from "reactstrap";
// core components
import AlumnoNavbar from "components/Navbars/AlumNavbar";
import AdminFooter from "components/Footers/AdminFooter.js";
import Sidebar from "components/Sidebar/SidebarAlum.js";
import HomeEstudiante from "../views/sigetu/estudiantes/HomeEstudiante.js"

//rutas
import routes from "routes.js";


const AlumnoView = (props) => {
  const mainContent = React.useRef(null);
  const location = useLocation();

  React.useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    mainContent.current.scrollTop = 0;
  }, [location]);

  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.layout === "/alumno") {
        return (
          <Route path={prop.path} element={prop.component} key={key} exact />
        );
      } else {
        return null;
      }
    });
  };

  const getBrandText = (path) => {
    for (let i = 0; i < routes.length; i++) {
      if (
        props?.location?.pathname.indexOf(routes[i].layout + routes[i].path) !==
        -1
      ) {
        return routes[i].name;
      }
    }
    return "Brand";
  };

  return (
    <>
      <div className="header pb-4 pt-5 pt-lg-3 align-items-center"
        style={{
          minHeight: "300px",
          backgroundImage:
            "url(" + require("../assets/img/theme/playa.jpg") + ")",
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}
      >
        {/*cambia el span el color del fondo*/}
        <span className="mask opacity-4 bg-gradient-dark" />

        <Sidebar
          {...props}
          routes={routes}
        />
        <div className="main-content" ref={mainContent}>
          <AlumnoNavbar
            {...props}
            brandText={getBrandText(props?.location?.pathname)}
          />

          <Routes>
            {getRoutes(routes)}
          </Routes>
          <Container fluid>
            <HomeEstudiante />
            <AdminFooter />
          </Container>
        </div>
      </div>
    </>
  );
};


export default AlumnoView;
