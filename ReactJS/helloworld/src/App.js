import logo from "./logo.svg";
import "./App.css";
import NewComponent from "./NewComponent";
import DisplayComponent from "./DisplayComponent";
const App = () => {
  let a = 10;
  let b = 20;
  let total = a + b;
  return (
    <div>
      <h1>React Application</h1>
      <p>The total is: {total}</p>
      <DisplayComponent />
      <NewComponent />
    </div>
  );
};
//JSX

export default App;
