import { GlobalMethod } from "../../../helpers/apiHelper";
import { constants } from "../../../helpers/apiConstants";


export class IdentityController{
static async getIdentityTypes(token) {
    const hearders = {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token.access_token}`,
      'Accept': "application/json"
    }
    const result = await GlobalMethod.connectToAnotherSystem(`/api/setting/identityType`, "POST", {}, hearders, undefined);
    return result;
}

static async outgoingIdentityTypeSetupRequest(userDetail,token,formdata) {
  const date =GlobalMethod.formatDate(new Date().getTime());
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
            "IdTyp": formdata.IdTyp,
            "IdTypNm": formdata.IdTypNm,
            "IdTypCode": formdata.IdTypCode,
            "GenDt": date,
            "GenBy": userDetail.UsrNm,
            "ApvdDt": date,
            "ApvdBy": userDetail.UsrNm,
            "StsCode": "10001"
        }
      ]
    },
    "Signature": ""}
  const result = await GlobalMethod.connectToAnotherSystem(`/api/setting/sync/manage-identityType-setup`, "POST", body, hearders, undefined);
  return result;
}
}