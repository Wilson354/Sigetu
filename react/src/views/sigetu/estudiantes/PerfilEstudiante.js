import {
  Button, Card, CardHeader, CardBody, FormGroup, Form, Input, Container, Row, Col, Modal, Label, FormText, Table
} from "reactstrap";
import React, { useState, useEffect } from "react";
import { useAuth } from "context/AuthContext";
import { doc, getDoc,collection, getDocs  } from "firebase/firestore";
import { db, auth } from '../../../firebase.config';
import { notification, Upload, Image } from 'antd';


const PerfilEstudiante = () => {

  const [userData, setUserData] = useState(null);
  const [defaultModal, setDefaultModal] = useState(false);
  const [AdeudoModal, setAdeudoModal] = useState(false);
  const [solicitudModal, setSolicitudModal] = useState(false);
  const [notificationModal, setNotificationModal] = useState(false);
  const toggleModal = (modal) => {
    switch (modal) {
      case 'defaultModal':
        setDefaultModal(!defaultModal);
        break;
      case 'AdeudoModal':
        setAdeudoModal(!AdeudoModal);
        break;
      case 'solicitudModal':
        setSolicitudModal(!solicitudModal);
        break;
      case 'notificationModal':
        setNotificationModal(!notificationModal);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const user = auth.currentUser;
        if (user) {
          const userId = user.uid;
          const userDocRef = doc(db, 'alumnos', userId);
          const userDocSnap = await getDoc(userDocRef);
          if (userDocSnap.exists()) {
            const userData = userDocSnap.data();
            setUserData(userData); // Establece los datos del documento principal de alumno
  
            // Ahora, dentro de esta lógica, puedes acceder a la subcolección 'informacion'
            const informacionRef = collection(userDocRef, 'informacion');
            const informacionSnapshot = await getDocs(informacionRef);
            if (!informacionSnapshot.empty) {
              const informacionData = informacionSnapshot.docs[0].data(); // Suponiendo que solo hay un documento en la subcolección
              console.log('Informacion:', informacionData);
              // Actualiza el estado local userData con los datos adicionales de la subcolección
              setUserData(prevUserData => ({ ...prevUserData, curp: informacionData.curp, otroCampo: informacionData.otroCampo }));
            } else {
              console.log('No hay datos en la subcolección "informacion"');
            }
          } else {
            console.log('No se encontraron datos para el usuario con el ID proporcionado');
          }
        } else {
          console.log('No hay usuario autenticado');
        }
      } catch (error) {
        console.error('Error al cargar los datos del usuario:', error);
      }
    };
  
    fetchUserData();
  }, []);
  
  
  

  return (
    <>
      <Container fluid>
        <Row>
          <Col className="order-xl-2 mb-5 mb-xl-0" xl="4">
            <Card className="card-profile shadow">
              <CardHeader className="text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
                <Image
                  alt="Perfil"
                  width={200}
                  src={userData && userData.imgperfil}
                />
              </CardHeader>
              <CardBody className="pt-0 pt-md-4">
                <Row>
                  <div className="col">
                    <div className="card-profile-stats d-flex justify-content-center mt-md-5">
                      <div>
                        <span className="heading">22</span>
                        <span className="description">Friends</span>
                      </div>
                      <div>
                        <span className="heading">10</span>
                        <span className="description">Photos</span>
                      </div>
                      <div>
                        <span className="heading">89</span>
                        <span className="description">Comments</span>
                      </div>
                    </div>
                  </div>
                </Row>
                <div className="text-center">
                  <h3>
                    {userData && userData.nombres} {userData && userData.apellidos}
                  </h3>
                  <div className="h5 font-weight-300">
                    <i className="ni location_pin mr-2" />
                    Bucharest, Romania
                  </div>
                  <div className="h5 mt-4">
                    <i className="ni business_briefcase-24 mr-2" />
                    Solution Manager - Creative Tim Officer
                  </div>
                  <div>
                    <i className="ni education_hat mr-2" />
                    University of Computer Science
                  </div>
                  <hr className="my-4" />
                  <p>
                    Ryan — the name taken by Melbourne-raised, Brooklyn-based
                    Nick Murphy — writes, performs and records all of his own
                    music.
                  </p>
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    Show more
                  </a>
                </div>
              </CardBody>
            </Card>
          </Col>

          <Col className="order-xl-1" xl="8">
            <Card className="bg-secondary shadow">
              <CardHeader className="bg-white border-0">
                <Row className="align-items-center">
                  <Col xs="8">
                    <h3 className="mb-0">Mi cuenta</h3>
                  </Col>
                  <Col className="text-right" xs="4">
                    <Button
                      color="primary"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      size="sm"
                    >
                      AYUDA
                    </Button>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <Form>
                  <h6 className="heading-small text-muted mb-4">
                    Informacion Personal
                  </h6>
                  <div className="pl-lg-4">
                    <Row>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                          >
                            Matricula
                          </label>
                          <Input
                            className="form-control-alternative"
                            value={userData && userData.matricula}
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-email"
                          >
                            Correo
                          </label>
                          <Input
                            className="form-control-alternative"
                            value={userData && userData.correo}
                            id="input-email"
                            type="email"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                          >
                            Curp
                          </label>
                          <Input
                            className="form-control-alternative"
                            value={userData && userData.curp}
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-last-name"
                          >
                            Apellidos
                          </label>
                          <Input
                            className="form-control-alternative"
                            value={userData && userData.apellidos}
                            id="input-last-name"
                            placeholder="Last name"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                  </div>
                  <hr className="my-4" />
                  <h6 className="heading-small text-muted mb-4">
                    Contact information
                  </h6>
                  <div className="pl-lg-4">
                    <Row>
                      <Col md="12">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-address"
                          >
                            Address
                          </label>
                          <Input
                            className="form-control-alternative"
                            defaultValue="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09"
                            id="input-address"
                            placeholder="Home Address"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg="4">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-city"
                          >
                            City
                          </label>
                          <Input
                            className="form-control-alternative"
                            defaultValue="New York"
                            id="input-city"
                            placeholder="City"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="4">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-country"
                          >
                            Country
                          </label>
                          <Input
                            className="form-control-alternative"
                            defaultValue="United States"
                            id="input-country"
                            placeholder="Country"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="4">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-country"
                          >
                            Postal code
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="input-postal-code"
                            placeholder="Postal code"
                            type="number"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                  </div>
                  <hr className="my-4" />
                  {/* Description */}
                  <h6 className="heading-small text-muted mb-4">About me</h6>
                  <div className="pl-lg-4">
                    <FormGroup>
                      <label>About Me</label>
                      <Input
                        className="form-control-alternative"
                        placeholder="A few words about you ..."
                        rows="4"
                        defaultValue="A beautiful Dashboard for Bootstrap 4. It is Free and
                        Open Source."
                        type="textarea"
                      />
                    </FormGroup>
                  </div>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default PerfilEstudiante;
