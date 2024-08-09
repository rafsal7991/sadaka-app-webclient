export class ExpenditureController{
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

}