import {
  GET_PRODUCTS,
  ADD_PRODUCT_TO_WISHLIST,
  REMOVE_PRODUCT_FROM_WISHLIST,
} from "../actions";

const inicialState: any = {
  products: [],
  wishList: [],
};

const reducer = (state = inicialState, action: any) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    case ADD_PRODUCT_TO_WISHLIST:
      return {
        ...state,
        wishList: [...state.wishList, action.payload],
      };
    case REMOVE_PRODUCT_FROM_WISHLIST:
      // si ya existe el id en el array eliminar de favoritos
      return {
        ...state,
        wishList: state.wishList.filter(
          (product: any) => product.id !== action.payload
        ),
      };
    default:
      return state;
  }
};

export default reducer;
