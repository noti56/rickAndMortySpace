import axios from "axios";
import { ApiResponse, Character, CharacterFilter, Info } from "../interfaces/api.interface";

module RickAndMortyApi {
  const baseUrl = "https://rickandmortyapi.com/api";

  export const getCharacters = (): Promise<ApiResponse<Info<Character[]>>> => {
    return axios.get(baseUrl + "/character");
  };
}

export default RickAndMortyApi;
