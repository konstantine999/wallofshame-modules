import React from "react";
import styles from "./table.module.css";
import ButtonTable from "./ButtonTable";

function Table(props) {
  return (
    <table className={styles.table}>
      <tr className={styles.tr}>
        <th className={styles.th}>Name</th>
        <th className={styles.th}>Excuse</th>
        <th className={styles.th}>Count</th>
      </tr>
      {props.users.map((user) => (
        <tr className={styles.tr} key={user.id}>
          <td className={styles.td}>{user.name}</td>
          <td className={styles.td}>{user.excuse}</td>
          <td className={styles.td}>{user.count}</td>
          <ButtonTable />
        </tr>
      ))}
    </table>
  );
}

export default Table;
