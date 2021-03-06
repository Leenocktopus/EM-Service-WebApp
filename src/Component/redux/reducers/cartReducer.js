import {ADD_TO_CART, DELETE_ALL, GET_CART_ITEMS, REMOVE_FROM_CART, SET_QUANTITY} from "../types";

const initialState = {
    cartItems: []
};

export default (state = initialState, action) => {
    let items = state.cartItems;
    switch (action.type) {
        case ADD_TO_CART:
            const val = action.value;
            let productInTheCart = false;
            items.forEach((item) => {

                if (val.prod_id === item.product.prod_id) {

                    productInTheCart = true;
                    item.quantity++;
                }
            });
            if (!productInTheCart) {
                items.push({
                    product: val,
                    quantity: 1
                });
            }

            return {
                ...state
            };


        case GET_CART_ITEMS:
            return {
                ...state
            };
        case DELETE_ALL:
            return {
                cartItems: []
            };
        case SET_QUANTITY:
            for (let i = items.length; i--;) {
                if (items[i].product.prod_id === action.value.prod_id) {
                    if (action.value.quantity > 0){
                        items[i].quantity = action.value.quantity;
                    } else {
                        items.splice(i, 1);
                    }
                }
            }
            return {
                cartItems: items
            };
        case REMOVE_FROM_CART:
            for (let i = items.length; i--;) {
                if (items[i].product.prod_id === action.value) items.splice(i, 1);
            }

            return {
                cartItems: items
            };
        default:
            return state;
    }
}