import logo from "./logo.svg";
import "./App.css";
import BooksList from "./components/BooksList";
import AddBook from "./components/AddBook";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import EditBook from "./components/EditBook";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={BooksList}></Route>
          <Route path="/addbook" component={AddBook}></Route>
          <Route path="/editbook" component={EditBook}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
