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
import Inicioa from "views/sigetu/admin/HomeAdmin";
import Perfila from "views/sigetu/admin/PerfilAdmin";
import Crud from "views/sigetu/admin/CrudUsers"
import Crear from "views/examples/crudcreate"
import Showd from "views/examples/division"
import ShowU from "views/sigetu/admin/CrudShow"

//auth
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
    path: "/inicio",
    name: "INICIO",
    component: <Inicioa />,
    layout: "/admin",
  },
  {
    path: "/perfil",
    name: "PERFIL",
    component: <Perfila />,
    layout: "/admin",
  },
  {
    path: "/crud",
    name: "crud",
    component: <Crud/>,
    layout: "/admin",
  },

  {
    path: "/crear",
    name: "crear",
    component: <Crear/>,
    layout: "/admin",
  },

  {
    path: "/showd",
    name: "showd",
    component: <Showd/>,
    layout: "/admin",
  },
  {
    path: "/showu",
    name: "showu",
    component: <ShowU/>,
    layout: "/admin",
  },

  //docentes
  {
    path: "/inicio",
    name: "INICIO",
    component: <Iniciod />,
    layout: "/docente",
  },

  //errores
  
];
export default routes;
