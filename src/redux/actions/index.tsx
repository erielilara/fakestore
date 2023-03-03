import axios from "axios";

export const GET_PRODUCTS = "GET_PRODUCTS";
export const GET_PRODUCT_DETAILS = "GET_PRODUCT_DETAILS";
export const ADD_FAVORITE = "ADD_FAVORITE";
export const REMOVE_FAVORITE = "REMOVE_FAVORITE";

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
