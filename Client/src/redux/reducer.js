// import { ADD_FAV, REMOVE_FAV, ORDER, FILTER } from "../redux/type";
// import axios from "axios";
const initialState = {
  myFavorites: [],
  allCharacters: [],
};

export default function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case "ADD_FAV":
      return {
        ...state,
        myFavorites: payload,
        allCharacters: payload,
      };
    case "REMOVE_FAV":
      return { ...state, myFavorites: payload };

    case "FILTER":
      const filterByGender = state.allCharacters.filter(
        (char) => char.gender === payload
      );
      return {
        ...state,
        myFavorites: filterByGender,
      };
    // case "FILTER":
    //   if (payload === "Default") {
    //     return { ...state, myFavorites: state.allCharacters };
    //   } else if (payload === "All") {
    //     return { ...state, myFavorites: state.allCharacters };
    //   } else {
    //     const byGender = state.allCharacters.filter(
    //       (character) => character.gender === payload
    //     );
    //     return { ...state, myFavorites: byGender };
    //   }
    case "ORDER":
      return {
        ...state,
        myFavorites: state.allCharacters.sort((a, b) =>
          payload === "A" ? a.id - b.id : b.id - a.id
        ),
      };
    //   case "ORDER":
    //     let orderedChars = [];
    //     if (!payload) {
    //       return { ...state, myFavorites: state.allCharacters };
    //     } else if (payload === "A") {
    //       orderedChars = state.allCharacters.sort((a, b) => {
    //         if (a.name < b.name) {
    //           return -1;
    //         }
    //         if (a.name > b.name) {
    //           return 1;
    //         }
    //         return 0;
    //       });
    //     } else if (payload === "D") {
    //       orderedChars = state.allCharacters.sort((b, a) => {
    //         if (a.name < b.name) {
    //           return -1;
    //         }
    //         if (a.name > b.name) {
    //           return 1;
    //         }
    //         return 0;
    //       });
    //     }
    //     return { ...state, myFavorites: orderedChars };
    // }
    default:
      return state;
  }
}
