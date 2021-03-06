import {ADD_TO_CART, DELETE_ALL, GET_CART_ITEMS, REMOVE_FROM_CART, SET_QUANTITY} from "../types";

export const addToCart = (val) => {
    return (dispatch) => {
        dispatch({
            type: ADD_TO_CART,
            value: val
        });
    }
};
export const removeFromCart = (val) => {
    return (dispatch) => {
        dispatch({
            type: REMOVE_FROM_CART,
            value: val
        });
    }
};
export const getCartItems = () => {
    return (dispatch) => {
        dispatch({
            type: GET_CART_ITEMS
        });
    };
};
export const setQuantity = (val) => {
    return (dispatch) => {
        dispatch({
            type: SET_QUANTITY,
            value: val
        });
    };
};
export const deleteAll = () => {
    return (dispatch) => {
        dispatch({
            type: DELETE_ALL
        });
    }
};

