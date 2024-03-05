import React, { useState } from 'react';
import { Layout, Menu, theme } from 'antd';
import { Link } from 'react-router-dom'; // Importa Link desde react-router-dom
import { Routes, Route, useNavigate } from 'react-router-dom'; // Agrega Routes y Route para manejar las rutas
import routes from '../routes'; // Importa tus rutas desde routes.js
import {
  HomeFilled,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
  LogoutOutlined,
  CalendarFilled,
} from '@ant-design/icons';

import AlumNavbar from 'components/Navbars/AlumNavbar';

import { getAuth, signOut } from "firebase/auth";

const { SubMenu } = Menu;

const { Header, Content, Footer, Sider } = Layout;

// Define tus elementos de menú
const items = [

  { key: '1', label: 'INICIO', icon: <HomeFilled />, path: '/alumno/inicio' },
  { key: '2', label: 'PERFIL', icon: <UserOutlined />, path: '/alumno/perfil' },
  { key: '3', label: 'CALENDARIO', icon: <CalendarFilled />, path: '/alumno/calendario' },
  { key: '4', label: 'EVALUACIONES', icon: <FileOutlined />, path: '/alumno/evaluaciones' },
  {
    key: '5',
    label: 'EVALUACIONES',
    icon: <FileOutlined />,
    children: [
      { key: '6', label: 'EVALUACION DOCENTE', icon: <FileOutlined />, path: '/alumno/evaluacion/docente' },
      { key: '7', label: 'EVALUACION ESTUDIANTIL', icon: <FileOutlined />, path: '/alumno/evaluacion/estudiante' },
    ]
  },
  {
    key: '8',
    label: 'TRAMITES',
    icon: <FileOutlined />,
    children: [
      { key: '9', label: 'TITULACIÓN', icon: <FileOutlined />, path: '/alumno/' },
      { key: '10', label: 'CERTIFICADO NO ADEUDO', icon: <FileOutlined />, path: '/alumno/' },
      { key: '11', label: 'CAMBIO DE CARRERA', icon: <FileOutlined />, path: '/alumno/' },
    ]
  },


  // Agrega más elementos de menú según sea necesario
];

const Alumno = () => {
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
        navigate("/alumno/inicio");
      })
      .catch((error) => {
        console.error("Error al cerrar sesión:", error);
      });
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)} style={{ background: 'white' }}>
      <Menu  defaultSelectedKeys={['1']} mode="inline" >
  <div style={{ margin: "10px" }}>
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
    // Verifica si el elemento tiene hijos (es un submenú)
    item.children ? (
      <SubMenu key={item.key} title={item.label} icon={item.icon}>
        {item.children.map((child) => (
          <Menu.Item key={child.key} icon={child.icon}>
            <Link to={child.path}>{child.label}</Link>
          </Menu.Item>
        ))}
      </SubMenu>
    ) : (
      // Si no tiene hijos, es un elemento de menú normal
      <Menu.Item key={item.key} icon={item.icon}>
        <Link to={item.path}>{item.label}</Link>
      </Menu.Item>
    )
  ))}
  <Menu.Divider style={{ margin: '8px 0', borderTop: '2px solid #616161' }} />
  {/* Botón de logout */}
  <Menu.Item key="logout" icon={<LogoutOutlined />} onClick={handleLogout} style={{ color: 'red' }}>
    SALIR
  </Menu.Item>
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

export default Alumno;

