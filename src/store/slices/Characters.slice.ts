import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Character } from "../../interfaces/api.interface";

export interface CharacterState {
  all: { [id: number]: Character };
  filtered: { [id: number]: Character };
}

const initialState: CharacterState = { all: {}, filtered: [] };

export const charactersSlice = createSlice({
  name: "characters",

  initialState,
  reducers: {
    addCharacters: (state, action: PayloadAction<Character[]>) => {
      const stateCopy = { ...state.all };
      action.payload.forEach((character) => {
        if (!stateCopy[character.id]) {
          stateCopy[character.id] = character;
        }
      });
      return { ...state, all: stateCopy };
    },

    setFiltered: (state, action: PayloadAction<number[] | string[]>) => {
      const newFiltered: { [id: number]: Character } = {};

      action.payload.forEach((filters) => {
        const num_id = Number(filters);
        newFiltered[num_id] = state.all[num_id];
      });
      return { ...state, filtered: newFiltered };
    },
  },
});

export const { addCharacters, setFiltered } = charactersSlice.actions;
export default charactersSlice.reducer;

// Other code such as selectors can use the imported `RootState` type
