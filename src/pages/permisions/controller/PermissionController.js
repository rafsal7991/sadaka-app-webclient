import { GlobalMethod } from "../../../helpers/apiHelper";
import { constants } from "../../../helpers/apiConstants";

export class PermissionController {
  static async getPermissionByStatusCode(token) {
    const hearders = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token.access_token}`,
      Accept: "application/json",
    };
    const result = await GlobalMethod.connectToAnotherSystem(
      `/api/permission-management/permission/status/10001`,
      "POST",
      {},
      hearders,
      undefined
    );
    return result;
  }

  static async savePermission(userDetail, token, formdata) {
    const date = GlobalMethod.formatDate(new Date().getTime());
    const url = "/api/permission-management/sync/manage-permission-setup";
    const hearders = {
      SpSysId: `${constants.SpSysId}`,
      SpRefNum: ``,
      SetupReqId: "20211125084649658870619F2349A1BC1",
      Vrs: `${constants.Vrs}`,
      SetupTyp: "SET019",
      Authorization: `Bearer ${token}`,
    };
    const body = {
      SetupInfReq: {
        SetHd: {
          SpRefNum: "",
          SubSpRefNum: "",
          SetupReqId: "20211125084649658870619F2349A1BC1",
          SpSysId: `${constants.SpSysId}`,
          SetupTyp: "SET019",
          SetClBckUrl: "20211125084649658870619F2349A1BC1",
          DevId: "20211125084649658870619F2349A1BC1",
          SetupRespFlag: "false",
          Vrs: `${constants.Vrs}`,
        },
        SetupDtl: [
          {
            PermNm: formdata.permissionDescription,
            PermDesc: formdata.permissionDescription,
            PermCatCode: formdata.permissionCode,
            GenDt: date,
            GenBy: userDetail.UsrNm,
            ApvdBy: userDetail.UsrNm,
            ApvdDt: date,
            StsCode: "10001",
          },
        ],
      },
      Signature: "",
    };

    const result = await GlobalMethod.connectToAnotherSystem(
      url,
      "POST",
      body,
      hearders,
      undefined
    );
    return result;
  }
}
