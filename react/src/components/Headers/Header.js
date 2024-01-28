/*!
Estudiante dashboard
*/

import { Card, CardBody, CardTitle, Container, Row, Col } from "reactstrap";

const Header = () => {
  return (
    <>
      <div className="header bg-gradient-info pb-8 pt-5 pt-md-8">
        <Container fluid>
          <div className="header-body">
            <Row>

              <Col lg="3" xl="3">
                <Card className="card-stats mb-2 mb-xl-2">
                  <CardBody>
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
                          <i class="ni ni-badge"></i>
                        </div>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              </Col>

              <Col lg="3" xl="6">
                <Card className="card-stats mb-2 mb-xl-2">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h4"
                          className="text-uppercase text-muted mb-0"
                        >
                          Carrera
                        </CardTitle>
                        <span className="h3 font-weight-bold mb-0">Ingeniería en Desarrollo y Gestión de Software</span>
                        </div>
                      <Col className="col-auto">
                        <div className="icon icon-shape bg-danger text-white rounded-circle shadow">
                          <i className="ni ni-paper-diploma" />
                        </div>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              </Col>

              <Col lg="3" xl="3">
                <Card className="card-stats mb-2 mb-xl-2">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h4"
                          className="text-uppercase text-muted mb-0"
                        >
                          Grupo
                        </CardTitle>
                        <span className="h3 font-weight-bold mb-0">10IDS1</span>
                        </div>
                        <Col className="col-auto">
                        <div className="icon icon-shape bg-primary text-white rounded-circle shadow">
                        <i class="fa-solid fa-users-rectangle" />
                        </div>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              </Col>

              <Col lg="3" xl="3">
                <Card className="card-stats mb-2 mb-xl-2">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h4"
                          className="text-uppercase text-muted mb-0"
                        >
                          Grupo inglés
                        </CardTitle>
                        <span className="h3 font-weight-bold mb-0">9IN9</span>
                        </div>
                        <Col className="col-auto">
                        <div className="icon icon-shape bg-info text-white rounded-circle shadow">
                        <i class="fa-solid fa-users-rectangle" />
                        </div>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              </Col>

              <Col lg="3" xl="3">
                <Card className="card-stats mb-2 mb-xl-2">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h4"
                          className="text-uppercase text-muted mb-0"
                          >
                            Vidas academicas
                        </CardTitle>
                        <span className="h3 font-weight-bold mb-0">3 restantes</span>
                      </div>
                      <Col className="col-auto">
                        <div className="icon icon-shape bg-danger text-white rounded-circle shadow">
                          <i className="ni ni-favourite-28" />
                        </div>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              </Col>

              <Col lg="6" xl="3">
                <Card className="card-stats mb-2 mb-xl-2">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h4"
                          className="text-uppercase text-muted mb-0"
                        >
                          Periodo actual
                        </CardTitle>
                        <span className="h3 font-weight-bold mb-0">Enero - Abril 2024</span>
                      </div>
                      <Col className="col-auto">
                        <div className="icon icon-shape bg-success text-white rounded-circle shadow">
                          <i className="ni ni-ruler-pencil" />
                        </div>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              </Col>

              <Col lg="6" xl="3">
                <Card className="card-stats mb-2 mb-xl-2">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h4"
                          className="text-uppercase text-muted mb-0"
                        >
                          Adeudos
                        </CardTitle>
                        <span className="h3 font-weight-bold mb-0">0</span>
                      </div>
                      <Col className="col-auto">
                        <div className="icon icon-shape bg-info text-white rounded-circle shadow">
                          <i className="ni ni-ruler-pencil" />
                        </div>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Header;
