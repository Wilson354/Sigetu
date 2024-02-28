import React, { useState, useEffect } from "react";
import { useLocation, Route, Routes, Navigate } from "react-router-dom";
import {
  Button,
  Card,
  CardHeader,
  Table,
  Container,
  Row,
  Col,
  CardBody,
  CardTitle,
  Alert,
} from "reactstrap";
import AlumnoNavbar from "components/Navbars/AlumNavbar";
import Sidebar from "components/Sidebar/SidebarAlum.js";
import routes from "routes.js";
import UserHeaderD from "components/Headers/UserHeaderD.js";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

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

  const [date, setDate] = useState(new Date());
  const handleDateChange = (date) => {
    setDate(date);
  };


  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);

    // Devolvemos una función de limpieza para detener el temporizador cuando el componente se desmonte
    return () => {
      clearInterval(timerID);
    };
  }, []); // Usamos un arreglo vacío para indicar que este efecto solo se ejecuta una vez, similar a componentDidMount()

  const tick = () => {
    setTime(new Date());
  };

  return (
    <>
       <div className="header pb-4 pt-5 pt-lg-3 align-items-center h-100"
        style={{
          minHeight: "100vh", //se extiende la imagen 
          backgroundImage:
            "url(" + require("../assets/img/theme/rocks.jpg") + ")",
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      >
        <span className="mask opacity-4 bg-gradient" />

        <Sidebar {...props} routes={routes} />

        <div className="main-content h-100" ref={mainContent}>
          <AlumnoNavbar
            {...props}
            brandText={getBrandText(props?.location?.pathname)}
          />
          <Routes>
            {getRoutes(routes)}
          </Routes>

          <UserHeaderD />
          <Container className=" bg-transparent mt--7" fluid>
            <Card >
              <Row>
                <Col className="order-xl-1 mb-5 mb-xl-0" xl="9">
                  <Card className="bg-blue">
                    <CardHeader className="border-0">
                      <Row>
                        <div className="col">
                          <CardTitle
                            tag="h4"
                            className="text-uppercase text-muted mb-0"
                          >
                            MATRICULA
                          </CardTitle>
                          <span className="h3 font-weight-bold mb-0">
                            54123412
                          </span>
                        </div>
                        <Col className="col-auto">
                          <div className="icon icon-shape bg-warning text-white rounded-circle shadow">
                            <i className="ni ni-badge"></i>
                          </div>
                        </Col>
                      </Row>
                    </CardHeader>

                    <CardBody>
                      <Col>
                        <Card>
                          <h3>Evaluaciones Actuales</h3>
                          <Table bordered striped className="align-items-center" responsive>
                            <thead>
                              <tr className="bg-info">
                                <th>Asignatura</th>
                                <th>Profesor</th>
                                <th>Parcial 1</th>
                                <th>Parcial 2</th>
                                <th>Parcial 3</th>
                                <th>Ev. Final</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <th scope="row">Integradora</th>
                                <td>Ramirez Campoy Lorena</td>
                                <td>AU</td>
                                <td>DE</td>
                                <td>DE</td>
                                <td>DE</td>
                              </tr>
                              <tr>
                                <th scope="row">Videojuegos</th>
                                <td>Tellez Barrientos Omar</td>
                                <td>AU</td>
                                <td>DE</td>
                                <td>DE</td>
                                <td>DE</td>
                              </tr>
                              <tr>
                                <th scope="row">Desarrollo movil</th>
                                <td>Atlitec Mejia Jonathan</td>
                                <td>AU</td>
                                <td>DE</td>
                                <td>DE</td>
                                <td>DE</td>
                              </tr>
                              <tr>
                                <th scope="row">Negociacion empresarial</th>
                                <td>Miranda Rivera Eduardo</td>
                                <td>AU</td>
                                <td>DE</td>
                                <td>DE</td>
                                <td>DE</td>
                              </tr>
                              <tr>
                                <th scope="row">ingles</th>
                                <td>Chavez Torrez Yaxben</td>
                                <td>AU</td>
                                <td>DE</td>
                                <td>DE</td>
                                <td>DE</td>
                              </tr>
                              <tr>
                                <th scope="row">Desarrollo software</th>
                                <td>Tellez Barrientos Omar</td>
                                <td>AU</td>
                                <td>DE</td>
                                <td>DE</td>
                                <td>DE</td>
                              </tr>
                              <tr>
                                <th scope="row">Negociacion empresarial</th>
                                <td>Miranda Rivera Eduardo</td>
                                <td>AU</td>
                                <td>DE</td>
                                <td>DE</td>
                                <td>DE</td>
                              </tr>
                              <tr>
                                <th scope="row">Negociacion empresarial</th>
                                <td>Miranda Rivera Eduardo</td>
                                <td>AU</td>
                                <td>DE</td>
                                <td>DE</td>
                                <td>DE</td>
                              </tr>
                              <tr>
                                <th scope="row">Negociacion empresarial</th>
                                <td>Miranda Rivera Eduardo</td>
                                <td>AU</td>
                                <td>DE</td>
                                <td>DE</td>
                                <td>DE</td>
                              </tr>
                              <tr>
                                <th scope="row">Negociacion empresarial</th>
                                <td>Miranda Rivera Eduardo</td>
                                <td>AU</td>
                                <td>DE</td>
                                <td>DE</td>
                                <td>DE</td>
                              </tr>
                            </tbody>
                          </Table>
                        </Card>
                      </Col>
                    </CardBody>
                  </Card>
                </Col>

                {/* Aplicar estilos en línea y estilos embebidos */}
                <Col className="order-xl-1 mb-5 mb-xl-0" xl="3" >
                  <Card className="card-profile shadow">

                    <CardHeader className="bg-white border-0 text-center">

                      <div style={{ fontFamily: 'Digital-7', color: '#ffffff', backgroundColor: '#000000', borderRadius: '15px', textAlign: 'center' }}>
                        <h1 style={{ color: '#ffffff', fontSize: '30px', padding: '10px' }}>
                          {time.toLocaleTimeString()}</h1>
                      </div>
                      <div className="calendar-container">
                        <Calendar
                          className="calendar-container"
                          onChange={handleDateChange}
                          value={date}
                        />
                        <style>{`
                        /* Estilo del contenedor del calendario */
                        .calendar-container {
                          font-family: Arial, sans-serif; /* Tipo de letra */
                          border: 1px solid #ccc; /* Borde */
                          border-radius: 8px; /* Radio de los bordes */
                          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Sombra */
                        }
                        
                        /* Estilo del nombre del mes */
                        .react-calendar__navigation__label {
                          font-weight: bold; /* Texto en negrita */
                          color: #333; /* Color del texto */
                          margin: 10px 0; /* Margen superior e inferior */
                        }
                        
                        /* Estilo de los días de la semana */
                        .react-calendar__month-view__weekdays__weekday abbr {
                          text-transform: uppercase; /* Transforma el texto a mayúsculas */
                          font-weight: bold; /* Texto en negrita */
                          color: #555; /* Color del texto */
                        }
                        
                        /* Estilo de los números de los días */
                        .react-calendar__tile abbr {
                          font-weight: bold; /* Texto en negrita */
                        }
                        
                        /* Estilo del día seleccionado */
                        .react-calendar__tile--active {
                          background-color: #007bff; /* Color de fondo del día seleccionado */
                          color: #fff; /* Color del texto del día seleccionado */
                        }
                        
                        /* Estilo de los días deshabilitados */
                        .react-calendar__tile--disabled {
                          opacity: 0.5; /* Opacidad reducida para los días deshabilitados */
                        }
                        
                        /* Estilo de los días fuera del mes actual */
                        .react-calendar__tile--inactive {
                          color: #ccc; /* Color de los días fuera del mes actual */
                        }
                        
                        /* Estilo de las flechas de navegación */
                        .react-calendar__navigation button {
                          background-color: transparent; /* Fondo transparente */
                          color: #555; /* Color del texto */
                          font-size: 1.2em; /* Tamaño del texto */
                          border: none; /* Sin borde */
                          cursor: pointer; /* Cursor apuntador */
                        }
                        
                        /* Estilo de las flechas de navegación al pasar el cursor */
                        .react-calendar__navigation button:hover {
                          color: #007bff; /* Color del texto al pasar el cursor */
                        }
                        
                    `}</style>
                      </div>
                    </CardHeader>
                    <hr className="my-1" />
                    <CardBody className="">
                      <Row>
                        <Col md="12">
                          <Alert>
                            <h4 className="alert-heading">
                              Well done!
                            </h4>
                            <p>
                              Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.
                            </p>
                          </Alert>
                        </Col>
                      </Row>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Card>
          </Container>
        </div>
      </div>
    </>
  );
};

export default AlumnoView;
