//import pages here
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
import NotFound from "./NotFound";
import RequestServices from './RequestServices'
import History from "./history"



//export the page here with a path and the component name
export default {
  Login: { path: "/", component: Login },
  Home: { path: "/home", component: Home },
  Register: { path: "/register", component: Register },
  RequestServices: { path: '/request-services', component: RequestServices},
  History:{path:"/history", component:History},
  NotFound: { path: "*", component: NotFound }
};
