import axios from "axios";

export const GET_PRODUCTS = "GET_PRODUCTS";
export const GET_PRODUCT_DETAILS = "GET_PRODUCT_DETAILS";
export const ADD_PRODUCT_TO_WISHLIST = "ADD_PRODUCT_TO_WISHLIST";
export const REMOVE_PRODUCT_FROM_WISHLIST = "REMOVE_PRODUCT_FROM_WISHLIST";

export const getProducts = () => {
  return async (dispatch: (arg: {}) => void) => {
    const response = await axios.get(
      "https://fakestoreapi.com/products?limit=200"
    );
    dispatch({ type: GET_PRODUCTS, payload: response.data });
  };
};

export const getProductDetails = (id: number) => {
  return async (dispatch: (arg: {}) => void) => {
    const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
    dispatch({ type: GET_PRODUCT_DETAILS, payload: response.data });
  };
};

export const addProductToWishlist = (product: any) => {
  return {
    type: ADD_PRODUCT_TO_WISHLIST,
    payload: product,
  };
};

export const removeProductFromWishlist = (productId: string) => {
  return {
    type: REMOVE_PRODUCT_FROM_WISHLIST,
    payload: productId,
  };
};
