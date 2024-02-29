import { Link } from "react-router-dom";
import React from 'react';
import {
  NavbarBrand,
  Navbar,
  Container,
  Col,
} from "reactstrap";
import { Input, QRCode, Space } from 'antd';

const AdminNavbar = () => {

  return (
    <>
      <Navbar className="navbar-top navbar-horizontal navbar-dark" expand="md">
        <Container className="px-5 justify-content-center" style={{ marginLeft: '800px' }}>
          <Col xl="10">
            <NavbarBrand to="/" tag={Link}>
              <img
                alt="..."
                style={{ width: '110px', height: 'auto' }}
                src={require("../../assets/img/theme/sigetu_logo.png")}
              />
            </NavbarBrand>
          </Col>
          <Col className="bg-white" xl="1.5">
            <Space direction="vertical" align="center">
              <QRCode
                errorLevel="H"
                value="https://github.com/EduardoEscorza/sigetu"
                icon="../../assets/img/icons/sigetu_logo.svg"
              />
              <p>Descarga la app</p>
            </Space>
          </Col>
        </Container>
      </Navbar>
    </>
  );
};

export default AdminNavbar;
