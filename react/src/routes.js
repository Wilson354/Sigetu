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



var routes = [
  //alumnos
  {
    path: "/inicio",
    name: "INICIO",
    icon: "ni ni-tv-2 text-primary",
    component: <Inicio />,
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
    path: "/calendario",
    name: "CALENDARIO",
    icon: "ni ni-single-02 text-yellow",
    component: <Calendario />,
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
    path: "/formulario",
    name: "formulario",
    icon: "ni ni-key-25 text-info",
    component: <Formulario />,
    layout: "/auth",
  },

  //admin
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
  {
    path: "/showu",
    name: "showu",
    icon: "ni ni-key-25 text-info",
    component: <ShowU/>,
    layout: "/alumno",
  },
];
export default routes;
