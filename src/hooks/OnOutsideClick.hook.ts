import { useEffect, useState, SetStateAction, Dispatch } from "react";

const useOnOutsideClick = (
  listElementRef: HTMLElement,
  toShowList: boolean,
  setToShowList: Dispatch<SetStateAction<boolean>>
): boolean => {
  const onClick = (e: MouseEvent | any) => {
    console.log("cliocked");

    e.stopPropagation();
    if (!listElementRef || !listElementRef || !e.target) {
      console.error("wrong params sent to useOnOutsideClick");
      return;
    }

    if (!toShowList) {
      clearListener();
      return;
    }
    if (!listElementRef.contains(e.target)) {
      setToShowList(false);
      clearListener();
      return;
    }
  };

  const clearListener = () => {
    window.removeEventListener("click", onClick);
  };

  // useEffect(() => {
  //   // use effect to handle a listener to close the list
  //   clearListener();
  //   if (!toShowList) return;
  //   window.addEventListener("click", onClick);
  //   return () => {
  //     clearListener();
  //   };
  // }, [toShowList]);

  useEffect(() => {
    // use effect to handle a listener to close the list
    clearListener();

    if (!toShowList) return;
    window.addEventListener("click", onClick);
    return () => {
      clearListener();
    };
  }, [toShowList]);

  return toShowList;
};

export default useOnOutsideClick;
