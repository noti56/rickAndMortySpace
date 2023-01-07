import React from "react";
import Delete from "../Delete/Delete";
import styles from "./Chip.module.scss";

interface props {
  children: React.ReactNode;
  deleteFunction?: () => void;
}
const Chip = ({ children, deleteFunction }: props) => {
  return (
    <div className={styles.chipContainer}>
      <span className={styles.deleteWrapper}>
        {deleteFunction ? <Delete onClick={deleteFunction} /> : null}
      </span>
      <span className={styles.textWrapper}>{children}</span>
    </div>
  );
};

export default Chip;
