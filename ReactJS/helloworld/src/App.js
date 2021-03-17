import logo from "./logo.svg";
import "./App.css";
import NewComponent from "./NewComponent";
import DisplayComponent from "./DisplayComponent";
import Employee from "./Employee";
import TableComponent from "./TableComponent";
import Clock from "./Clock";
import FunComponent from "./FunComponent";
function App() {
  let a = 10;
  let b = 20;
  let total = a + b;
  let numbers = [100, 40, "Hello"];
  let person = { firstName: "JOhn", city: "Pune" };
  let employee = { salary: 40000, empid: 100 };
  return (
    <div>
      <h1>React Application</h1>
      <p>The total is: {total}</p>
      <DisplayComponent />
      <NewComponent />
      <Employee person={person} employee={employee} numbers={numbers} />
      <TableComponent />
      <Clock message="Hello Its" />
      <FunComponent employee={employee} lastName="XYZ" />
    </div>
  );
}
//JSX

export default App;
