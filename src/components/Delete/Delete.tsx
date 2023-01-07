import React from "react";
import styles from "./Delete.module.scss";
import { ReactComponent as DeleteSvg } from "../../assets/delete.svg";
interface props {
  onClick: () => void;
}
const Delete = ({ onClick }: props) => {
  return <DeleteSvg width={30} height={30} onClick={onClick}  className={styles.svg}/>;
};

export default Delete;
