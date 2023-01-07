import { Character } from "../interfaces/api.interface";
import { CharacterState } from "../store/slices/Characters.slice";

const dictionaryToArray = (dictionary: CharacterState | any): Character[] | any[] => {
  if (typeof dictionary != "object") {
    console.error("didnt got an object");
    return [];
  }
  return Object.keys(dictionary).map((properties) => dictionary[properties]);
};

export default dictionaryToArray;
