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
  Container,
} from "reactstrap";
import { useNavigate } from "react-router-dom";
import { Alert } from 'antd';
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons'; // Importa los íconos necesarios

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false); // Para deshabilitar el botón durante la autenticación
  const [showPassword, setShowPassword] = useState(false); // Para mostrar/ocultar la contraseña
  const auth = getAuth();
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true); // Deshabilitar el botón de inicio de sesión

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("Logged in as:", user.email);

        // Determina el rol del usuario y redirige en consecuencia
        if (user.rol === "admin") {
          navigate("/admin"); // Redirige a la página de administrador
        } else if (user.rol === "docente") {
          navigate("/docente"); // Redirige a la página de docente
        } else {
          navigate("/alumno/inicio"); // Redirige a la página de inicio del alumno
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("Login error:", errorMessage);

        if (errorCode === "auth/wrong-password" || errorCode === "auth/user-not-found") {
          setError("Usuario o contraseña incorrectos");
        } else if (errorCode === 400) {
          setError("Error en la solicitud. Por favor, verifica tus datos e intenta de nuevo.");
        } else if (errorCode === "auth/invalid-credential") {
          setError("Credenciales inválidas. Por favor, verifica tu correo y contraseña e intenta de nuevo.");
        } else {
          setError(errorMessage);
        }
      })
      .finally(() => {
        setLoading(false); // Habilitar el botón de inicio de sesión después de completar la autenticación
      });
  };

  return (
    <>
      <Container fluid className="justify-content-center align-items-center" style={{ maxWidth: '450px' }}>
        <Card className="bg-gradient-white shadow">
          <CardHeader className="bg-transparent">
            <div className=" text-center mb-2">
              <h1 className="text-dark">Login</h1>
            </div>
            {/* Muestra la alerta si hay un error */}
            {error && 
            <Alert
              message={error}
              type="error"
              showIcon
            />}
          </CardHeader>
          <CardBody className="px-lg-4 py-lg-4">
            <Form role="form" onSubmit={handleSubmit}>
              <FormGroup className="mb-3">
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-email-83" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder=" Correo"
                    type="email"
                    value={email}
                    onChange={handleEmailChange}
                    disabled={loading}
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
                    placeholder=" Contraseña"
                    type={showPassword ? "text" : "password"} // Cambia el tipo de input dependiendo de si se muestra la contraseña
                    value={password}
                    onChange={handlePasswordChange}
                    disabled={loading} // Deshabilitar el campo de entrada durante la autenticación
                  />
                  <InputGroupAddon addonType="append">
                    <InputGroupText onClick={togglePasswordVisibility}>
                      {showPassword ? <EyeOutlined /> : <EyeInvisibleOutlined />} {/* Muestra el ícono correspondiente a la visibilidad de la contraseña */}
                    </InputGroupText>
                  </InputGroupAddon>
                </InputGroup>
              </FormGroup>
              <div className="text-center">
                <button
                  style={{ backgroundColor: '#007bff', color: '#ffffff' }}
                  className="btn btn-success btn-block mt-4"
                  type="submit"
                  disabled={loading} // Deshabilitar el botón durante la autenticación
                >
                  {loading ? 'Ingresando...' : 'Ingresar'}
                </button>
              </div>
              <Col xs="12" className="mt-5 text-center">
                <a href="#" className="text-light">
                  Olvidaste tu contraseña?
                </a>
              </Col>
            </Form>
          </CardBody>
        </Card>
      </Container>
    </>
  );
};

export default Login;
