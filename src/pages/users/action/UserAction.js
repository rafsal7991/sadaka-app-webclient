import { LOGIN_SUCCESS, LOGOUT, SET_USER_INFO } from '../constant/UserConstant';

export const loginSuccess = (accessToken) => ({
  type: LOGIN_SUCCESS,
  payload: accessToken,
});

export const setUserInfo = (userInfo) => ({
  type: SET_USER_INFO,
  payload: userInfo,
});

export const logout = () => ({
  type: LOGOUT,
});