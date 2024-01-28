/*!
Tarjetas de informacion del usuario
*/
import { useState } from "react";
// node.js library that concatenates classes (strings)
import classnames from "classnames";
// javascipt plugin for creating charts
import Chart from "chart.js";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";
// reactstrap components
import {
  UncontrolledAlert,
  Button,
  Badge,
  Card,
  CardHeader,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  Progress,
  Table,
  Container,
  Row,
  Col,
  ListGroupItem,
  Alert
} from "reactstrap";

import {
  chartOptions,
  parseOptions,
  chartExample1,
  chartExample2,
} from "variables/charts.js";

import Header from "components/Headers/Header.js";


const Index = (props) => {
  const [activeNav, setActiveNav] = useState(1);
  const [chartExample1Data, setChartExample1Data] = useState("data1");

  if (window.Chart) {
    parseOptions(Chart, chartOptions());
  }

  const toggleNavs = (e, index) => {
    e.preventDefault();
    setActiveNav(index);
    setChartExample1Data("data" + index);
  };
  return (
    <>
      <Header />
      {/*
       ==========================================================================================
       
       seccion de evaluaciones actuales 
       
       ============================================================================================
       */}
      <Container className="mt--7" fluid>
        <Row>
          <Col className="mb-5 mb-xl-0" xl="9">
            <Card className="shadow">
              <CardHeader className="border-0">
                <Row className="align-items-center">
                  <div className="col">
                    <h3 className="mb-0">Evaluaciones actuales</h3>
                  </div>
                  <div className="col text-right">
                    <Button
                      color="primary"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      size="sm"
                    >
                      Ver todas
                    </Button>
                  </div>
                </Row>
              </CardHeader>
              <Table striped className="align-items-center table-flush" responsive>
                <thead className="thead-Default">
                  <tr>
                    <th scope="col">Asignatura</th>
                    <th scope="col">Profesor</th>
                    <th scope="col">Parcial 1</th>
                    <th scope="col">Parcial 2</th>
                    <th scope="col">Parcial 3</th>
                    <th scope="col">Ev. Final</th>
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

          {/* 
===========================================================================================

 seccion de avisos

====================================================================================
*/}

          <Col xl="3">
            <Card className="card mb-4 mb-lg-0" >
              <CardHeader className="bg-transparent align-items-center">
                <h3>Avisos</h3>
              </CardHeader>

              <CardBody>
                <div className="chart">
                  <Alert color="warning">
                    <span className="alert-inner--icon">
                      <i className="ni ni-like-2" />
                    </span>{" "}
                    <span className="alert-inner--text">
                      <strong>Warning!</strong> This is a warning alert—check it out
                      that has an icon too!
                    </span>
                  </Alert>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Index;
