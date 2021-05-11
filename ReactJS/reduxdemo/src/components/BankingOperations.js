import React,{useState} from "react";

function BankingOperations() {
  const [amount, setAmount] = useState();

  return (
    <div>
      <form className="form-group ">
        <input
          type="text"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="form-control mb-4"
        />
        <button className="btn btn-secondary">Deposit</button>
        <button className="btn btn-secondary">Withdraw</button>
        <button className="btn btn-secondary">Interest</button>
        <button className="btn btn-danger">Delete Account</button>
        <button className="btn btn-secondary">Change Account Type</button>
      </form>
    </div>
  );
}

export default BankingOperations;
