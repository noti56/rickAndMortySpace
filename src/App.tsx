import React, { useEffect } from "react";
import CharacterScene from "./3d/scenes/CharacterScene";
import CharacterForm from "./components/CharacterForm/CharacterForm";
import styles from "./App.module.scss";
import { useAppDispatch } from "./store/hook";
import { initApp } from "./services/initApp";
const App = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    (async () => {
      await initApp(dispatch);
    })();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <CharacterForm />
      </div>
      <div className={styles.sceneContainer}>
        <CharacterScene />
      </div>
    </div>
  );
};

export default App;
