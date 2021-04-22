import logo from "./logo.svg";
import "./App.css";
import NewComponent from "./NewComponent";
import DisplayComponent from "./DisplayComponent";
import Employee from "./Employee";
import TableComponent from "./TableComponent";
import Clock from "./Clock";
import FunComponent from "./FunComponent";
import Message from "./Message";
import LoginStatus from "./LoginStatus";
import Counter from "./Counter";
import UseEffectComponent from "./UseEffectComponent";
import CovidCount from "./CovidCount";
import RefComponent from "./RefComponent";
import StopWatchRef from "./StopWatchRef";
import RefInputFocus from "./RefInputFocus";
import RegistrationForm from "./RegistrationForm";
import StateandRef from "./StateandRef";
import Forms from "./Forms";
import Styling from "./Styling";
import DemoCSSModules from "./DemoCSSModules";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./routeComponents/Home";
import About from "./routeComponents/About";
import ContactUs from "./routeComponents/ContactUs";
import Navbar from "./routeComponents/Navbar";
import Blog from "./routeComponents/Blog";
import FragmentComponent from "./FragmentComponent";
import Table from "./Table";
function App() {
  // let a = 10;
  // let b = 20;
  // let total = a + b;
  // let numbers = [100, 40, "Hello"];
  // let person = { firstName: "JOhn", city: "Pune" };
  // let employee = { salary: 40000, empid: 100 };
  // let isActive = false;
  // let isLoggedIn = true;
  return (
    <div>
      {/* <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/about">
            <ContactUs />
          </Route>
          <Route path="/contact" component={ContactUs} />
          <Route path="/blog" component={Blog} />
        </Switch>
      </BrowserRouter> */}

      {/* <FragmentComponent/> */}

      <Table/>
      
    </div>
  );
}
//JSX

export default App;
