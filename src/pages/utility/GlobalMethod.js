import moment from "moment-timezone";

export class GlobalMethod {
  static hasAnyPermission(permissionName, userPermissions) {
    return permissionName.some((item) => userPermissions.indexOf(item) !== -1);
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

  static calculateTax(amount, tax) {
    const taxAmount = amount - ((amount * 100) / (parseFloat(tax) + 100));
    return taxAmount;
  }

  static twoDecimalWithoutRounding = (n) => {
    try {
      return parseFloat(n.toString().match(/^-?\d+(?:\.\d{0,2})?/)[0]);
    } catch (e) {
      return 0;
    }
  };

  static formatCurrency(n) {
    try {
      return n.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
    } catch (e) {
      return "0.0";
    }
  }
}
