import React from "react";
import styles from "./Button.module.scss";
interface props {
  children: React.ReactNode;
  clickHandler: () => void;
}
const Button = ({ children, clickHandler }: props) => {
  return (
    <button className={styles.button} onClick={clickHandler}>
      {children}
    </button>
  );
};

export default Button;
