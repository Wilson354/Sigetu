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
    <div  className=""
        style={{
          minHeight: "300px",
          backgroundImage:
          "url(" + require("../assets/img/theme/rocks.jpg")+")",
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      >
{/*=============================================================
        configurar fondo del login y color
===============================================================*/}
        <AuthNavbar />
        <div className="header py-8 py-lg-9 mt--7">
          <Container>
            <div className="header-body text-center mb-5">
              <Row className="justify-content-center">
                <Col lg="6" md="6">
                  <h1 className="text-white">BIENVENIDO A SIGETU</h1> 
                  <p className="text-white">
                    Sistema Integral de Gestion Estudiantil y Tramites Universitarios
                  </p>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
        {/* contenido del login */}
        <Container className="mt--9">
          <Row className="justify-content-center">
            <Routes>
              {getRoutes(routes)}
              <Route path="*" element={<Navigate to="/auth/login" replace />} />
            </Routes>
          </Row>
        </Container>
      <AuthFooter />
      </div>
    </>
  );
};

export default Auth;
