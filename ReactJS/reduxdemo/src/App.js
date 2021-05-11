import logo from './logo.svg';
import './App.css';
import LoginComponent from './components/LoginComponent';
import Balance from './components/Balance';
import BankingOperations from './components/BankingOperations';
import AccountType from './components/AccountType';

function App() {
  return (
    <div className="container">
      <LoginComponent/>
      <Balance/>
      <BankingOperations/>
      <AccountType/>
    </div>
  );
}

export default App;
