import React from "react";
import styles from "./CharacterName.module.scss";

interface props {
  children: string;
  cubeSize: number;
}
const CharacterName = ({ children, cubeSize }: props) => {
  return (
    // <p className={styles.name} style={{ left: "-" + children?.toLocaleString().length + "px" }}>
    <div className={styles.nameContainer}>
      <p className={styles.name} style={{}}>
        {children}
      </p>
    </div>
  );
};

export default CharacterName;
