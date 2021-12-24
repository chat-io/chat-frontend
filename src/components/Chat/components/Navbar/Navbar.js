import React from "react";
import { useSelector } from "react-redux";

import NavbarComponent from "./NavbarComponent";

const Navbar = () => {
  const user = useSelector((state) => state.authReducer.user);

  return (
    <NavbarComponent>
      <h2>Chat.io</h2>
      <div id="profile-menu">
        <img src="" alt="Avatar" />
        <p>
          {user.firstName} {user.lastName}
        </p>
      </div>
    </NavbarComponent>
  );
};

export default Navbar;
