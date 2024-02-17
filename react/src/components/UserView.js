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
import Index from "../views/sigetu/estudiantes/HomeEstudiante.js";
import Perfil from "views/sigetu/estudiantes/PerfilEstudiante";
import Evaluaciones from "views/sigetu/estudiantes/EvaluacionesEstudiante";
import Login from "views/sigetu/Login.js";
import Encuestas from "views/sigetu/estudiantes/EncuestasEstudiante"
import Tramites from "views/sigetu/estudiantes/TramitesEstudiante"
import Formulario from "views/examples/formulario"
import Crud from "views/examples/crudshow"
import Crear from "views/examples/crudcreate"
import Showd from "views/examples/division"


const UserView = (props) => {
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

var routes = [
  {
    path: "/inicio",
    name: "INICIO",
    icon: "ni ni-tv-2 text-primary",
    component: <Index />,
    layout: "/alumno",
  },
  {
    path: "/perfil",
    name: "PERFIL",
    icon: "ni ni-single-02 text-yellow",
    component: <Perfil />,
    layout: "/alumno",
  },
  {
    path: "/evaluaciones",
    name: "EVALUACIONES",
    icon: "ni ni-bullet-list-67 text-red",
    component: <Evaluaciones />,
    layout: "/alumno",
  },
  {
    path: "/encuestas",
    name: "ENCUESTAS",
    icon: "ni ni-bullet-list-67 text-red",
    component: <Encuestas />,
    layout: "/alumno",
  },
  {
    path: "/tramites",
    name: "TRAMITES",
    icon: "ni ni-bullet-list-67 text-red",
    component: <Tramites />,
    layout: "/alumno",
  },
  {
    path: "/login",
    name: "Login",
    icon: "ni ni-key-25 text-info",
    component: <Login />,
    layout: "/auth",
  },

  {
    path: "/formulario",
    name: "formulario",
    icon: "ni ni-key-25 text-info",
    component: <Formulario />,
    layout: "/auth",
  },

  {
    path: "/crud",
    name: "crud",
    icon: "ni ni-key-25 text-info",
    component: <Crud />,
    layout: "/alumno",
  },

  {
    path: "/crear",
    name: "crear",
    icon: "ni ni-key-25 text-info",
    component: <Crear />,
    layout: "/alumno",
  },

  {
    path: "/showd",
    name: "showd",
    icon: "ni ni-key-25 text-info",
    component: <Showd />,
    layout: "/alumno",
  },
];
export default UserView;
