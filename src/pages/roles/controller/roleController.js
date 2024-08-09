import { GlobalMethod } from "../../../helpers/apiHelper";
import { constants } from "../../../helpers/apiConstants";
import { GET_ROLES, POST_ROLE } from "../../../helpers/urlHelpers";

export class RoleController{

    static async getAllRoles(token) {
          const hearders = {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token.access_token}`,
            'Accept': "application/json"
          }
          const result = await GlobalMethod.connectToAnotherSystem(`${GET_ROLES}`, "POST", {}, hearders, undefined);
          return result;
      }

      static async getRoleCategory(token) {
        const hearders = {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token.access_token}`,
          'Accept': "application/json"
        }
        const result = await GlobalMethod.connectToAnotherSystem(`${GET_ROLES}`, "POST", {}, hearders, undefined);
        return result;
    }

      static async getRolePermissions(token,roleName) {
        const hearders = {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token.access_token}`,
          'Accept': "application/json"
        }
        const result = await GlobalMethod.connectToAnotherSystem(`/api/role-management/${roleName}/role-permission`, "POST", {}, hearders, undefined);
        return result;
    }

    static async savingRoleSetupRequest(userDetail,token,data){
        const date =GlobalMethod.formatDate(new Date().getTime());
        var url= `${POST_ROLE}`;
        const hearders = {
            "SpSysId": `${constants.SpSysId}`,
            "SpRefNum": `${userDetail.SpRefNum==null?"":userDetail.SpRefNum}`,
            "SetupReqId": "20211125084649658870619F2349A1BC1",
            "Vrs": `${constants.Vrs}`,
            "SetupTyp": "SET020",
            "Authorization": `Bearer ${token}`,
        }
        const body={
            "SetupInfReq": {
                "SetHd": {
                    "SpRefNum": `${userDetail.SpRefNum==null?"":userDetail.SpRefNum}`,
                    "SetupReqId": "20211125084649658870619F2349A1BC1",
                    "SpSysId": `${constants.SpSysId}`,
                    "SetupTyp": "SET020",
                    "SetClBckUrl": "51d05d07741545ebb4702d1eae2045cdb8d370dbbee4f0559b34fd8e51c20fb4",
                    "DevId":"",
                    "SetupRespFlag": "false",
                    "Vrs": `${constants.Vrs}`
                },
                "SetupDtl": [
                    {
                        "RoleNm":data.role,
                        "RoleDesc":data.descriptions,
                        "RoleCatCode":data.roleCategory,
                        "GenDt": `${date}`,
                        "GenBy": userDetail.UsrNm,
                        "ApvdBy":userDetail.UsrNm,
                        "ApvdDt": `${date}`,
                        "StsCode": 10001,
                        "PermDtl":data.permission.map(e=>{
                            return {
                                "PermNm": e.PermNm,
                                "PermCatCode": e.PermCatCode,
                                "StsCode": e.StsCode
                            }
                        })

                    }

                ]
            },
            "Signature": ""
        }
        const result = await GlobalMethod.connectToAnotherSystem(`${url}`, "POST", body, hearders, userDetail);
        return result;
    }




}
