import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../store/actions/auth";

import authService from "../../services/authService";

import loginImage from "../../assets/images/login.svg";
import styles from "./Auth.module.css";

const Login = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("ryan@gmail.com");
  const [password, setPassword] = useState("secret");

  const submitHandler = async (event) => {
    event.preventDefault();

    dispatch(login({ email, password }, history));

    // const response = await authService.login(email, password);
    // console.log(response);
  };

  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div className={styles["auth-container"]}>
      <div className={styles["auth-card"]}>
        <div>
          <div className={styles["image-section"]}>
            <img src={loginImage} alt="Login" />
          </div>

          <div className={styles["form-section"]}>
            <h2>Welcome back</h2>
            <form onSubmit={submitHandler}>
              <div className={`${styles["input-field"]} ${styles["mb-1"]}`}>
                <input
                  onChange={emailChangeHandler}
                  value={email}
                  required={true}
                  type="text"
                  placeholder="Email"
                />
              </div>
              <div className={`${styles["input-field"]} ${styles["mb-2"]}`}>
                <input
                  onChange={passwordChangeHandler}
                  value={password}
                  required={true}
                  type="password"
                  placeholder="Password"
                />
              </div>
              <button>LOGIN</button>
            </form>

            <p>
              Don't have an account? <Link to="/signup">Sign up.</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
