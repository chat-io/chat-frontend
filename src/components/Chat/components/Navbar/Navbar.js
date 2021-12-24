import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../../../store/actions/auth";
import NavbarComponent from "./NavbarComponent";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = () => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.authReducer.user);

  const [showProfileOptions, setShowProfileOptions] = useState(false);

  const toggleHandler = () => {
    setShowProfileOptions((prevState) => {
      return !prevState;
    });
  };

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <NavbarComponent>
      <h2>Chat.io</h2>
      <div id="profile-menu" onClick={toggleHandler}>
        <img id="profile-img" src={user.avatar} alt="Avatar" />
        <p>
          {user.firstName} {user.lastName}
        </p>
        <FontAwesomeIcon icon="caret-down" className="dropdown-btn" />

        {showProfileOptions && (
          <div id="profile-options">
            <p>Update Profile</p>
            <p onClick={logoutHandler}>Logout</p>
          </div>
        )}
      </div>
    </NavbarComponent>
  );
};

export default Navbar;
