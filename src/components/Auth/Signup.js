import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

import { signup } from "../../store/actions/auth";

import styles from "./Auth.module.css";
import signupImage from "../../assets/images/signup.svg";

const Signup = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("male");
  const [password, setPassword] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    dispatch(signup({ firstName, lastName, email, gender, password }, history));
  };

  const firstNameChangeHandler = (event) => {
    setFirstName(event.target.value);
  };

  const lastNameChangeHandler = (event) => {
    setLastName(event.target.value);
  };

  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
  };

  const genderChangeHandler = (event) => {
    setGender(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div className={styles["auth-container"]}>
      <div className={styles["auth-card"]}>
        <div>
          <div className={styles["image-section"]}>
            <img src={signupImage} alt="Signup" />
          </div>

          <div className={styles["form-section"]}>
            <h2>Create an account</h2> 
            <form onSubmit={submitHandler}>
              <div className={`${styles["input-field"]} ${styles["mb-1"]}`}>
                <input
                  onChange={firstNameChangeHandler}
                  value={firstName}
                  required={true}
                  type="text"
                  placeholder="First name"
                />
              </div>
              <div className={`${styles["input-field"]} ${styles["mb-1"]}`}>
                <input
                  onChange={lastNameChangeHandler}
                  value={lastName}
                  required={true}
                  type="text"
                  placeholder="Last name"
                />
              </div>

              <div className={`${styles["input-field"]} ${styles["mb-1"]}`}>
                <input
                  onChange={emailChangeHandler}
                  value={email}
                  required={true}
                  type="email"
                  placeholder="Email"
                />
              </div>

              <div className={`${styles["input-field"]} ${styles["mb-1"]}`}>
                <select
                  onChange={genderChangeHandler}
                  value={gender}
                  required={true}
                >
                  <option value="male">Male</option>
                  <option value="femail">Female</option>
                </select>
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

              <button>REGISTER</button>
            </form>
            <p>
              Already have an account? <Link to="/login">Login.</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
