import { ADD_FAV, FILTER, ORDER, REMOVE_FAV } from "./action-types";

const initialState = {
    myFavorites : [],
    allCharacters: [],
};


const rootReducer = ( state=initialState, action ) => {
    switch(action.type) {
        case ADD_FAV:
            return {
                ...state,
                myFavorites: [...state.myFavorites, action.payload],
                allCharacters: [...state.allCharacters, action.payload],
            }
            
        case REMOVE_FAV:
            return {
                ...state,
                myFavorites: state.myFavorites.filter(char => char.id !== action.payload )
            }
        case FILTER:
            const filterByGender = state.allCharacters.filter(char => char.gender === action.payload);
            return {
                ...state,
                myFavorites: filterByGender,
            }
        case ORDER:
            const ordered = state.allCharacters.sort((a, b) => {
                if(action.payload === "A") {
                    return a.id - b.id;
                } else if(action.payload === "D") {
                    return b.id - a.id;
                } 
                return 0;
            });
            return {
                ...state,
                myFavorites: ordered,
            }
            
        default:
            return {...state};
    }
}

export default rootReducer;