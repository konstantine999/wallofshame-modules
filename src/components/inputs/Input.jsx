import React from "react";
import styles from "./input.module.css";

function Input(props) {
  return (
    <div className={styles.inputWrapper}>
      <input
        className={styles.input}
        placeholder={props.placeholder}
        onChange={props.getValue}
      />
    </div>
  );
}

export default Input;
