import React from "react";
import styles from "./Input.module.scss";
export interface InputProps {
  inputValue: string;
  setInputValue: (inputValue: string) => void;
  onFocus?: () => void;
  placeholder?: string;
}
const Input = ({ inputValue, setInputValue, onFocus, placeholder }: InputProps) => {
  return (
    <input
    className={styles.input} 
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      onFocus={() => {
        if (onFocus) {
          onFocus();
        }
      }}
      placeholder={placeholder ? placeholder : ""}
    />
  );
};

export default Input;
