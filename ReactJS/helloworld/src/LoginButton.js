import React from "react";

function LoginButton({loginmsg}) {
  return (
    <div>
      <button onClick={loginmsg}>Login</button>
    </div>
  );
}

export default LoginButton;
