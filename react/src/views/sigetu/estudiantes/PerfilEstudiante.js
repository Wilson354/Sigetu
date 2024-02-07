
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Container,
  Row,
  Col,
  Modal,
  Label,
  FormText
} from "reactstrap";

import UserHeader from "components/Headers/UserHeader.js";
import React from "react";

class Modals extends React.Component {
  state = {
    defaultModal: false
  };
  toggleModal = state => {
    this.setState({
      [state]: !this.state[state]
    });
  };
  render() {
    return (
      <>
        <UserHeader />
        {/* Altura de las tarjetas */}
        <Container className="mt--9" fluid>
          <Row>
            <Col className="order-xl-2 mb-5 mb-xl-0" xl="4">
              <Card className="card-profile shadow">
                <CardHeader CardHeader className="bg-white border-0 text-center">
                  <h2>
                    Extras
                  </h2>
                </CardHeader>
                <hr className="my-4" />
                <CardBody className="bg-secondary shadow">
                  <Row>
                    <Col md="12">
                      <Button
                        block
                        className="mb-3"
                        color="primary"
                        type="button"
                      >
                        <span className="btn-inner--icon">
                          <i className="ni ni-bag-17" />
                        </span>
                        Horario
                      </Button>
                    </Col>
                    {/* MODALES PARA LAS NOTIFICACIONES DEBEN TENER EL MISMO NOMBRE PARA FUNCIONAR EN CONJUNTO DEPENDIENDO DE CADA COL*/}
                    <Col md="12">
                      <Button
                        block
                        className="mb-3"
                        color="primary"
                        type="button"
                        onClick={() => this.toggleModal("AdeudoModal")}
                      >
                        <span className="btn-inner--icon">
                          <i className="ni ni-bag-17" />
                        </span>
                        Adeudos
                      </Button>
                      <Modal
                        className="modal-dialog-centered"
                        isOpen={this.state.AdeudoModal}
                        toggle={() => this.toggleModal("AdeudoModal")}
                      >
                        <div className="modal-header">
                          <h6 className="modal-title" id="modal-title-default">
                            Type your modal title
                          </h6>
                          <button
                            aria-label="Close"
                            className="close"
                            data-dismiss="modal"
                            type="button"
                            onClick={() => this.toggleModal("AdeudoModal")}
                          >
                            <span aria-hidden={true}>×</span>
                          </button>
                        </div>
                        <div className="modal-body">
                          <p>
                            Far far away, behind the word mountains, far from the
                            countries Vokalia and Consonantia, there live the blind
                            texts. Separated they live in Bookmarksgrove right at the
                            coast of the Semantics, a large language ocean.
                          </p>
                          <p>
                            A small river named Duden flows by their place and supplies
                            it with the necessary regelialia. It is a paradisematic
                            country, in which roasted parts of sentences fly into your
                            mouth.
                          </p>
                        </div>
                        <div className="modal-footer">
                          <Button color="primary" type="button">
                            Aceptar
                          </Button>
                          <Button
                            className="ml-auto"
                            color="link"
                            data-dismiss="modal"
                            type="button"
                            onClick={() => this.toggleModal("AdeudoModal")}
                          >
                            Cerrar
                          </Button>
                        </div>
                      </Modal>
                    </Col>
                    <Col md="12">
                      <Button
                        block
                        className="mb-3"
                        color="warning"
                        type="button"
                        onClick={() => this.toggleModal("solicitudModal")}
                      >
                        <span className="btn-inner--icon">
                          <i className="ni ni-bag-17" />
                        </span>
                        Solicitud cambio carrera
                      </Button>
                      <Modal
                        className="modal-dialog-centered modal-danger"
                        contentClassName="bg-gradient-danger"
                        isOpen={this.state.solicitudModal}
                        toggle={() => this.toggleModal("solicitudModal")}
                      >
                        <div className="modal-header">
                          <button
                            aria-label="Close"
                            className="close"
                            data-dismiss="modal"
                            type="button"
                            onClick={() => this.toggleModal("solicitudModal")}
                          >
                            <span aria-hidden={true}>x</span>
                          </button>
                        </div>
                        <div className="modal-body">
                          <div className="py-3 text-center">
                            <i className="ni ni-bell-55 ni-3x" />
                            <h4 className="heading mt-4">No puedes cambiar de carrera en INGENIERIA PENDEJO!</h4>
                            <p>
                              jajajaja el menso
                            </p>
                          </div>
                        </div>
                        <div className="modal-footer">
                          <Button className="btn-white" color="default" type="button">
                            ENTERADO
                          </Button>
                          <Button
                            className="text-white ml-auto"
                            color="link"
                            data-dismiss="modal"
                            type="button"
                            onClick={() => this.toggleModal("solicitudModal")}
                          >
                            Close
                          </Button>
                        </div>
                      </Modal>
                    </Col>

                    <Col md="12">
                      <Button
                        block
                        className="mb-3"
                        color="success"
                        type="button"
                      >
                        <span className="btn-inner--icon">
                          <i className="ni ni-bag-17" />
                        </span>
                        Biblioteca digital
                      </Button>
                    </Col>

                    <Col md="12">
                      <Button
                        block
                        className="mb-3"
                        color="warning"
                        type="button"
                        onClick={() => this.toggleModal("notificationModal")}
                      >
                        <span className="btn-inner--icon">
                          <i className="ni ni-bag-17" />
                        </span>
                        Referencia bancaria
                      </Button>
                      <Modal
                        className="modal-dialog-centered modal-danger"
                        contentClassName="bg-gradient-danger"
                        isOpen={this.state.notificationModal}
                        toggle={() => this.toggleModal("notificationModal")}
                      >
                        <div className="modal-header">
                          <h6 className="modal-title" id="modal-title-notification">
                            Your attention is required
                          </h6>
                          <button
                            aria-label="Close"
                            className="close"
                            data-dismiss="modal"
                            type="button"
                            onClick={() => this.toggleModal("notificationModal")}
                          >
                            <span aria-hidden={true}>×</span>
                          </button>
                        </div>
                        <div className="modal-body">
                          <div className="py-3 text-center">
                            <i className="ni ni-bell-55 ni-3x" />
                            <h4 className="heading mt-4">You should read this!</h4>
                            <p>
                              A small river named Duden flows by their place and
                              supplies it with the necessary regelialia.
                            </p>
                          </div>
                        </div>
                        <div className="modal-footer">
                          <Button className="btn-white" color="default" type="button">
                            Ok, Got it
                          </Button>
                          <Button
                            className="text-white ml-auto"
                            color="link"
                            data-dismiss="modal"
                            type="button"
                            onClick={() => this.toggleModal("notificationModal")}
                          >
                            Close
                          </Button>
                        </div>
                      </Modal>
                    </Col>


                    {/* 
=============================================================================================================================================================

SECCION DE CREDENCIAL              
El form es para hacer cambios a la credencial del estudiante se debe editar el form

==============================================================================================================================================================
             */}
                    <Col md="12">
                      <Button
                        block
                        className="mb-3"
                        color="primary"
                        type="button"
                        onClick={() => this.toggleModal("defaultModal")}
                      >
                        <span className="btn-inner--icon">
                          <i className="ni ni-bag-17" />
                        </span>
                        cedula de identificacion
                      </Button>
                      <Modal
                        className="modal-dialog-centered"
                        isOpen={this.state.defaultModal}
                        toggle={() => this.toggleModal("defaultModal")}
                      >
                        <div className="modal-header">
                          <h6 className="modal-title" id="modal-title-default">
                            Type your modal title
                          </h6>
                          <button
                            aria-label="Close"
                            className="close"
                            data-dismiss="modal"
                            type="button"
                            onClick={() => this.toggleModal("defaultModal")}
                          >
                            <span aria-hidden={true}>×</span>
                          </button>
                        </div>
                        <div className="modal-body">
                          <Form>
                            <FormGroup>
                              <Label for="exampleEmail">
                                Email
                              </Label>
                              <Input
                                id="exampleEmail"
                                name="email"
                                placeholder="with a placeholder"
                                type="email"
                              />
                            </FormGroup>
                            <FormGroup>
                              <Label for="examplePassword">
                                Password
                              </Label>
                              <Input
                                id="examplePassword"
                                name="password"
                                placeholder="password placeholder"
                                type="password"
                              />
                            </FormGroup>
                            <FormGroup>
                              <Label for="exampleSelect">
                                Select
                              </Label>
                              <Input
                                id="exampleSelect"
                                name="select"
                                type="select"
                              >
                                <option>
                                  1
                                </option>
                                <option>
                                  2
                                </option>
                                <option>
                                  3
                                </option>
                                <option>
                                  4
                                </option>
                                <option>
                                  5
                                </option>
                              </Input>
                            </FormGroup>
                            <FormGroup>
                              <Label for="exampleSelectMulti">
                                Select Multiple
                              </Label>
                              <Input
                                id="exampleSelectMulti"
                                multiple
                                name="selectMulti"
                                type="select"
                              >
                                <option>
                                  1
                                </option>
                                <option>
                                  2
                                </option>
                                <option>
                                  3
                                </option>
                                <option>
                                  4
                                </option>
                                <option>
                                  5
                                </option>
                              </Input>
                            </FormGroup>
                            <FormGroup>
                              <Label for="exampleText">
                                Text Area
                              </Label>
                              <Input
                                id="exampleText"
                                name="text"
                                type="textarea"
                              />
                            </FormGroup>
                            <FormGroup>
                              <Label for="exampleFile">
                                File
                              </Label>
                              <Input
                                id="exampleFile"
                                name="file"
                                type="file"
                              />
                              <FormText>
                                This is some placeholder block-level help text for the above input. It‘s a bit lighter and easily wraps to a new line.
                              </FormText>
                            </FormGroup>
                            <FormGroup tag="fieldset">
                              <legend>
                                Radio Buttons
                              </legend>
                              <FormGroup check>
                                <Input
                                  name="radio1"
                                  type="radio"
                                />
                                {' '}
                                <Label check>
                                  Option one is this and that—be sure to include why it‘s great
                                </Label>
                              </FormGroup>
                              <FormGroup check>
                                <Input
                                  name="radio1"
                                  type="radio"
                                />
                                {' '}
                                <Label check>
                                  Option two can be something else and selecting it will deselect option one
                                </Label>
                              </FormGroup>
                              <FormGroup
                                check
                                disabled
                              >
                                <Input
                                  disabled
                                  name="radio1"
                                  type="radio"
                                />
                                {' '}
                                <Label check>
                                  Option three is disabled
                                </Label>
                              </FormGroup>
                            </FormGroup>
                            <FormGroup check>
                              <Input type="checkbox" />
                              {' '}
                              <Label check>
                                Check me out
                              </Label>
                            </FormGroup>
                            <Button>
                              Submit
                            </Button>
                          </Form>
                        </div>
                        <div className="modal-footer">
                          <Button color="primary" type="button">
                            Aceptar
                          </Button>
                          <Button
                            className="ml-auto"
                            color="link"
                            data-dismiss="modal"
                            type="button"
                            onClick={() => this.toggleModal("defaultModal")}
                          >
                            Cerrar
                          </Button>
                        </div>
                      </Modal>
                    </Col>

                    <Col>
                    <Button
                        block
                        className="mb-3"
                        color="primary"
                        type="button"
                      >
                        <span className="btn-inner--icon">
                          <i className="ni ni-bag-17" />
                        </span>
                        cambio contraseña
                      </Button>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>

{/*
============================================================================================================================

                          seccion de datos personales

============================================================================================================================
*/}
            <Col className="order-xl-1" xl="8">
              <Card className="bg-secondary shadow">
                <CardHeader className="bg-white border-0">
                  <Row >
                    <Col className="col-sm">
                      <span>
                      <h2 className="mb-0">Eduardo Brandon Escorza Bolaños</h2>
                      </span>
                    </Col>
                  </Row>
                </CardHeader>
                <CardBody className="pt-0 pt-md-4">
                  <h2 className="text-muted mb-2">
                    Informacion personal
                  </h2>
                  <div className="pl-lg-4">
                    <Row>
                      <Col className="order-xl-1" xl="4">
                        <h3>Matricula</h3>
                        <h3>Nombre completo</h3>
                        <h3>Fecha nacimiento</h3>
                        <h3>Estado civil</h3>
                        <h3>Curp</h3>
                      </Col>
                      <Col className="order-xl-1" xl="6">
                        <h3>Matricula</h3>
                        <h3>Nombre</h3>
                        <h3>Fecha nacimiento</h3>
                        <h3>Estado civil</h3>
                        <h3>Curp</h3>
                      </Col>
                    </Row>
                  </div>

                  <hr className="my-4" />
                  <h2 className=" text-muted mb-4">
                    Datos academicos
                  </h2>
                  <div className="pl-lg-4">
                    <Row>
                      <Col className="order-xl-1" xl="4">
                        <h3>Carrera</h3>
                        <h3>Grado</h3>
                        <h3>Grupo</h3>
                        <h3>Grupo idioma</h3>
                        <h3>Periodo</h3>
                        <h3>Vidas academicas</h3>
                        <h3>situacion</h3>
                      </Col>
                      <Col className="order-xl-1" xl="6">
                        <h3>Desarrollo de software</h3>
                        <h3>10</h3>
                        <h3>10IDS1</h3>
                        <h3>9IN1</h3>
                        <h3>ENERO-ABRIL 2024</h3>
                        <h3>3</h3>
                        <h3>regular</h3>
                      </Col>
                    </Row>
                  </div>

                  <hr className="my-4" />
                  <h2 className="text-muted mb-4">Numero de afiliacion de seguro facultativo</h2>
                  <div className="pl-lg-4">
                    <Row>
                      <Col className="order-xl-1" xl="4">
                        <h3>Institucion</h3>
                        <h3>numero de afilicacion</h3>
                        <h3>clinica</h3>

                      </Col>
                      <Col className="order-xl-1" xl="6">
                        <h3>Instituto Mexicano del Seguro Social</h3>
                        <h3>1013531</h3>
                        <h3>alguna</h3>
                      </Col>
                    </Row>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </>
    );
  };
}
export default Modals;