import logo from "./logo.svg";
import "./App.css";
import BooksList from "./components/BooksList";
import AddBook from "./components/AddBook";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import EditBook from "./components/EditBook";
import NotFound from "./components/NotFound";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={BooksList}></Route>
          <Route path="/addbook" component={AddBook}></Route>
          <Route path="/editbook/:id" component={EditBook}></Route>
          <Route component={NotFound}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
