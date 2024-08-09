import { GlobalMethod } from "../../../helpers/apiHelper";
export class SaleController{

    static async getSaleList(userDetail,token) {
        var url=`/api/sale/taxpayer/${userDetail.SpRefNum}/branch/${userDetail.SubSpRefNum}`
        const hearders = {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
          'Accept': "application/json"
        }
        const result = await GlobalMethod.connectToAnotherSystem(`${url}`, "POST", {}, hearders, userDetail);
        return result;
    }

    static async getGlobalCouters(userDetail,token) {
        var url= `/api/setting/device-initialization/sp/${userDetail.SpRefNum}/branch/${userDetail.SubSpRefNum}`   
        const hearders = {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
          'Accept': "application/json"
        }
        const result = await GlobalMethod.connectToAnotherSystem(`${url}`, "POST", {}, hearders, userDetail);
        return result;
    }
}