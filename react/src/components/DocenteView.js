import React, { useState } from 'react';
import { Layout, Menu, theme } from 'antd';
import { Link } from 'react-router-dom'; // Importa Link desde react-router-dom
import { Routes, Route, useNavigate } from 'react-router-dom'; // Agrega Routes y Route para manejar las rutas
import routes from '../routes'; // Importa tus rutas desde routes.js
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';

import HomeEstudiante from 'views/sigetu/estudiantes/HomeEstudiante';
import AlumNavbar from 'components/Navbars/AlumNavbar';

import { getAuth, signOut } from "firebase/auth";

const { Header, Content, Footer, Sider } = Layout;

// Define tus elementos de menú
const items = [

  { key: '1', label: 'INICIO', icon: <PieChartOutlined />, path: '/alumno/inicio' },
  { key: '2', label: 'PERFIL', icon: <DesktopOutlined />, path: '/alumno/perfil' },
  { key: '3', label: 'CALENDARIO', icon: <DesktopOutlined />, path: '/alumno/calendario' },

  // Agrega más elementos de menú según sea necesario
];

const Docente = () => {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

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

  const handleLogout = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.error("Error al cerrar sesión:", error);
      });
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
          <div style={{
            margin: "10px",
          }}>
            <img
              alt="..."
              style={{
                width: "50px",
                height: "auto",
                position: "relative",
                left: "10px",
                top: "0px",
              }}
              src={require("assets/img/theme/sigetu_logo.png")}
            />
          </div>

          {items.map((item) => (
            // Utiliza Link para vincular cada elemento de menú a su ruta
            <Menu.Item key={item.key} icon={item.icon}>
              <Link to={item.path}>{item.label}</Link>
            </Menu.Item>
          ))}
          <button onClick={(e) => handleLogout(e)} className="button">
              logout
            </button>
        </Menu>
      </Sider>
      <Layout>
        <AlumNavbar />
        <Content style={{
          padding: "15px",
          minHeight: "100vh",
          backgroundImage:
          "url(" + require("assets/img/theme/uttecamac.jpg")+")",
          backgroundSize: "cover",
          backgroundPosition: "center",
          }}
          >
          <Routes>
            {getRoutes(routes)}
          </Routes>
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          UTTECAMAC ©{new Date().getFullYear()} INKOVA
        </Footer>
      </Layout>
    </Layout>
  );
};

export default Docente;

