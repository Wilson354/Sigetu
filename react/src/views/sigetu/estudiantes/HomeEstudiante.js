/*!
Tarjetas de informacion del usuario
*/
import { useState } from "react";
import Chart from "chart.js";

import {
  Button,
  Card,
  CardHeader,
  Table,
  Container,
  Row,
  Col,
} from "reactstrap";


import UserHeaderD from "components/Headers/UserHeaderD.js";


const Index = (props) => {
  
  return (
    <>
      <UserHeaderD />
{/*
==========================================================================================  
       seccion de evaluaciones actuales 
============================================================================================
*/}
      <Container className="mt--4 bg-transparent" fluid>
        <Row>
          <Col className="mb-5 mb-xl-0" xl="12">
            <Card className="shadow">
              <CardHeader className="border-0">
                <Row className="align-items-center">
                  <div className="col">
                    <h3 className="mb-0">Evaluaciones actuales</h3>
                  </div>
                  <div className="col text-right">
                    <Button
                      color="success"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      size="sm"
                    >
                      Ver todas
                    </Button>
                  </div>
                </Row>
              </CardHeader>
              <Table bordered striped className="align-items-center table-flush" responsive>
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
                    <th scope="row">Ingles</th>
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
        </Row>
      </Container>
    </>
  );
};

export default Index;
