import React from "react";
import { useSelector } from "react-redux";

function AccountType() {
  const current = useSelector((state) => state.banking.isCurrent);
  console.log(current)
  const store = useSelector((state) => state);
  console.log(store);
  return (
    <div>
      <h1 className="alert alert-primary mt-4">
        {current ? "Current Account" : "Savings Account"}
      </h1>
    </div>
  );
}

export default AccountType;
