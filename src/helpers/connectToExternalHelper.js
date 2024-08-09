import { APIClient } from "./api_helper";

import * as url from "./shule_url_helpers";

const api = new APIClient();

// Gets the logged in user data from local session
export const getLoggedUser = () => {
    const user = api.get(url.CURRENT_LOGGEDIN_USER);
    if (user) return user;
    return null;
  };
  
  // is user is logged in
  export const isUserAuthenticated = () => {
    return getLoggedUser() !== null;
  };
  
  // Register Method
  export const postCreateUser = (data) => api.create(url.POST_USERS, data);
  export const postLogin = (data) => api.create(url.POST_LOGIN, data);
  export const postLogout = (data) => api.create(url.POST_LOGOUT, data);
  export const postGroup = (data) => api.create(url.POST_GROUPS, data);
  export const getUserList = () => api.get(url.POST_USERS, null);
  export const getUserInfo = (pk) => api.get(url.POST_USERS + `${pk}/`, null);
   export const updateUser = (pk, data) => api.update(url.POST_USERS + `${pk}/`, data);
  export const deleteUser = (pk) => api.delete(url.POST_USERS + `${pk}/`);
  

  //GROUPS AND PERMISSIONS 
  // export const postCreateGroup = (data) =>  api.create(url.POST_GROUPS, data);
  // export const getGroupsList = () => api.get(url.POST_GROUPS, null);
  // export const getGroupInfo = (pk) =>  api.get(url.POST_GROUPS + `${pk}/`);
  // export const updateGroup = (pk,data) =>  api.update(url.POST_GROUPS + `${pk}/`, data);
  // export const deleteGroup = (pk) =>  api.delete(url.POST_GROUPS + `${pk}/`);
  // export const postCreatePermission = (data) =>  api.create(url.POST_PERMISSIONS, data);
  // export const getPermissionsList = () => api.get(url.POST_PERMISSIONS, null);
  // export const getPermissionInfo = (pk) =>  api.get(url.POST_PERMISSIONS + `${pk}/`);
  // export const updatePermission = (pk,data) =>  api.update(url.POST_PERMISSIONS + `${pk}/`, data);
  // export const deletePermission = (pk) =>  api.delete(url.POST_PERMISSIONS + `${pk}/`);
