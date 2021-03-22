import React from "react";

function LogoutButton({ logoutmsg }) {
  return (
    <div>
      <button onClick={logoutmsg}>Logout</button>
    </div>
  );
}

export default LogoutButton;
