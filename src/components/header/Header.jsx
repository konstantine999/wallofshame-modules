import React from "react";
import Input from "../inputs/Input";
import styles from "./header.module.css";
import HeaderButton from "./HeaderButton";

function Header(props) {
  return (
    <header className={styles.header}>
      <div>
        <h1 className={styles.h1}>Wall of shame</h1>
        <p className={styles.p}>5 Members</p>
      </div>
      <div className={styles.inputsWrapper}>
        <Input placeholder="Name" getValue={props.name} />
        <Input placeholder="Excuse" getValue={props.excuse} />
      </div>
      <HeaderButton addNewUser={props.addNewUser}></HeaderButton>
    </header>
  );
}

export default Header;
