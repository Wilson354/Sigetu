import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {
  Col,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container, Row,
} from "reactstrap";

import AuthNavbar from "components/Navbars/AuthNavbar.js";
import AuthFooter from "components/Footers/AuthFooter.js";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = getAuth();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Logged in successfully
        const user = userCredential.user;
        console.log("Logged in as:", user.email);
        // You can redirect the user to another page here
      })
      .catch((error) => {
        // Handle errors here
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("Login error:", errorMessage);
      });
  };

  return (
    <>
      <div  className=""
        style={{
          minHeight: "100vh",
          backgroundImage:
          "url(" + require("../../assets/img/theme/uttecamac.jpg")+")",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <AuthNavbar />
        <Container fluid className="d-flex justify-content-center align-items-center ">
        <Col md="12">
            <div className="header-body text-center mb-5">
                  <h1 className="text-white">BIENVENIDO A SIGETU</h1> 
                  <p className="text-white">
                    Sistema Integral de Gestion Estudiantil y Tramites Universitarios
                  </p>
            </div>
        <div className="d-flex justify-content-center">
        <Col lg="3" md="7">
          <Card className="bg-gradient-white shadow">
            <CardHeader className="bg-transparent pb-2">
              <div className="text-muted text-center mt-2 mb-3">
                <h1 className="text-black">Login</h1>
              </div>
            </CardHeader>
            <CardBody className="px-lg-5 py-lg-5">
              <Form role="form" onSubmit={handleSubmit}>
                <FormGroup className="mb-3">
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-email-83" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Email"
                      type="email"
                      autoComplete="new-email"
                      value={email}
                      onChange={handleEmailChange}
                    />
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-lock-circle-open" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Password"
                      type="password"
                      autoComplete="new-password"
                      value={password}
                      onChange={handlePasswordChange}
                    />
                  </InputGroup>
                </FormGroup>
                <div className="text-center">
                  <button className="btn btn-success btn-block mt-4" type="submit">
                    Ingresar
                  </button>
                </div>
                <Col xs="12" className="mt-3 text-center">
                  <a href="#" className="text-light">
                    Olvidaste tu contraseña?
                  </a>
                </Col>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </div>
      </Col>
        </Container>
      <AuthFooter />
      </div>
    </>
  );
};

export default Login;