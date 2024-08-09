import { GlobalMethod } from "../../../helpers/apiHelper";
export class PurchaseController{
    static async getPurchaseBySubSp(userDetail,token) {
        var url= `/api/purchase/taxpayer/${userDetail.SpRefNum}/branch/${userDetail.SubSpRefNum}`;
        const hearders = {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
          'Accept': "application/json"
        }
        const result = await GlobalMethod.connectToAnotherSystem(`${url}`, "POST", {}, hearders, userDetail);
        return result;
    }
}