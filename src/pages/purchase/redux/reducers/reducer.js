import { ADD_TO_PURCHASE_CART, REMOVE_FROM__PURCHASE_CART,ADD_PURCHASE_ITEM_FROM_TEXTFIELD,CLEAR_PURCHASE_CART,UPDATE_PURCHASE_CART } from '../constants/constants';
const initialState = {
  cartItems: [],
};
const cartPurchaseReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_PURCHASE_CART:
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };
    case REMOVE_FROM__PURCHASE_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(item => item.PurcItmCode !== action.payload),
      };
    case ADD_PURCHASE_ITEM_FROM_TEXTFIELD:
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };
    case UPDATE_PURCHASE_CART:
        return {
          ...state,
          cartItems: state.cartItems.map(item =>
            item.PurcItmCode === action.payload.PurcItmCode ? action.payload : item
          ),
        };
    case CLEAR_PURCHASE_CART:
        return {
          ...state,
          cartItems: [],};
    default:
      return state;
  }
};
export default cartPurchaseReducer;