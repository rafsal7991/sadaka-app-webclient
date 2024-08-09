import { ADD_TO_PURCHASE_CART, REMOVE_FROM__PURCHASE_CART,ADD_PURCHASE_ITEM_FROM_TEXTFIELD,CLEAR_PURCHASE_CART,UPDATE_PURCHASE_CART } from '../constants/constants';

export const addToCart = (item) => ({
  type: ADD_TO_PURCHASE_CART,
  payload: item,
});

export const removeFromCart = (itemCode) => ({
  type: REMOVE_FROM__PURCHASE_CART,
  payload: itemCode,
});

export const addItemFromTextField = (item) => ({
  type: ADD_PURCHASE_ITEM_FROM_TEXTFIELD,
  payload: item,
});

export const clearCart = () => ({
  type: CLEAR_PURCHASE_CART,
});

export const updateCartItem = item => ({
  type: UPDATE_PURCHASE_CART,
  payload: item,
});