import { GlobalMethod } from "../../../helpers/apiHelper";
import { constants } from "../../../helpers/apiConstants";

export class DeviceModelController{
    static async getDeviceModels(token) {
        var url=`/api/setting/deviceModel`
        const hearders = {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
          'Accept': "application/json"
        }
        const result = await GlobalMethod.connectToAnotherSystem(`${url}`, "POST", {}, hearders, undefined);
        return result;
    }
    
    static async outgoingDeviceModelSetupRequest(userDetail,token,data) { 
      const date =GlobalMethod.formatDate(new Date().getTime());
          var url= `/api/setting/sync/manage-deviceModel-setup`;
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
                    "SetupTyp": "SET022",
                    "SetClBckUrl": "http://localhost/advatech-retail-service/api/setting/incoming-system-setup",
                    "DevId": "09VFDWEBAPI-12345678922222222210TZ333374",
                    "SetupRespFlag": "false",
                    "Vrs": `${constants.Vrs}`
                },
                "SetupDtl": [
                    {
                        "DevMdlCode": data.DevMdlCode,
                        "DevMdlDesc": data.DevMdlDesc,
                        "GenDt": `${date}`,
                        "GenBy": userDetail.UsrNm,
                        "ApvdBy": userDetail.UsrNm,
                        "ApvdDt": `${date}`,
                        "StsCode": "10001"
                    }
                ]
            },
            "Signature": ""
        }
          const result = await GlobalMethod.connectToAnotherSystem(`${url}`, "POST", body, hearders, undefined);
          return result;
    }


}