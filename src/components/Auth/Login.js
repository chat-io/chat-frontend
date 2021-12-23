import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Auth.module.css";

import loginImage from "../../assets/images/login.svg";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(email, password);
  };

  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setPassword(event.target.value);
  };

  // const loginHandler = () => {};

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
