import React, { useState, useEffect, useCallback } from "react";

import { Character } from "../../interfaces/api.interface";
import { useAppDispatch, useAppSelector } from "../../store/hook";
import {
  addToFiltered,
  removeFromFiltered,
  setFiltered,
} from "../../store/slices/Characters.slice";
import dictionaryToArray from "../../utills/dictionaryToArray";
import Select from "../Select/Select";
import styles from "./CharacterForm.module.scss";
const CharacterForm = () => {
  const [selected, setSelected] = useState<Array<string>>([]);
  const characters: Character[] = dictionaryToArray(
    useAppSelector((state) => state.characters).all
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setFiltered(selected));
  }, [JSON.stringify(selected)]);

  const removeFromSelected = useCallback((selectedValue: string) => {
    // dispatch(removeFromFiltered([selectedValue]));
    setSelected((selectState) => selectState.filter((select) => select != selectedValue));
  }, []);

  return (
    <div className={styles.formContainer}>
      <Select
        removeFromSelected={removeFromSelected}
        selected={selected}
        setSelected={setSelected}
        options={characters.map((ch) => ({ label: ch.name, value: String(ch.id) }))}
        placeholder={"Filter The Characters"}
      />
    </div>
  );
};

export default CharacterForm;
