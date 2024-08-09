import { GlobalMethod } from "../../../helpers/apiHelper";
export class PackageController{ 
    // /api/setting/package/name/{packageName}
    static async getPackagesByspRefNum(userDetail,token){
        var url= `/api/setting/package/sp/${userDetail.SpRefNum}`;
          const hearders = {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token.access_token}`,
            'Accept': "application/json"
          }
          const result = await GlobalMethod.connectToAnotherSystem(`${url}`, "POST", {}, hearders, userDetail);
          return result;
    }

    static async savingPackageSetupRequest(userDetail,token,data){
      const date =GlobalMethod.formatDate(new Date().getTime());
      //2022-01-20T14:38:51 format
        var url= `/api/setting/sync/manage-package-setup`;
          const hearders = {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
            'Accept': "application/json"
          }
          const body={
            "SetupInfReq": {
              "SetHd": {
                "SpRefNum": `${userDetail.SpRefNum}`,
                "SetupReqId": "20211125084649658870619F2349A1BC1",
                "SpSysId": `${constants.SpSysId}`,
                "SetupTyp": "SET001",
                "SetClBckUrl": "url1;url2;url3",
                "DevId": userDetail.serialNumber,
                "SetupRespFlag": false,
                "Vrs": `${constants.Vrs}`
              },
              "SetupDtl": [
                {
                  "PgNm": data.PgNm,
                  "PgDesc": data.PgDesc,
                  "PgCode": data.PgCode,
                  "PgAmt": data.PgAmt,
                  "PgStDt": data.PgStDt,
                  "PgEndDt": data.PgEndDt,
                  "DevId": userDetail.SubSpRefNum,
                  "DevCode": "3E9",
                  "RtlCentCode": "1020",
                  "GenDt": date,
                  "GenBy": userDetail.UsrNm,
                  "ApvdBy": userDetail.UsrNm,
                  "ApvdDt": date,
                  "StsCode": "10001"
                }
              ]
            },
            "Signature": "QEA4DFt5ccC0XzPux2FZ+VsokLxI1JrbY5m83fJ+rIIk0n0wh/j0TsUN6j6AS0uP3W3Apehb1zNRZZVqZlBrq2ckq09Otj2VDCubmjkspIbQqfFFCG2M2u+wwSutQ4BSqx5sFdqbehn3s0tIjvs3RqTTdh6WFSjxuOjyZEQN1nkf7Ozywg/DbMv+Qjg0Xd8HAnKsUHfujIL46oouPjedOoGCEcDarFoTsZWCBiBJa3xwizaerjE+vvmhHfhI7/pJX7Rj0Wtwuxx9ToVtmUpkph1WjMqIDQ/j/McECyaZtda+IQj/8bRBpLgs9QGXY3emQglEOdhaTyVKLupku7wtbQ=="
          }
          const result = await GlobalMethod.connectToAnotherSystem(`${url}`, "POST", body, hearders, userDetail);
          return result;
    }



}

// /setting/sync/manage-customer-setup
// /setting/sync/manage-device-setup
// /setting/sync/manage-deviceModel-setup
// /setting/sync/manage-exchangeRate-setup
// /setting/sync/manage-identityType-setup
// /setting/sync/manage-insurance-setup
// /setting/sync/manage-item-setup
// /setting/sync/manage-itemComposition-setup
// /setting/sync/manage-package-setup
// /setting/sync/manage-supplier-setup
// /user-management/sync/manage-user-setup
// /purchase/sync/manage-purchase