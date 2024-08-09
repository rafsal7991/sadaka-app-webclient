// customer/controller/customerController.js
import { GlobalMethod } from "../../../helpers/apiHelper";
import { constants } from "../../../helpers/apiConstants";
// import { GET_CUSTOMERS, POST_CUSTOMER } from "../../../helpers/urlHelpers";

export class SupplierController {
    static async getSuplierBySpRefNum(userDetail,token) {
        const hearders = {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
          'Accept': "application/json"
        }
        const result = await GlobalMethod.connectToAnotherSystem(`/api/setting/supplier/sp/${userDetail.SpRefNum}`, "POST", {}, hearders, userDetail);
        return result;
      }
      
      static async outgoingSupplierSetupRequest(userDetail,token,formData) {
        try {
          console.log(formData)
          const date =GlobalMethod.formatDate(new Date().getTime());
          var url=`/api/setting/sync/manage-supplier-setup`;
          const hearders = {
            "SpSysId": `${constants.SpSysId}`,
            "SpRefNum": `${userDetail.SpRefNum}`,
            "SetupReqId": "20211125084649658870619F2349A1BC1",
            "Vrs": `${constants.Vrs}`,
            "Authorization": `Bearer ${token}`,
          }
          const body={
            "SetupInfReq": {
              "SetHd": {
                  "SpRefNum": `${userDetail.SpRefNum}`,
                  "SetupReqId": "20211125084649658870619F2349A1BC1",
                  "SpSysId": `${constants.SpSysId}`,
                  "SetupTyp": "SET023",
                  "SetClBckUrl": "http://localhost/advatech-retail-service/api/setting/incoming-system-setup",
                  "DevId": "09VFDWEBAPI-12345678922222222210TZ333374",
                  "SetupRespFlag": "false",
                  "Vrs": `${constants.Vrs}`
              },
              "SetupDtl": [
                  {
                      "IdTypCode": "1",
                      "SupplId":formData.SupplId,
                      "SupplNm": formData.SupplNm,
                      "SupplEmail": formData.SupplEmail,
                      "SupplPhNum": formData.SupplPh,
                      "SupplPhNum1":formData.SupplPh1,
                      "SupplAddrs": formData.SupplAddrs,
                      "SpRefNum": userDetail.SpRefNum,
                      "GenDt": date,
                      "GenBy": userDetail.UsrNm,
                      "ApvdBy": userDetail.UsrNm,
                      "ApvdDt": date,
                      "StsCode": 10001
                  }
              ]
          },
          "Signature": ""
          }
          return;
          const result = await GlobalMethod.connectToAnotherSystem(`${url}`, "POST", body, hearders, userDetail);
          return result;
        }
        catch (error) {
        }

      }
}
