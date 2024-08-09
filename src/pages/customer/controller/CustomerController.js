// customer/controller/customerController.js
import { GlobalMethod } from "../../../helpers/apiHelper";
import { constants } from "../../../helpers/apiConstants";
import {POST_CUSTOMER } from "../../../helpers/urlHelpers";

export class CustomerController {

    static async getCustomersBySubSpRefNum(userDetail,token) {
        var url= `/api/setting/customer/sp/${userDetail.SpRefNum}/subSp/${userDetail.SubSpRefNum}`;
        const hearders = {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
          'Accept': "application/json"
        }
        const result = await GlobalMethod.connectToAnotherSystem(`${url}`, "POST", {}, hearders, userDetail);
        return result;
    }


    static async savingCustomerSetupRequest(userDetail,token,data){
        const date =GlobalMethod.formatDate(new Date().getTime());
         var url= `/api/setting/sync/manage-customer-setup`;
           const hearders = {
             "SpSysId": `${constants.SpSysId}`,
             "SpRefNum": `${userDetail.SpRefNum}`,
             "SetupReqId": "20211125084649658870619F2349A1BC1",
             "Vrs": `${constants.Vrs}`,
             "SetupTyp": "SET010",
             "Authorization": `Bearer ${token}`,
           }
           const body={
             "SetupInfReq": {
               "SetHd": {
                 "SpRefNum": `${userDetail.SpRefNum}`,
                 "SetupReqId": "20211125084649658870619F2349A1BC1",
                 "SpSysId": `${constants.SpSysId}`,
                 "SetupTyp": "SET010",
                 "SetClBckUrl": "51d05d07741545ebb4702d1eae2045cdb8d370dbbee4f0559b34fd8e51c20fb4",
                 "DevId": userDetail.SubSpRefNum,
                 "SetupRespFlag": "false",
                 "Vrs": `${constants.Vrs}`
               },
               "SetupDtl": [
                 {
                   "CustomNm": data.customNm,
                   "CustomId": data.customId,
                   "IdTypCode": "1",
                   "CustomEmail": data.customEmail,
                   "CustomPhNum": data.customPhn,
                   "CustomPhNum1":data.customPhn1,
                   "CustomAddrs": data.customAdd,
                   "FaxNum": data.faxNumber,
                   "SpRefNum": userDetail.SpRefNum,
                   "SubSpRefNum": userDetail.SubSpRefNum,
                   "GenBy": userDetail.UsrNm,
                   "GenDt": `${date}`,
                   "ApvdBy":userDetail.UsrNm,
                   "ApvdDt": `${date}`,
                   "StsCode": "10001"
                 }
               ]
             },
             "Signature": ""
           }
            const result = await GlobalMethod.connectToAnotherSystem(`${url}`, "POST", body, hearders, userDetail);
            return result;
     }
}
