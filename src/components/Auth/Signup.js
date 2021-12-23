import React from "react";

import styles from "./Auth.module.css";

import signupImage from "../../assets/images/signup.svg";

const Signup = () => {
  return (
    <div className={styles["auth-container"]}>
      <div className={styles["auth-card"]}>
        <div>
          <div className={styles["image-section"]}>
            <img src={signupImage} alt="Signup" />
          </div>

          <div className={styles["form-section"]}>
            <h2>Create an account</h2>
            <form>
              <div className={`${styles["input-field"]} ${styles["mb-1"]}`}>
                <input placeholder="First name" />
              </div>
              <div className={`${styles["input-field"]} ${styles["mb-1"]}`}>
                <input placeholder="Last name" />
              </div>

              <div className={`${styles["input-field"]} ${styles["mb-1"]}`}>
                <input placeholder="Email" />
              </div>

              <div className={`${styles["input-field"]} ${styles["mb-1"]}`}>
                <select>
                  <option value="male">Male</option>
                  <option value="femail">Female</option>
                </select>
              </div>

              <div className={`${styles["input-field"]} ${styles["mb-2"]}`}>
                <input placeholder="Password" />
              </div>

              <button>REGISTER</button>
            </form>

            <p>Already have an account? Login.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
