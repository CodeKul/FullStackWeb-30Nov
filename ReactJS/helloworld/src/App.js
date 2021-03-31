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
function App() {
  let a = 10;
  let b = 20;
  let total = a + b;
  let numbers = [100, 40, "Hello"];
  let person = { firstName: "JOhn", city: "Pune" };
  let employee = { salary: 40000, empid: 100 };
  let isActive = false;
  let isLoggedIn = true;
  return (
    <div>
      {/* <h1>React Application</h1>
      <p>The total is: {total}</p> */}
      {/* <DisplayComponent />
      <NewComponent />
      <Employee person={person} employee={employee} numbers={numbers} />
      <TableComponent />
      <Clock message="Hello Its" /> */}
      {/* <FunComponent employee={employee} lastName="XYZ" />
      
      */}

      {/* <Message status={isActive} /> */}
      {/* <LoginStatus /> */}
      {/* <Counter /> */}

      {/* <UseEffectComponent /> */}

      {/* <CovidCount /> */}

      {/* <RefComponent/> */}
      <StopWatchRef />
    </div>
  );
}
//JSX

export default App;
