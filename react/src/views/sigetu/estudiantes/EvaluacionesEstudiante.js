
import {
  Badge,
  Card,
  CardHeader,
  CardFooter,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Media,
  Pagination,
  PaginationItem,
  PaginationLink,
  Progress,
  Table,
  Container,
  Row,
  UncontrolledTooltip,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane
} from "reactstrap";

import UserHeader from "components/Headers/UserHeader";
import React from "react";
import classnames from "classnames";

class Navs extends React.Component {
  state = {
    tabs: 1
  };
  toggleNavs = (e, state, index) => {
    e.preventDefault();
    this.setState({
      [state]: index
    });
  };
  render() {
    return (
      <>
        <UserHeader />
        <Container className="mt--9" fluid>
          {/* Table */}
          <Row>
            <div className="col">
              <Card className="shadow">
                <CardHeader className="border-0">
                  <h3 className="mb-0">Evaluaciones</h3>
                  <div className="nav-wrapper">
                    <Nav
                      className="nav-fill flex-column flex-md-row"
                      id="tabs-icons-text"
                      pills
                      role="tablist"
                    >
                      <NavItem>
                        <NavLink
                          aria-selected={this.state.tabs === 1}
                          className={classnames("mb-sm-3 mb-md-0", {
                            active: this.state.tabs === 1
                          })}
                          onClick={e => this.toggleNavs(e, "tabs", 1)}
                          href="#pablo"
                          role="tab"
                        >
                          Primer
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          aria-selected={this.state.tabs === 2}
                          className={classnames("mb-sm-3 mb-md-0", {
                            active: this.state.tabs === 2
                          })}
                          onClick={e => this.toggleNavs(e, "tabs", 2)}
                          href="#pablo"
                          role="tab"
                        >
                          Segundo
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          aria-selected={this.state.tabs === 3}
                          className={classnames("mb-sm-3 mb-md-0", {
                            active: this.state.tabs === 3
                          })}
                          onClick={e => this.toggleNavs(e, "tabs", 3)}
                          href="#pablo"
                          role="tab"
                        >
                          tercero
                        </NavLink>
                      </NavItem>
                    </Nav>
                  </div>
                </CardHeader>

                <Table className="align-items-center table-flush" responsive>

                  <tbody>
                    <Card className="shadow">
                      <CardBody>
                        <TabContent activeTab={"tabs" + this.state.tabs}>
                          <TabPane tabId="tabs1">
                            <Table striped className="align-items-center table-flush" responsive>
                              <thead className="thead-Default" >
                                <tr className="bg-info">
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
                                  <td>sa</td>
                                  <td>SA</td>
                                </tr>
                                <tr>
                                  <th scope="row">Videojuegos</th>
                                  <td>Tellez Barrientos Omar</td>
                                  <td>DE</td>
                                  <td>DE</td>
                                  <td>SA</td>
                                  <td>SA</td>
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
                          </TabPane>

                          <TabPane tabId="tabs2">
                            <Table striped className="align-items-center table-flush" responsive>
                              <thead className="thead-Default" >
                                <tr className="bg-default">
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
                                  <td className="text-danger">NA</td>
                                  <td className="text-danger">NA</td>
                                </tr>
                                <tr>
                                  <th scope="row">Videojuegos</th>
                                  <td>Tellez Barrientos Omar</td>
                                  <td>DE</td>
                                  <td>DE</td>
                                  <td>SA</td>
                                  <td>SA</td>
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
                          </TabPane>

                          <TabPane tabId="tabs3">
                              <Table striped className="align-items-center table-flush" responsive>
                                <thead className="thead-Default">
                                  <tr className="bg-success">
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
                          </TabPane>
                        </TabContent>
                      </CardBody>
                    </Card>
                  </tbody>
                </Table>
              </Card>
            </div>
          </Row>

        </Container>
      </>
    );
  };
}

export default Navs;
