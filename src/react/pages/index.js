//import pages here
import Home from "./Home";
import Login from "./Login";
import NotFound from "./NotFound"


//export the page here with a path and the component name
export default {
  Home: { path: "/", component: Home },
  Login: { path: "/login", component: Login },
  NotFound: { path: "*", component: NotFound }
};
