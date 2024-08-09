import { GlobalMethod } from "../../../helpers/apiHelper";
import { constants } from "../../../helpers/apiConstants";

export class DeviceController{
    static async getDeviceBySpRefNum(userDetail,token) {
          var url=`/api/setting/device/sp/${userDetail.SpRefNum}`
          if(userDetail.TopAdmin=="true"){
             url=`/api/setting/device`
          }
          const hearders = {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
            'Accept': "application/json"
          }
          const result = await GlobalMethod.connectToAnotherSystem(`${url}`, "POST", {}, hearders, userDetail);
          return result;
    
      }

      static async getDeviceBySubSpRefNum(userDetail,token) {
        try {
          var url=`/api/setting/device/sp/${userDetail.SpRefNum}`
          const hearders = {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
            'Accept': "application/json"
          }
          const result = await GlobalMethod.connectToAnotherSystem(`${url}`, "POST", {}, hearders, userDetail);
        }
        catch (error) {
          throw error;
        
        }
    
      }

      static async savingDeviceSetupRequest(userDetail,token,data){
        const date =GlobalMethod.formatDate(new Date().getTime());
         var url= `/api/setting/sync/manage-device-setup`;
           const hearders = {
             "SpSysId": `${constants.SpSysId}`,
             "SpRefNum": `${userDetail.SpRefNum}`,
             "SetupReqId": "20211125084649658870619F2349A1BC1",
             "Vrs": `${constants.Vrs}`,
             "SetupTyp": "SET005",
             "Authorization": `Bearer ${token}`,
           }
           const body={
             "SetupInfReq": {
               "SetHd": {
                 "SpRefNum": `${userDetail.SpRefNum}`,
                 "SetupReqId": "20211125084649658870619F2349A1BC1",
                 "SpSysId": `${constants.SpSysId}`,
                 "SetupTyp": "SET005",
                 "SetClBckUrl": "51d05d07741545ebb4702d1eae2045cdb8d370dbbee4f0559b34fd8e51c20fb4",
                 "DevId": userDetail.SubSpRefNum,
                 "SetupRespFlag": "false",
                 "Vrs": `${constants.Vrs}`
               },
               "SetupDtl": [
                {
                    "SubSpRefNum": data.SubSpRefNum,
                    "DevCode": data.DevCode,
                    "DevMdlCode": data.DevMdlCode,
                    "DevId": data.DevId,
                    "DevId1": data.DevId1,
                    "DevId2": data.DevId2,
                    "DevId3": data.DevId3,
                    "DevId4": data.DevId4,
                    "SlLmt": 10,
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
           try {
            const result = await GlobalMethod.connectToAnotherSystem(`${url}`, "POST", body, hearders, userDetail);
            console.log(result)
            return result;
           } catch (error) {
            throw error;
           }
     }




}