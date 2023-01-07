import { Dispatch } from "@reduxjs/toolkit";
import { addCharacters } from "../store/slices/Characters.slice";
import RickAndMortyApi from "./rickAndMortyAPI";

export const initApp = async (dispatch: Dispatch) => {
  try {
    const res = await RickAndMortyApi.getCharacters();
    if (res?.data?.results) {
      dispatch(addCharacters(res.data.results));
    }
  } catch (error) {
    return error;
  }
};
