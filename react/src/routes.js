/*!
 RUTAS PARA LAS PAGINAS    consejo usar shift+alt+f para ordenar el codigo
*/
import Index from "views/sigetu/estudiantes/HomeEstudiante";
import Perfil from "views/sigetu/estudiantes/PerfilEstudiante";
import Evaluaciones from "views/sigetu/estudiantes/EvaluacionesEstudiante";
import Login from "views/sigetu/Login.js";
import Encuestas from "views/sigetu/estudiantes/EncuestasEstudiante"
import Tramites from "views/sigetu/estudiantes/TramitesEstudiante"
import Formulario from "views/examples/formulario"
import Crud from "views/examples/crudshow"
import Crear from "views/examples/crudcreate"

import Showd from "views/examples/division"

var routes = [
  {
    path: "/inicio",
    name: "INICIO",
    icon: "ni ni-tv-2 text-primary",
    component: <Index />,
    layout: "/alumno",
  },
  {
    path: "/perfil",
    name: "PERFIL",
    icon: "ni ni-single-02 text-yellow",
    component: <Perfil />,
    layout: "/alumno",
  },
  {
    path: "/evaluaciones",
    name: "EVALUACIONES",
    icon: "ni ni-bullet-list-67 text-red",
    component: <Evaluaciones />,
    layout: "/alumno",
  },
  {
    path: "/encuestas",
    name: "ENCUESTAS",
    icon: "ni ni-bullet-list-67 text-red",
    component: <Encuestas />,
    layout: "/alumno",
  },
    {
      path: "/tramites",
      name: "TRAMITES",
      icon: "ni ni-bullet-list-67 text-red",
      component: <Tramites />,
      layout: "/alumno",
    },
  {
    path: "/login",
    name: "Login",
    icon: "ni ni-key-25 text-info",
    component: <Login />,
    layout: "/auth",
  },

  {
    path: "/formulario",
    name: "formulario",
    icon: "ni ni-key-25 text-info",
    component: <Formulario />,
    layout: "/auth",
  },

  {
    path: "/crud",
    name: "crud",
    icon: "ni ni-key-25 text-info",
    component: <Crud/>,
    layout: "/alumno",
  },

  {
    path: "/crear",
    name: "crear",
    icon: "ni ni-key-25 text-info",
    component: <Crear/>,
    layout: "/alumno",
  },

  {
    path: "/showd",
    name: "showd",
    icon: "ni ni-key-25 text-info",
    component: <Showd/>,
    layout: "/alumno",
  },
];
export default routes;
