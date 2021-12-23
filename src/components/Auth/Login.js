import React from "react";
import { Link } from "react-router-dom";
import styles from "./Auth.module.css";

import loginImage from "../../assets/images/login.svg";

const Login = () => {
  return (
    <div className={styles["auth-container"]}>
      <div className={styles["auth-card"]}>
        <div>
          <div className={styles["image-section"]}>
            <img src={loginImage} alt="Login" />
          </div>

          <div className={styles["form-section"]}>
            <h2>Welcome back</h2>
            <form>
              <div className={`${styles["input-field"]} ${styles["mb-1"]}`}>
                <input placeholder="Email" />
              </div>
              <div className={`${styles["input-field"]} ${styles["mb-2"]}`}>
                <input placeholder="Password" />
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
