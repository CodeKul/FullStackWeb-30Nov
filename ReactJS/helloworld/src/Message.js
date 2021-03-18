import { render } from "@testing-library/react";
import React from "react";
import Active from "./Active";
import InActive from "./InActive";
function Message({ status }) {
  let msg;
  if (status) {
    msg = <Active />;
  } else {
    msg = <InActive />;

    return (
      <div>
        <h1>Message Component</h1>
        <p>lorem ipsum</p>
        {msg}

        {status ? (
          <Active />
        ) : (
          <div>
            <h4>Inactive</h4>
            <p>Please Activate</p>
          </div>
        )}
      </div>
    );
  }
}
export default Message;
