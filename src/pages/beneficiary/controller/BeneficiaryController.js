// customer/controller/customerController.js
import { GlobalMethod } from "../../../helpers/apiHelper";
import { constants } from "../../../helpers/apiConstants";
// import { GET_CUSTOMERS, POST_CUSTOMER } from "../../../helpers/urlHelpers";

export class BeneficiaryController {
    
    static async getBeneficiaryBySpRefNumBySubSp(userDetail,token) {
        const hearders = {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
          'Accept': "application/json"
        }
        const result = await GlobalMethod.connectToAnotherSystem(`/api/setting/beneficiary/sp/${userDetail.SpRefNum}/subSp/${userDetail.SubSpRefNum}`, "POST", {}, hearders, userDetail);
        return result;
      }

      static async getBeneficiaryBySpRefNumB(userDetail,token) {
        const hearders = {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
          'Accept': "application/json"
        }
        const result = await GlobalMethod.connectToAnotherSystem(`/api/setting/beneficiary/sp/${userDetail.SpRefNum}`, "POST", {}, hearders, userDetail);
        return result;
      }

    static async getCustomerDetails(token, customerId) {
        const headers = {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token.access_token}`,
            'Accept': "application/json"
        };
        const result = await GlobalMethod.connectToAnotherSystem(`/api/customer-management/${customerId}/details`, "POST", {}, headers, undefined);
        return result;
    }

    // static async savingCustomerSetupRequest(userDetail, token, data) {
    //     const date = GlobalMethod.formatDate(new Date().getTime());
    //     var url = `${POST_CUSTOMER}`;
    //     const headers = {
    //         "SpSysId": `${constants.SpSysId}`,
    //         "SpRefNum": `${userDetail.SpRefNum == null ? "" : userDetail.SpRefNum}`,
    //         "SetupReqId": "20211125084649658870619F2349A1BC1",
    //         "Vrs": `${constants.Vrs}`,
    //         "SetupTyp": "SET020",
    //         "Authorization": `Bearer ${token}`,
    //     };
    //     const body = {
    //         "SetupInfReq": {
    //             "SetHd": {
    //                 "SpRefNum": `${userDetail.SpRefNum == null ? "" : userDetail.SpRefNum}`,
    //                 "SetupReqId": "20211125084649658870619F2349A1BC1",
    //                 "SpSysId": `${constants.SpSysId}`,
    //                 "SetupTyp": "SET020",
    //                 "SetClBckUrl": "51d05d07741545ebb4702d1eae2045cdb8d370dbbee4f0559b34fd8e51c20fb4",
    //                 "DevId": "",
    //                 "SetupRespFlag": "false",
    //                 "Vrs": `${constants.Vrs}`
    //             },
    //             "SetupDtl": [
    //                 {
    //                     "CustomerNm": data.customer,
    //                     "CustomerDesc": data.descriptions,
    //                     "CustomerCatCode": data.customerCategory,
    //                     "GenDt": `${date}`,
    //                     "GenBy": userDetail.UsrNm,
    //                     "ApvdBy": userDetail.UsrNm,
    //                     "ApvdDt": `${date}`,
    //                     "StsCode": 10001,
    //                     "PermDtl": data.permission.map(e => {
    //                         return {
    //                             "PermNm": e.PermNm,
    //                             "PermCatCode": e.PermCatCode,
    //                             "StsCode": e.StsCode
    //                         }
    //                     })
    //                 }
    //             ]
    //         },
    //         "Signature": ""
    //     };
    //     const result = await GlobalMethod.connectToAnotherSystem(`${url}`, "POST", body, headers, userDetail);
    //     return result;
    // }
}
