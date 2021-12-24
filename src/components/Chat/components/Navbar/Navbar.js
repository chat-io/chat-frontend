import React from "react";
import { useSelector } from "react-redux";

import NavbarComponent from "./NavbarComponent";

const Navbar = () => {
  const user = useSelector((state) => state.authReducer.user);

  console.log(user.avatar);
  return (
    <NavbarComponent>
      <h2>Chat.io</h2>
      <div id="profile-menu">
        <img id="profile-img" src={user.avatar} alt="Avatar" />
        <p>
          {user.firstName} {user.lastName}
        </p>
      </div>
    </NavbarComponent>
  );
};

export default Navbar;
