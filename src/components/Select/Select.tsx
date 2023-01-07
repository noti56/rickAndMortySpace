import React, { Dispatch, SetStateAction, useState, useEffect, useRef, useCallback } from "react";
import useOnOutsideClick from "../../hooks/OnOutsideClick.hook";
import Chip from "../Chip/Chip";
import ChipsWrapper from "../ChipsWrapper/ChipsWrapper";
import Input from "../Input/Input";
import SearchInput from "../SearchInput/SearchInput";
import styles from "./Select.module.scss";
export interface IOption {
  label: React.ReactNode;
  value: string;
}

interface props {
  options: IOption[];
  setSelected: Dispatch<SetStateAction<string[]>>;
  selected: Array<string>;
  removeFromSelected: (selected_id: string) => void;
  placeholder?: string;
}

const Select = ({ options, selected, setSelected, removeFromSelected, placeholder }: props) => {
  const [optionsCopy, setOptionsCopy] = useState<IOption[]>([]);
  const [toShowList, setToShowList] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>("");
  const selectContainerRef: any = useRef();

  useOnOutsideClick(selectContainerRef.current, toShowList, setToShowList);

  useEffect(() => {
    setOptionsCopy(options);
  }, [JSON.stringify(options)]);

  const selectClicked = (id: string) => {
    setSelected((selectedState) => [...selectedState, id]);

    setOptionsCopy((optionsState) => optionsState.filter((opt) => opt.value != id));
  };
  const retrieveFromDeletedSelected = (selectedValue: string) => {
    console.log(selectedValue);
    const foundOpt = options.find((opt) => opt.value == selectedValue);
    const alreadyOnList = optionsCopy.find((opt) => opt.value == selectedValue);
    console.log(options[Number(selectedValue)]);
    if (foundOpt && !alreadyOnList) {
      setOptionsCopy((optCopyState) => [...optCopyState, foundOpt]);
    }
  };

  return (
    <div ref={selectContainerRef} className={styles.container}>
      <div className={styles.inputContainer}>
        <SearchInput
          inputValue={inputValue}
          setInputValue={setInputValue}
          onFocus={() => setToShowList(true)}
          originalArray={options}
          setCopyArray={setOptionsCopy}
          propertiesToCheckOn={["label", "value"]}
          placeholder={placeholder}
        />

      {toShowList ? (
        <ul className={styles.list}>
          {optionsCopy.map((option) => (
            <li
              className={styles.item}
              key={option.value + "_list"}
              onClick={(e) => {
                e.stopPropagation();
                selectClicked(option.value);
              }}
            >
              <span>{option.label}</span>
            </li>
          ))}
        </ul>
      ) : null}
      </div>

      <div className={styles.chipsContainer}>
        <ChipsWrapper>
          {selected.map((selectedValue) => (
            <Chip
              deleteFunction={() => {
                removeFromSelected(selectedValue);
                retrieveFromDeletedSelected(selectedValue);
              }}
              key={selectedValue + "_ChipsWrapper"}
            >
              {options.find((opt) => opt.value == selectedValue)?.label}
            </Chip>
          ))}
        </ChipsWrapper>
      </div>
    </div>
  );
};

export default Select;
