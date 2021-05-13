import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deposit } from "../actions/bankActions";

function BankingOperations() {
  const [amount, setAmount] = useState();
  const dispatch = useDispatch();

  return (
    <div>
      <form className="form-group ">
        <input
          type="text"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          className="form-control mb-4"
        />
        <button
          className="btn btn-secondary"
          type="button"
          onClick={() => dispatch(deposit(amount))}
        >
          Deposit
        </button>
        <button
          className="btn btn-secondary"
          type="button"
          onClick={() => dispatch({ type: "withdraw", payload: amount })}
        >
          Withdraw
        </button>
        <button
          className="btn btn-secondary"
          type="button"
          onClick={() => dispatch({ type: "interest" })}
        >
          Interest
        </button>
        <button
          className="btn btn-danger"
          type="button"
          onClick={() => dispatch({ type: "delete-account" })}
        >
          Delete Account
        </button>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => dispatch({ type: "change-acctType" })}
        >
          Change Account Type
        </button>
      </form>
    </div>
  );
}

export default BankingOperations;
