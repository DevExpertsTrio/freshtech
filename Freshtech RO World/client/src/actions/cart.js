import * as api from '../api';
import { UPDATE_ITEM, DELETE_ITEM } from '../constants/actionTypes'

export const addItem = ( product ) => async (dispatch) => {
    try {
        const cart = JSON.parse(localStorage.getItem("cart")) || [];
        const existingIndex = cart.findIndex( (item) => item.id === product.id );

        if (existingIndex === -1) {
            cart.push({
                id: product.id,
                name: product.name,
                price: product.price,
                image: product.imageCover,
                color: product.color,
                discount: product.discount || 0,
                quantity: 1,
            });
        } else {
            cart[existingIndex].quantity += 1;
        }

        dispatch({type: UPDATE_ITEM, cart});
    }catch(error) {
        console.log("Error while adding item in cart.", error);
    }
}

export const updateItem = ( productIndex, newQuantity ) => async (dispatch) => {
    try {
        const cart = JSON.parse(localStorage.getItem("cart")) || [];
        cart[productIndex].quantity = newQuantity;
        
        dispatch({type: UPDATE_ITEM, cart});
    }catch(error) {
        console.log("Error while updating item quantity in cart.", error);
    }
}

export const deleteItem = ( productIndex ) => async (dispatch) => {
    try {
        const cart = JSON.parse(localStorage.getItem("cart")) || [];

        const updatedCart = cart.filter((_, i) => i !== productIndex);

        dispatch({type: DELETE_ITEM, cart: updatedCart});  
    }catch(error){
        console.log('Error while deleting item from cart : ', error);
    }
}
