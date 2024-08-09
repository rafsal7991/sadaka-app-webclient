import { ADD_ALERT, REMOVE_ALERT } from "../constants/AlertConstants";

const initialState = [];

const alertReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ALERT:
      return [
        ...state,
        {
          id: action.payload.id,
          title: action.payload.title,
          type: action.payload.type,
          message: action.payload.message,
        }
      ];
    case REMOVE_ALERT:
      return state.filter(alert => alert.id !== action.payload.id);
    default:
      return state;
  }
};

export default alertReducer;
