import React, { useState, useEffect } from "react";
import { useLocation, } from "react-router-dom";
import {
  Card,
  CardHeader,
  Table,
  Container,
  Row,
  Col,
  CardBody,
  CardTitle,
} from "reactstrap";

const HomeEstudiante = (props) => {
  const mainContent = React.useRef(null);
  const location = useLocation();

  React.useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    mainContent.current.scrollTop = 0;
  }, [location]);

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
      <div className="main-content" ref={mainContent}>
        <Container fluid>
          <Card>
            <Row>
              <Col className="order-xl-1" xl="9">
                <Card className="bg-red">
                  <CardHeader>
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

            
            </Row>
          </Card>
        </Container>
      </div>
    </>
  );
};

export default HomeEstudiante;
