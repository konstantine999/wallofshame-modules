import React from "react";
import styles from "./header.module.css";

function HeaderButton(props) {
  return (
    <button className={styles.button} onClick={props.addNewUser}>
      Create
    </button>
  );
}

export default HeaderButton;
