/*!
 RUTAS PARA LAS PAGINAS    
*/

//alumnos
import Inicio from "views/sigetu/estudiantes/HomeEstudiante";
import Perfil from "views/sigetu/estudiantes/PerfilEstudiante";
import Evaluaciones from "views/sigetu/estudiantes/EvaluacionesEstudiante";
import Encuestas from "views/sigetu/estudiantes/EncuestasEstudiante"
import Tramites from "views/sigetu/estudiantes/TramitesEstudiante"
import Formulario from "views/examples/formulario"
import Calendario from "views/sigetu/estudiantes/Calendario";


//administrador
import Crud from "views/examples/crudshow"
import Crear from "views/examples/crudcreate"
import Showd from "views/examples/division"
import ShowU from "views/examples/usuarioShow"

import Login from "views/screens/Login"

//docente
import Iniciod from "views/sigetu/docentes/HomeDocentes";


var routes = [
  //alumnos
  {
    path: "/inicio",
    name: "INICIO",
    component: <Inicio />,
    layout: "/alumno",
  },
  {
    path: "/perfil",
    name: "PERFIL",
    component: <Perfil />,
    layout: "/alumno",
  },
  {
    path: "/calendario",
    name: "CALENDARIO",
    component: <Calendario />,
    layout: "/alumno",
  },
  {
    path: "/evaluaciones",
    name: "EVALUACIONES",
    component: <Evaluaciones />,
    layout: "/alumno",
  },
  {
    path: "/encuestas",
    name: "ENCUESTAS",
    component: <Encuestas />,
    layout: "/alumno",
  },
    {
      path: "/tramites",
      name: "TRAMITES",
      component: <Tramites />,
      layout: "/alumno",
    },
//auth
  {
    path: "/formulario",
    name: "formulario",
    component: <Formulario />,
    layout: "/auth",
  },

  {
    path: "/login",
    name: "login",
    component: <Login />,
    layout: "/auth",
  },

  //admin
  {
    path: "/crud",
    name: "crud",
    component: <Crud/>,
    layout: "/alumno",
  },

  {
    path: "/crear",
    name: "crear",
    component: <Crear/>,
    layout: "/alumno",
  },

  {
    path: "/showd",
    name: "showd",
    component: <Showd/>,
    layout: "/alumno",
  },
  {
    path: "/showu",
    name: "showu",
    component: <ShowU/>,
    layout: "/alumno",
  },

  //docentes
  {
    path: "/inicio",
    name: "INICIO",
    component: <Iniciod />,
    layout: "/docente",
  },
];
export default routes;
