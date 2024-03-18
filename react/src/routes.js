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
import InicioA from "views/sigetu/admin/HomeAdmin";
import PerfilA from "views/sigetu/admin/PerfilAdmin";
import Alumnado from "views/sigetu/admin/registros/RegAlumno"
import Administrativos from "views/sigetu/admin/registros/RegAdmin"
import Crear from "views/examples/crudcreate"
import Showd from "views/examples/division"
import General from "views/sigetu/admin/tablas/TablaUsuarios"
import AlumnadoS from "views/sigetu/admin/tablas/TablaAlumnado"
import DocenteS from "views/sigetu/admin/tablas/TablaDocentes"
import Grupos from "views/sigetu/admin/grupos/Grupos";

//auth
import Login from "views/screens/Login"
import Error404 from "views/screens/Error404";

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

  //admin
  {
    path: "/inicio",
    name: "INICIO",
    component: <InicioA />,
    layout: "/admin",
  },
  {
    path: "/perfil",
    name: "PERFIL",
    component: <PerfilA />,
    layout: "/admin",
  },
  {
    path: "/registrar/alumnos",
    name: "registrar",
    component: <Alumnado/>,
    layout: "/admin",
  },
  {
    path: "/registrar/administrativos",
    name: "registrar",
    component: <Administrativos/>,
    layout: "/admin",
  },
  {
    path: "/usuarios/alumnos",
    name: "mostrar",
    component: <AlumnadoS/>,
    layout: "/admin",
  },
  {
    path: "/usuarios/docentes",
    name: "mostrar",
    component: <DocenteS/>,
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
    path: "/usuarios/general",
    name: "mostrar",
    component: <General/>,
    layout: "/admin",
  },
  {
    path: "/grupos",
    name: "mostrar",
    component: <Grupos/>,
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
  {
    path: "/Error",
    name: "Error",
    component: <Error404 />,
    layout: "/auth",
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
];
export default routes;
