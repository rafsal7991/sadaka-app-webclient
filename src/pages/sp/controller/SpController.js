import { GlobalMethod } from "../../../helpers/apiHelper";
import { constants } from "../../../helpers/apiConstants";

export class SpController{

    static async getAllSp(userDetail,token) {
        var url= `/api/setting/taxpayer`;
        const hearders = {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
          'Accept': "application/json"
        }
        const result = await GlobalMethod.connectToAnotherSystem(`${url}`, "POST", {}, hearders, userDetail);
        return result;
    }

   static  async outgoingSpDeviceInitializationCheckRequest(userDetail,token,formData){
      var url= `/api/setting/sync/check-device-initialization`;
      const hearders = {
        "SpSysId": `${constants.SpSysId}`,
        "SpRefNum": `${userDetail.SpRefNum}`,
        "SetupReqId": "20211125084649658870619F2349A1BC1",
        "Vrs": `${constants.Vrs}`,
        "SetupTyp": "SET005",
        "Authorization": `Bearer ${token}`,
      }
      const body=  {
        "DevInitCheckReq": {
            "TxIdNum": formData.TxIdNum,
            "SubSpRefNum": formData.SubSpRefNum,
            "DevSNum": formData.DevSNum
        },
        "Signature": ""
      }
      const result = await GlobalMethod.connectToAnotherSystem(`${url}`, "POST", body, hearders, userDetail);
      return result;
    }
   
}