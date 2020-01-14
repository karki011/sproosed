//import pages here
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
import NotFound from "./NotFound";
import RequestServices from './RequestServices'
import History from "./history";
import Profile from './Profile';
import LandingPage from './LandingPage'



//export the page here with a path and the component name
export default {
  LandingPage: {path: '/', component: LandingPage},
  Login: { path: "/Login", component: Login },
  Home: { path: "/home", component: Home },
  Register: { path: "/register", component: Register },
  RequestServices: { path: '/request-services', component: RequestServices},
  History: { path: "/history", component: History },
  Profile: { path: '/user', component: Profile},
  NotFound: { path: "*", component: NotFound }
};
