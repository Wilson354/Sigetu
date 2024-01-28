/*!
 RUTAS PARA LAS PAGINAS    consejo usar shift+alt+f para ordenar el codigo
*/
import Index from "views/sigetu/estudiantes/HomeEstudiante";
import Profile from "views/sigetu/estudiantes/PerfilEstudiante";
import Tables from "views/sigetu/estudiantes/EvaluacionesEstudiante";
import Login from "views/sigetu/Login.js";
import Icons from "views/examples/Icons.js";

import Tables2 from "views/sigetu/estudiantes/EncuestasEstudiante"
import Tramites from "views/sigetu/estudiantes/TramitesEstudiante"

var routes = [
  {
    path: "/index",
    name: "INICIO",
    icon: "ni ni-tv-2 text-primary",
    component: <Index />,
    layout: "/admin",
  },
  {
    path: "/icons",
    name: "Icons",
    icon: "ni ni-planet text-blue",
    component: <Icons />,
    layout: "/admin",
  },

  {
    path: "/perfil",
    name: "PERFIL",
    icon: "ni ni-single-02 text-yellow",
    component: <Profile />,
    layout: "/admin",
  },
  {
    path: "/evaluaciones",
    name: "EVALUACIONES",
    icon: "ni ni-bullet-list-67 text-red",
    component: <Tables />,
    layout: "/admin",
  },
  {
    path: "/encuestas",
    name: "ENCUESTAS",
    icon: "ni ni-bullet-list-67 text-red",
    component: <Tables2 />,
    layout: "/admin",
  },
  {
    path: "/tramites",
    name: "TRAMITES",
    icon: "ni ni-bullet-list-67 text-red",
    component: <Tramites />,
    layout: "/admin",
  },
  {
    path: "/login",
    name: "Login",
    icon: "ni ni-key-25 text-info",
    component: <Login />,
    layout: "/auth",
  },
];
export default routes;
