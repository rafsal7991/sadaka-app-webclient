import { GlobalMethod } from "../../../helpers/apiHelper";
import { constants } from "../../../helpers/apiConstants";
import { GET_USER_DETAILS, POST_LOGIN } from "../../../helpers/urlHelpers";
import { Buffer } from 'buffer';

export default class UserController {
  static async userLogin(username, password) {
    const requestData = {
      grant_type: "password",
      username: username,
      password: Buffer?.from(password).toString("base64"),
    };
    console.log(requestData);
    const encodedString = Buffer?.from(`advatech-portal:mauzo@Service`).toString(
      "base64"
    );
    var formBody = [];
    for (var property in requestData) {
      var encodedKey = encodeURIComponent(property);
      var encodedValue = encodeURIComponent(requestData[property]);
      formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");
    const hearders = {
      "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      Authorization: "Basic " + encodedString,
      Accept: "application/json",
    };
    const result = await GlobalMethod.connectToAnotherSystem(
      POST_LOGIN,
      "POST",
      formBody,
      hearders,
      undefined
    );
    return result;
  }

  static async getUserDetail(username, token) {
    try {
      const hearders = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token.access_token}`,
        Accept: "application/json",
      };
      const result = await GlobalMethod.connectToAnotherSystem(
        `${GET_USER_DETAILS}?username=${username}`,
        "POST",
        {},
        hearders,
        undefined
      );
      return result;
    } catch (error) {
      return {
        success: false,
        token: null,
        message: error.response.data || "something went wrong",
        status: error.response.status,
      };
    }
  }

  static async getRoleFromServer(userDetail, token) {
    const url = "/api/role-management/role";
    const hearders = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
      Accept: "application/json",
    };
    
    const result = await GlobalMethod.connectToAnotherSystem(
      `${url}`,
      "POST",
      {},
      hearders,
      userDetail
    );
    return result;
  }
}
