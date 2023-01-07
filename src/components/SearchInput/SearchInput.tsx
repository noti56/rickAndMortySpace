import React, { Dispatch, SetStateAction, useEffect } from "react";
import Input, { InputProps } from "../Input/Input";

interface props extends InputProps {
  propertiesToCheckOn: Array<string | number>;
  originalArray: Array<any>;
  setCopyArray: Dispatch<SetStateAction<Array<any>>>; // setState from outside
}
const SearchInput = ({
  inputValue,
  setInputValue,
  onFocus,
  originalArray,
  propertiesToCheckOn,
  setCopyArray,
  placeholder,
}: props) => {
  const compareLogic = (propToCheckOn: any, input: string): boolean => {
    return propToCheckOn?.toString()?.toLowerCase()?.includes(input?.toLowerCase());
  };

  useEffect(() => {
    const arr: Array<any> = [];
    originalArray.forEach((objectToCheck) => {
      let alreadyInsideArray: boolean = false;
      propertiesToCheckOn.forEach((property) => {
        if (alreadyInsideArray) return;

        if (compareLogic(objectToCheck[property], inputValue)) {
          arr.push(objectToCheck);
          alreadyInsideArray = true;
        }
      });
    });
    setCopyArray(arr);
    return () => {};
  }, [inputValue]);

  return (
    <Input
      inputValue={inputValue}
      setInputValue={setInputValue}
      onFocus={onFocus}
      placeholder={placeholder}
    />
  );
};

export default SearchInput;
