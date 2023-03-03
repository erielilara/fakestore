import { GET_PRODUCTS, ADD_FAVORITE, REMOVE_FAVORITE } from "../actions";

const inicialState: any = {
  products: [],
  favorites: [],
};

const reducer = (state = inicialState, action: any) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    case ADD_FAVORITE:
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    case REMOVE_FAVORITE:
      // si ya existe el id en el array eliminar de favoritos
      if (state.favorites.some((obj: any) => obj === action.payload.id)) {
        console.log("entro al if", state.favorites);
        return {
          ...state,
          favorites: state.favorites.filter(
            (obj: any) => obj.id !== action.payload.id
          ),
        };
      } else {
        return {
          ...state,
          favorites: [...state.favorites, action.payload],
        };
      }
    default:
      return state;
  }
};

export default reducer;
