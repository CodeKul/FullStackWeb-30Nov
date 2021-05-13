import React from "react";
import { useDispatch, useSelector } from "react-redux";

function LoginComponent() {
  const dispatch = useDispatch();
  const loginStatus = useSelector((state) => state.authentication);

  return (
    <div>
      <button
        className="btn btn-primary"
        onClick={() => dispatch({ type: "login" })}
      >
        {loginStatus.isLoggedIn ? "Logout" : "Login"}
      </button>
    </div>
  );
}

export default LoginComponent;
