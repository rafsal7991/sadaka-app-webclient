import axios from "axios";
import { useDispatch } from "react-redux";
import moment from "moment-timezone";

const BASE_URL = "http://localhost:6915"

export class GlobalMethod {
  static async connectToAnotherSystem(
    url,
    method,
    contents,
    headers,
    userDetailDto
  ) {
    var result;
    try {
      const response = await axios({
        method: method,
        url: url,
        data: contents,
        headers: headers,
        timeout: 59000,
      });
      const resultCurlPost = await response?.data;
      if (response.status == 200) {
        result = {
          error: false,
          resultCurl: resultCurlPost,
          status: response.status,
        };
      }
    } catch (error) {
      result = {
        error: true,
        message: error.response.data,
        status: error.response.status,
      };
    }
    return result;
  }


  static hasAnyPermission(permissionName, userPermissions) {
    return permissionName?.some((item) => userPermissions.indexOf(item) !== -1);
  }

  static getUserPermissionName(permissionArray) {
    let permissionNameExist = [];
    try {
      permissionArray.forEach((valuePermission) => {
        permissionNameExist.push(valuePermission.PermNm);
      });
    } catch (exception) {
      permissionNameExist = [];
    }
    return permissionNameExist;
  }

  static formatDate(date) {
    var date = moment(date).tz("Africa/Nairobi").format("YYYY-MM-DDTHH:mm:ss");
    return date;
  }
  static makeInitialsFromName(name) {
    const initials = name.match(/\b\w/g) || [];
    const result = initials.map(initial => initial.toUpperCase()).join('');
    return result;
  }

  static calculateTax(amount,tax) {
     const taxAmount=amount-((amount*100)/(parseFloat(tax)+100))
     return taxAmount;
  }

  static getPrice(billedAmount,Quantity,discount) {
    return (billedAmount+discount)/Quantity;
 }

  static twoDecimalWithoutRounding = (n) => {
    try{
    return parseFloat(n.toString().match(/^-?\d+(?:\.\d{0,2})?/)[0]);}
    catch(e){
      return 0;
    }
  };

  static formatCurrency(n){
    try{
        return n.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");}
    catch(e){
      return "0.0";
    }
  }


}
