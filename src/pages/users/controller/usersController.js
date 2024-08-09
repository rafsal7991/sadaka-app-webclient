import { GET_ROLES, POST_USER } from "../../../helpers/urlHelpers";
import { GlobalMethod } from "../../../helpers/apiHelper";
import { constants } from "../../../helpers/apiConstants";
import { Buffer } from 'buffer';
export default class UserController {

  static async getUserDetail(username, token) {
    try {
      const hearders = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token.access_token}`,
        'Accept': "application/json"
      }
      const result = await GlobalMethod.connectToAnotherSystem(`/api/user-management/user-detail?username=${username}`, "POST", {}, hearders, undefined);
      return result;
    }
    catch (error) {
      return {
        success:false,
        token:null,
        message:error.response.data ||"something went wrong",
        status:error.response.status
      }
    }
  }

  // 'uma/role-management/role-category/'.$roleCategoryCode;
  static async getUsers(userDetail,token) {
      var url=``
      if(userDetail.TopAdmin=="true"){
        url="/api/user-management/sp-admin/1";
       }
       if(userDetail.SpAdmin=="true"){
        url=`/api/user-management/top-admin/0/sp-admin/0/sp/${userDetail.SpRefNum}`;
       }

      const hearders = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
        'Accept': "application/json"
      }
      const result = await GlobalMethod.connectToAnotherSystem(`${url}`, "POST", {}, hearders, userDetail);
      return result;
  }

  static async incomingUserSetupRequest(userDetail,token,formData){
    const date =GlobalMethod.formatDate(new Date().getTime());
    var SpRefNum="";
    var SubSpRefNum="";
    if(userDetail.TopAdmin=="true"){
      SpRefNum=formData.serviceProvider;
      SubSpRefNum="";
    }
    if(userDetail.SpAdmin=="true"){
      SubSpRefNum=formData.SubSpRefNum;
      SpRefNum=userDetail.SpRefNum;
    }

    const hearders = {
      "SpSysId": `${constants.SpSysId}`,
      "SpRefNum": `${SpRefNum}`,
      "SetupReqId": "20211125084649658870619F2349A1BC1",
      "Vrs": `${constants.Vrs}`,
      "SetupTyp": "SET002",
      "Authorization": `Bearer ${token}`,
    }
    const body={
      "SetupInfReq":{
        "SetHd": {
          "SpRefNum": `${SpRefNum}`,
          "SubSpRefNum":SubSpRefNum,
          "SetupReqId": "20211125084649658870619F2349A1BC1",
          "SpSysId": `${constants.SpSysId}`,
          "SetupTyp": "SET002",
          "SetClBckUrl": "http://localhost/advatech-retail-service/api/setting/incoming-system-setup",
          "DevId": "09VFDWEBAPI-12345678922222222210TZ333374",
          "SetupRespFlag": "false",
          "Vrs": `${constants.Vrs}`
      },
      "SetupDtl":[{
      "SpRefNum":`${SpRefNum}`,
      "SubSpRefNum":SubSpRefNum,
      "AccExp": formData.AccExp ? "true" : "false",
      "AccLock":formData.AccLock ? "true" : "false",
      "AccEn":formData.AccEn ? "true" : "false",
      "CredExp":formData.CredExp ? "true" : "false",
      "SpAdmin":formData.SpAdmin ? "true" : "false",
      "TopAdmin":formData.TopAdmin ? "true" : "false",
      "PsswdExpryDt":formData.PsswdExpryDt,
      "Psswd":Buffer.from(formData.Psswd+"+7").toString('base64'),
      "FNm":formData.FNm,
      "LNm":formData.LNm,
      "MNm":formData.MNm,
      "PhNum":formData.PhNum,
      "PhNum1":formData.PhNum1,
      "Email":formData.Email,
      "UsrNm":"",
      "Addrs":formData.Addrs,
      "RoleNm":formData.RoleNm,
      "GenDt": `${date}`,
      "GenBy": userDetail.UsrNm,
      "ApvdBy":userDetail.UsrNm,
      "ApvdDt":`${date}`,
      "StsCode":10001,
    }]},
    "Signature":""}

    console.log("body")

    const result = await GlobalMethod.connectToAnotherSystem(`${POST_USER}`, "POST", body, hearders, userDetail);
    console.log("result",result)
    return result;

  }


  static async getRoleFromServer(userDetail,token){
    const hearders = {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
      'Accept': "application/json"
    }
    const result = await GlobalMethod.connectToAnotherSystem(`${GET_ROLES}`, "POST", {}, hearders, userDetail);
    return result;

  }





}
