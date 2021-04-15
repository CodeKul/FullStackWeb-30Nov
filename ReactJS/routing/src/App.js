import logo from "./logo.svg";
import "./App.css";
import Home from "./routeComponents/Home";
import Navbar from "./routeComponents/Navbar";
import { BrowserRouter, Route, Switch, useRouteMatch } from "react-router-dom";
import About from "./routeComponents/About";
import Article from "./routeComponents/Article";
import Blog from "./routeComponents/Blog";
import GamePage from "./routeComponents/GamePage";
import Winner from "./routeComponents/Winner";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/blogs" component={Article} />
          <Route path="/gamepage" component={GamePage} />
          <Route path="/winner" component={Winner}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
