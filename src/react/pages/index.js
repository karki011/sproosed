//import pages here
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
import NotFound from "./NotFound";
import MyRequests from './MyRequests';
import RequestServices from './RequestServices'
import ViewQuotes from './ViewQuotes'
import ViewRequests from './ViewRequests'
import ServiceCategoryList from './ServiceCategoryList'


//export the page here with a path and the component name
export default {
  Login: { path: "/", component: Login },
  Home: { path: "/home", component: Home },
  Register: { path: "/register", component: Register },
  MyRequests: {path: '/myRequests', component: MyRequests},
  RequestServices: {path: '/RequestServices', component: RequestServices},
  ViewQuotes: {path: './ViewQuotes/:user', component: ViewQuotes},
  ViewRequests: {path: './ViewRequests/:user', component: ViewRequests},
  ServiceCategoryList: { path: '/ServiceCategoryList', component: ServiceCategoryList},
  NotFound: { path: "*", component: NotFound }
};
