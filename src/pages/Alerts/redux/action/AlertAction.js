import { ADD_ALERT, REMOVE_ALERT } from "../constants/AlertConstants";

let nextAlertId = 0;

export const addAlert = (title, type, message, duration = 3000) => dispatch => {
  const id = nextAlertId++;
  dispatch({
    type: ADD_ALERT,
    payload: {
      id,
      title,
      type,
      message,
    }
  });

  setTimeout(() => {
    dispatch(removeAlert(id));
  }, duration);
};

export const removeAlert = (id) => ({
  type: REMOVE_ALERT,
  payload: {
    id
  }
});
