import { GlobalMethod } from "../../../helpers/apiHelper";

export class ProductController{
    static async getItemList(userDetail,token) {
        var url= `/api/setting/item/pin/${userDetail.SpRefNum}/branch/${userDetail.SubSpRefNum}`;
        const hearders = {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
          'Accept': "application/json"
        }
        const result = await GlobalMethod.connectToAnotherSystem(`${url}`, "POST", {}, hearders, userDetail);
        return result;
    }

}