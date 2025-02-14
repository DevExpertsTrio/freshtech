import { UPDATE_ITEM, DELETE_ITEM } from '../constants/actionTypes'

const initialState = {
    items: JSON.parse(localStorage.getItem("cart")) || [],
}

export default ( state = initialState , action ) => {
    switch (action.type ){
        case UPDATE_ITEM:
            localStorage.setItem('cart', JSON.stringify(action.cart));
            return { ...state, items: action.cart };
        case DELETE_ITEM:
            localStorage.setItem('cart', JSON.stringify(action.cart));
            return { ...state, items: action.cart };
        default:
            return state;
    }
};