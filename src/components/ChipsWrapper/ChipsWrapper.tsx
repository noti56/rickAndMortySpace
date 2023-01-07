import React from "react";
import Chip from "../Chip/Chip";
import styles from "./ChipsWrapper.module.scss";

interface props {
  children: React.ReactNode;
}

const ChipsWrapper = ({ children }: props) => {
  return <div className={styles.chipsWrapperContainer}>{children}</div>;
};

export default ChipsWrapper;
