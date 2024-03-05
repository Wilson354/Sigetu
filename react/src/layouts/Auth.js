/*!
=======================================
LOGIN autentificador parte superior
=========================================
*/
import React from "react";
import { useLocation, Route, Routes, Navigate } from "react-router-dom";
// reactstrap components
import { Container, Row, Col } from "reactstrap";

import AuthNavbar from "components/Navbars/AuthNavbar.js";
import AuthFooter from "components/Footers/AuthFooter.js";
import Login from "../views/screens/Login";

import routes from "routes.js";

const Auth = (props) => {
  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.layout === "/auth") {
        return (
          <Route path={prop.path} element={prop.component} key={key} exact />
        );
      } else {
        return null;
      }
    });
  };

  return (
    <>
      <div
        style={{
          minHeight: "100vh",
          backgroundImage:
            "url(" + require("../assets/img/theme/uttecamac.jpg") + ")",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <AuthNavbar />
        <Container>
          <div className="header-body text-center">
            <h1 className="text-dark">BIENVENIDO A <strong>SIGETU</strong></h1>
            <p className="text-dark"><strong>
              Sistema Integral de Gestion Estudiantil y Tramites Universitarios
            </strong>
            </p>
          </div>
        </Container>
        {/* contenido del login */}
        <Container fluid>
          <Login />
        </Container>
        <AuthFooter />
      </div>
    </>
  );
};

export default Auth;
