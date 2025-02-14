import Cookies from "js-cookie";

import * as api from '../api';
import { AUTH } from '../constants/actionTypes'

const setCartCookie = ( cart ) => {
    let cartItems = cart.map(({ id, quantity }) => ({ id, quantity }));
    
    Cookies.set("cart", JSON.stringify(cartItems), {
        expires: 7,
        path: "/",
        secure: true,
        sameSite: "Strict",
    });
}

export const auth = (formData, navigate, isSignUp) => async (dispatch) => {
    try {
        const { data } = isSignUp ? await api.signUp(formData) : await api.signIn(formData);

        const cart = JSON.parse(localStorage.getItem("cart")) || [];

        if(cart.length > 0) {
            setCartCookie(cart);
        }

        dispatch({type: AUTH, data});
        navigate('/');
    }catch(error) {
        console.log("Error while signing In.", error);
    }
}
