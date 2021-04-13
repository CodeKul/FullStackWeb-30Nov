import logo from "./logo.svg";
import "./App.css";
import Home from "./routeComponents/Home";
import Navbar from "./routeComponents/Navbar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import About from "./routeComponents/About";
import Blogs from "./routeComponents/Blogs";
import Blog from "./routeComponents/Blog";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/blogs" component={Blogs} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
