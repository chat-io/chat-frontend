import React from "react";

import styles from "./Modal.module.css";

const Modal = (props) => {
  return (
    <div className={`${styles["modal-mask"]} ${styles["modal-close"]}`}>
      <div className={styles["modal-wrapper"]}>
        <div className={styles["modal-container"]}>
          <div className={styles["modal-header"]}>{props.header}</div>

          <div className={styles["modal-body"]}>{props.body}</div>

          <div className={styles["modal-footer"]}>{props.footer}</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
