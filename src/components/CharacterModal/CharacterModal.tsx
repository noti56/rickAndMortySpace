import React from "react";
import Modal from "react-modal";
import { useRef, useState, useEffect, Dispatch, SetStateAction } from "react";
import { Character } from "../../interfaces/api.interface";
import styles from "./CharacterModal.module.scss";
import Button from "../Button/Button";
import { ReactComponent as Close } from "../../assets/delete.svg";
interface props {
  active: boolean;
  setActive: Dispatch<SetStateAction<boolean>>;
  character: Character;
}
Modal.setAppElement("#root");

const CharacterModal = ({ active, setActive, character }: props) => {
  return (
    <Modal
      isOpen={active}
      // onAfterOpen={afterOpenModal}
      // onRequestClose={closeModal}
      style={{
        content: {
          background: "rgba(211, 211, 211, 0.8)",
          borderColor: "#f1c40f",
          borderRadius: 20,
        },
        // overlay: { background: "rgba(255, 255, 255, 0.2)" },
        overlay: { background: "inherit" },
      }}
      contentLabel="Example Modal"
    >
      <div className={styles.container}>
        <span className={styles.btnContainer}>
          <Button clickHandler={() => setActive(false)}>
            <Close width={30} height={30} />
          </Button>
        </span>

        <ul className={styles.list}>
          <img src={character.image} alt="" />
          <li>
            <span className={styles.properties}>Name:</span> {character.name}
          </li>
          <li>
            <span className={styles.properties}>Origin:</span> {character.origin.name}
          </li>
          <li>
            <span className={styles.properties}>Created at:</span>{" "}
            {new Date(character.created).toDateString()}
          </li>

          <li>
            <span className={styles.properties}>Gender:</span> {character.gender}
          </li>
          <li>
            <span className={styles.properties}>Species:</span> {character.species}
          </li>
          <li>
            <span className={styles.properties}>Status:</span> {character.status}
          </li>
        </ul>
      </div>
    </Modal>
  );
};

export default CharacterModal;
