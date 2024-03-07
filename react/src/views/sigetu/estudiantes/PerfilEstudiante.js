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
  FormText,
  Table
} from "reactstrap";
import React, { useState, useEffect } from "react";
import { useAuth } from "context/AuthContext";
import { doc, getDoc } from "firebase/firestore";
import { db, auth } from '../../../firebase.config';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';
import { format } from 'date-fns';


const user = auth.currentUser;
if (user) {
  const userId = user.uid;
  console.log(userId);
} else {
  console.log('No hay usuario autenticado');
}

const getBase64 = (img, callback) => {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
};
const beforeUpload = (file) => {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return isJpgOrPng && isLt2M;
};


const Perfil = () => {
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState();
  const [userData, setUserData] = useState(null);

  const handleChange = (info) => {
    if (info.file.status === 'uploading') {
      setLoading(true);
      return;
    }
    if (info.file.status === 'done') {
      getBase64(info.file.originFileObj, (url) => {
        setLoading(false);
        setImageUrl(url);
      });
    }
  };
  const uploadButton = (
    <button
      style={{
        border: 0,
        background: 'none',
      }}
      type="button"
    >
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </button>
  );

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
          const userData = await getAlumnoById(userId);
          setUserData(userData);
        } else {
          console.log('No hay usuario autenticado');
        }
      } catch (error) {
        console.error('Error al cargar los datos del usuario:', error);
      }
    };
    fetchUserData();
  }, []);

  const getAlumnoById = async (userId) => {
    try {
      const docRef = doc(db, 'usuarios', userId);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const userData = docSnap.data();
        console.log(userData);
        return userData;
      } else {
        console.log('No se encontraron datos para el usuario con el ID proporcionado');
        return null;
      }
    } catch (error) {
      console.error('Error al obtener los datos del usuario:', error);
      return null;
    }
  };

  return (
    <>
      <Container fluid>
        <Row>
          <Col className="order-xl-6 mb-5 mb-xl-0" xl="3">
            <Card className="card-profile shadow">
              <CardHeader CardHeader className=" border-0 text-center">
                <Upload
                  name="avatar"
                  listType="picture-card"
                  className="avatar-uploader"
                  showUploadList={false}
                  action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
                  beforeUpload={beforeUpload}
                  onChange={handleChange}
                >
                  {imageUrl ? (
                    <img
                      src={imageUrl}
                      alt="..."
                      style={{
                        maxWidth: '100%', // Limita el ancho de la imagen al ancho máximo del contenedor
                        maxHeight: '100%', // Limita la altura de la imagen a la altura máxima del contenedor
                        width: 'auto', // Hace que la imagen se ajuste automáticamente al ancho máximo permitido
                        height: 'auto',
                      }}
                    />
                  ) : (
                    uploadButton
                  )}
                </Upload>
              </CardHeader>
              <hr className="my-1" />
              <CardBody className="bg-dark shadow">
                <Row>
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
                      color="info"
                      type="button"
                    >
                      <span className="btn-inner--icon">
                        <i className="ni ni-bag-17" />
                      </span>
                      Horario
                    </Button>
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
                      color="info"
                      type="button"
                      isOpen={defaultModal}
                      onClick={() => toggleModal("defaultModal")}
                    >
                      <span className="btn-inner--icon">
                        <i className="ni ni-bag-17" />
                      </span>
                      cedula de identificacion
                    </Button>
                    <Modal
                      className="modal-dialog-centered"
                      isOpen={defaultModal}
                      toggle={() => toggleModal("defaultModal")}
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
                          onClick={() => toggleModal("defaultModal")}
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
                          onClick={() => toggleModal("defaultModal")}
                        >
                          Cerrar
                        </Button>
                      </div>
                    </Modal>
                  </Col>

                  {/* MODALES PARA LAS NOTIFICACIONES DEBEN TENER EL MISMO NOMBRE PARA FUNCIONAR EN CONJUNTO DEPENDIENDO DE CADA COL*/}
                  <Col md="12">
                    <Button
                      block
                      className="mb-3"
                      color="warning"
                      type="button"
                      onClick={() => toggleModal("AdeudoModal")}
                    >
                      <span className="btn-inner--icon">
                        <i className="ni ni-bag-17" />
                      </span>
                      Adeudos
                    </Button>
                    <Modal
                      className="modal-dialog-centered"
                      isOpen={AdeudoModal}
                      toggle={() => toggleModal("AdeudoModal")}
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
                          onClick={() => toggleModal("AdeudoModal")}
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
                          onClick={() => toggleModal("AdeudoModal")}
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
                      onClick={() => toggleModal("solicitudModal")}
                    >
                      <span className="btn-inner--icon">
                        <i className="ni ni-bag-17" />
                      </span>
                      Solicitud cambio carrera
                    </Button>
                    <Modal
                      className="modal-dialog-centered modal-danger"
                      contentClassName="bg-gradient-danger"
                      isOpen={solicitudModal}
                      toggle={() => toggleModal("solicitudModal")}
                    >
                      <div className="modal-header">
                        <button
                          aria-label="Close"
                          className="close"
                          data-dismiss="modal"
                          type="button"
                          onClick={() => toggleModal("solicitudModal")}
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
                          onClick={() => toggleModal("solicitudModal")}
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
                      color="danger"
                      type="button"
                      onClick={() => toggleModal("notificationModal")}
                    >
                      <span className="btn-inner--icon">
                        <i className="ni ni-bag-17" />
                      </span>
                      Referencia bancaria
                    </Button>
                    <Modal
                      className="modal-dialog-centered modal-danger"
                      contentClassName="bg-gradient-danger"
                      isOpen={notificationModal}
                      toggle={() => toggleModal("notificationModal")}
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
                          onClick={() => toggleModal("notificationModal")}
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
                          onClick={() => toggleModal("notificationModal")}
                        >
                          Close
                        </Button>
                      </div>
                    </Modal>
                  </Col>

                  <Col>
                    <Button
                      block
                      className="mb-3"
                      color="danger"
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
          <Col className="order-xl-1" xl="9">
            <Card className="bg-secondary shadow">
              <CardBody className="pt-0 pt-md-4">
                <Col>
                  <Row className="align-items-center">
                    <div className="col">
                      <h2 className="text-muted mb-2">
                        Informacion personal
                      </h2>
                    </div>
                  </Row>
                  <Table borderless size="sm" className="align-items-center table-flush" responsive>
                    <tbody>
                      <tr>
                        <th><h3>Matricula</h3></th>
                        <td><h3>{userData && userData.matricula}</h3></td>
                      </tr>
                      <tr>
                        <th><h3>Nombre completo</h3></th>
                        <td>
                        <h3>{userData && userData.nombres} {userData && userData.apellidos}</h3>
                        </td>
                      </tr>
                      <tr>
                        <th><h3>Estado civil</h3></th>
                        <td><h3>{userData && userData.civil}</h3></td>
                      </tr>
                      <tr>
                        <th><h3>Curp</h3></th>
                        <td><h3>{userData && userData.curp}</h3></td>
                      </tr>
                    </tbody>
                  </Table>
                </Col>

                <hr className="my-2" />
                <Col>
                  <Row className="align-items-center">
                    <div className="col">
                      <h2 className="text-muted mb-1">
                        Informacion Escolar
                      </h2>
                    </div>
                  </Row>
                  <Table borderless size="sm" className="align-items-center table-flush" responsive>
                    <tbody>
                      <tr>
                        <th><h3>Carrera</h3></th>
                        <td><h3>{userData && userData.carrera}</h3></td>
                      </tr>
                      <tr>
                        <th><h3>Area</h3></th>
                        <td><h3>{userData && userData.area}</h3></td>
                      </tr>
                      <tr>
                        <th><h3>Grado</h3></th>
                        <td><h3>{userData && userData.grado}</h3></td>
                      </tr>
                      <tr>
                        <th><h3>Grupo</h3></th>
                        <td><h3>{userData && userData.grupo}</h3></td>
                      </tr>
                      <tr>
                        <th><h3>Grupo idioma</h3></th>
                        <td><h3>{userData && userData.grupoi}</h3></td>
                      </tr>
                      <tr>
                        <th><h3>Periodo</h3></th>
                        <td><h3>{userData && userData.periodo}</h3></td>
                      </tr>
                      <tr>
                        <th><h3>Vidas academicas</h3></th>
                        <td><h3>{userData && userData.vidas}</h3></td>
                      </tr>
                      <tr>
                        <th><h3>situacion</h3></th>
                        <td><h3>{userData && userData.situacion}</h3></td>
                      </tr>
                    </tbody>
                  </Table>
                </Col>
                <hr className="my-2" />
                <Col>
                  <Row className="align-items-center">
                    <div className="col">
                      <h2 className="text-muted mb-1">
                        Numero de afiliacion de seguro facultativo
                      </h2>
                    </div>
                  </Row>
                  <Table borderless size="sm" className="align-items-center table-flush" responsive>
                    <tbody>
                      <tr>
                        <th><h3>Institucion</h3></th>
                        <td><h3>{userData && userData.institucion}</h3></td>
                      </tr>
                      <tr>
                        <th><h3>numero de afilicacion</h3></th>
                        <td><h3>{userData && userData.afiliacion}</h3></td>
                      </tr>
                      <tr>
                        <th><h3>clinica</h3></th>
                        <td><h3>{userData && userData.clinica}</h3></td>
                      </tr>
                    </tbody>
                  </Table>
                </Col>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Perfil;