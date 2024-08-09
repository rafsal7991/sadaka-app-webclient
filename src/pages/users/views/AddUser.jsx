import React, { useState, useEffect } from "react";
import { Loader } from "lucide-react";
import { Link } from "react-router-dom";
import TextInput from "@/components/ui/Textinput";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Select from "react-select";
import {useDispatch, useSelector} from "react-redux";
import UserController from "@/pages/users/controller/usersController.js";
import {SpController} from "@/pages/sp/controller/SpController.js";
import {toast} from "react-toastify";
import {logoutSuccess} from "@/store/slices/auth/userSlice.js";


const schema = yup
  .object({
    // FNm: yup.string().required("First Name is required"),
    // LNm: yup.string().required("Last Name is required"),
    // // Addrs: yup.string(),
    // // Email: yup.string(),
    // PhNum: yup.string().required("Mobile Phone is required"),
    // PhNum1: yup.string(),
    // Psswd: yup.string().required("Password is required"),
    // PsswdExpryDt: yup.date().required("Password Expired Date is required"),
    // AccEn: yup.boolean(),
    // AccLock: yup.boolean(),
    // CredExp: yup.boolean(),
    // RoleNm: yup.string().required("Role is required"),
    // // MNm: yup.string().required("Role is required"),
    // UsrNm: yup.string(),
    // AccExp: yup.boolean(),
    // SpAdmin: yup.boolean(),
    // TopAdmin: yup.boolean(),
    // SubSpRefNum: yup.string(),
    // serviceProvider: yup.string(),
  })
  .required();

const AddUserForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const user = useSelector((e) => e.user);
  const [role, setRole] = useState([]);
  const [subSp, setSubSp] = useState([]);
  const [sp, setSp] = useState([]);
  const [taxPayer, setTaxPayer] = useState({});
  const dispatch = useDispatch();

  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
    setValue,
  } = useForm({
    resolver: yupResolver(schema),
    mode: "all",
  });


  useEffect(() => {
    getRoles();
    if(user.userInfo.UsrResp.UsrDtl.TopAdmin=="true"){
      getSpList();
    }
    if(user.userInfo.UsrResp.UsrDtl.SpAdmin=="true"){
      fetchSubSpData();
    }

  }, []);


  const getRoles = async () => {
    const response = await UserController.getRoleFromServer(
        user.userInfo.UsrResp.UsrDtl,
        user.accessToken.access_token
    );
    const rolesDetailResult = response.resultCurl.RoleResp.RoleDtl.map((e) => {
      return {
        ApvdBy: e.ApvdBy,
        ApvdDt: e.ApvdDt,
        GenBy: e.GenBy,
        GenDt: e.GenDt,
        RoleCatCode: e.RoleCatCode,
        label: e.RoleDesc,
        value: e.RoleNm,
        StsCode: e.StsCode,
      };
    });
    if(user.userInfo.UsrResp.UsrDtl.TopAdmin==="true"){
      setRole(rolesDetailResult.filter(e=>e.value==="SP_ADMIN"));
    }
    if(user.userInfo.UsrResp.UsrDtl.SpAdmin==="true"){
      setRole(rolesDetailResult.filter(e=>e.value !== "SP_ADMIN").filter(e=>e.value!=="TOP_ADMIN"));
    }
    // if(user.userInfo.UsrResp.UsrDtl){}
    // else{
    //   setRole(rolesDetailResult)
    // }

  };

  async function getSpList() {
    const result = await SpController.getAllSp(
        user.userInfo.UsrResp.UsrDtl,
        user.accessToken.access_token
    );
    if (result.error) {
      if (result.status === 401) {
        toast.error("Session Timed out, Logout", { autoClose: 2000 });
           dispatch(logoutSuccess());
      }
      if (result.status === 404) {
        setSp([]);
      }
    } else {
      const spResponseWrapper = result.resultCurl;
      const spDtl = spResponseWrapper.SpResp.SpDtl.map((e, index) => {
        return {
          sNo: index + 1,
          ApvdBy: e.ApvdBy,
          ApvdDt: e.ApvdDt,
          Cty: e.Cty,
          Cy: e.Cy,
          GenBy: e.GenBy,
          GenDt: e.GenDt,
          LocDesc: e.LocDesc,
          SpDesc:`${e.SpDesc}` ,
          label:`${e.SpNm}-${e.SpRefNum}` ,
          value: e.SpRefNum,
          pinNumber: e.SpRefNum,
          TxOfcNm: e.TxOfcNm,
          status: e.statusCode == 10001 ? "Active" : "Inactive",
        };
      });
      setSp(spDtl);
    }
  }

  async function fetchSubSpData() {
    try {
      const result = await SubSpController.getSubSpBySpRefNum(
          user.userInfo.UsrResp.UsrDtl,
          user.accessToken.access_token
      );
      if(!result.error){
        const SubSpDtl= result.resultCurl.SubSpResp.SubSpDtl.map((e,index)=>{
          return {
            sNo: index+1,
            ApvdBy: e.ApvdBy,
            ApvdDt: e.ApvdDt,
            GenBy: e.GenBy,
            GenDt:e.GenDt,
            InvCtrlFlag: e.InvCtrlFlag,
            InvRstFlag: e.InvRstFlag,
            NegInvFlag: e.NegInvFlag,
            SpRefNum: e.SpRefNum,
            description: e.SubSpDesc,
            name: e.SubSpNm,
            label: e.SubSpRefNum,
            SvcFlag: e.SvcFlag,
            SvcVrs: e.SvcVrs,
            status: `${e.StsCode===10001 ? "Active":"Inactive"}`,
          }
        })
        setSubSp(SubSpDtl);
      }
      else{
        if(result.status===401){
          toast.error("Session Timed out, Logout", { autoClose: 2000 });
          dispatch(logoutSuccess());
        }
        // if(result.status==404){
        //   setData([])
        // }
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      const response= await UserController.incomingUserSetupRequest(user.userInfo.UsrResp.UsrDtl,
        user.accessToken.access_token,data)
       if(response.status==200){
        toast.success("successfully added", { autoClose: 4000 });
        window.location.reload();
       }
       if(response.status==401){
        dispatch(logout())
       }
        
    } catch (error) {
      console.error("Failed to add user", error);
    } finally {
      setIsLoading(false);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword); // Toggle password visibility
  };



  const checkboxContainerStyle = {
    border: "1px solid grey",
    borderRadius: "0.25rem",
    padding: "0.5rem",
    marginBottom: "1rem",
  };

  const checkboxLabelStyle = {
    marginLeft: "0.5rem", // Adjust margin as needed
  };



  return (
    <div className="page-wrapper">
      <nav className="flex mb-3" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
          <li className="inline-flex items-center">
            <Link
              to="/"
              className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
            >
              <svg
                className="w-3 h-3 me-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
              </svg>
              Home
            </Link>
          </li>
          <li>
            <div className="flex items-center">
              <svg
                className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <Link
                to="/userManagement/users"
                className="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white"
              >
                Users List
              </Link>
            </div>
          </li>
          <li aria-current="page">
            <div className="flex items-center">
              <svg
                className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <span className="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">
                Add User
              </span>
            </div>
          </li>
        </ol>
      </nav>

      <h4 className="card-title">Create User</h4>
      <div className="mb-4 text-sm text-red-500">
        <strong>Fields marked with * are mandatory</strong>
      </div>

      <div className="card p-4">
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Left Column */}
           <div  className="grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-1 gap-2">

           <div className="mb-4">
              <label htmlFor="FNm" className="form-label">
                First Name
                <span className="text-red-500">*</span>
              </label>
              <TextInput
                id="FNm"
                name="FNm"
                register={register}
                errors={errors.FNm}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="MNm" className="form-label">
                Middle Name
                <span className="text-red-500">*</span>
              </label>
              <input
                id="MNm"
                name="MNm"
                {...register("MNm")}
               className="text-control py-[10px] px-3"
                errors={errors.MNm}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="LNm" className="form-label">
                Last Name
                <span className="text-red-500">*</span>
              </label>
              <TextInput
                id="LNm"
                name="LNm"
                register={register}
                errors={errors.LNm}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="PhNum" className="form-label">
                Mobile Phone
                <span className="text-red-500">*</span>
              </label>
              <TextInput
                id="PhNum"
                name="PhNum"
                register={register}
                errors={errors.PhNum}

                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="PhNum1" className="form-label">
                Secondary Mobile Phone
              </label>
              <TextInput
                id="PhNum1"
                name="PhNum1"
                register={register}
                errors={errors.PhNum1}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="Email" className="form-label">
                Email
                <span className="text-red-500">*</span>
              </label>
              <input
                id="Email"
                name="Email"
                type ="email"
                {...register("Email")}
                className="text-control py-[10px] px-3"
                errors={errors.Email}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="Psswd" className="form-label">
                Password
                <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <TextInput
                  type={showPassword ? "text" : "password"} // Toggle input type based on showPassword state
                  id="Psswd"
                  name="Psswd"
                  register={register}
                  errors={errors.Psswd}
                  required
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute inset-y-0 right-0 px-3 py-1 text-sm leading-tight focus:outline-none"
                  style={{
                    border: "1px solid rgb(23, 8, 105)",
                    background: "white",
                    borderRadius: "0 0.25rem 0.25rem 0",
                  }}
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="PsswdExpryDt" className="form-label">
                Password Expired Date
                <span className="text-red-500">*</span>
              </label>
              <input
                  type="date"
                  name="PsswdExpryDt"
                  {...register("PsswdExpryDt")}
                  className={errors.PsswdExpryDt ? "border-red-500 text-control" : "text-control py-[10px] px-3"}

                // required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="Addrs" className="form-label">
                Address
              </label>
              <input
                id="Addrs"
                name="Addrs"
                  className="text-control py-[10px] px-3"
                {...register("Addrs")}
                errors={errors.Addrs}
              />
            </div>

            <div className="mb-4">
              <label htmlFor="RoleNm" className="form-label">
                Role
                <span className="text-red-500">*</span>
              </label>
              <Select
                id="RoleNm"
                name="RoleNm"
                options={role}
                onChange={(selectedOption) => setValue("RoleNm", selectedOption.value)}
                className={errors.RoleNm ? "border-red-500" : ""}
              />
              {errors.RoleNm && <span className="text-red-500">{errors.RoleNm.message}</span>}

          </div>
            <div className="mb-4">
              <label htmlFor="UsrNm" className="form-label">
                Username
              </label>
              <TextInput
                id="UsrNm"
                name="UsrNm"
                disabled={true}
                register={register}
                errors={errors.UsrNm}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="serviceProvider" className="form-label">
                Service Provider
              </label>
              <Select
                  id="RoleNm"
                  name="serviceProvider"
                  options={sp}
                  onChange={(selectedOption) => setValue("serviceProvider", selectedOption.pinNumber)}
                  className={errors.RoleNm ? "border-red-500" : ""}
              />


          </div>
          {/* Checkbox Fields */}
          <div className="">
          <div style={checkboxContainerStyle}>
            <div className="flex items-center">
              <input
                id="AccExp"
                name="AccExp"
                type="checkbox"
                {...register("AccExp")}
              />
              <label htmlFor="AccExp" className="form-label" style={checkboxLabelStyle}>
                Account Expired
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="AccLock"
                name="AccLock"
                type="checkbox"
                {...register("AccLock")}
              />
              <label htmlFor="AccLock" className="form-label" style={checkboxLabelStyle}>
                Account Locked
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="AccEn"
                name="AccEn"
                type="checkbox"
                {...register("AccEn")}
              />
              <label htmlFor="AccEn" className="form-label" style={checkboxLabelStyle}>
                Account Enabled
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="CredExp"
                name="CredExp"
                type="checkbox"
                {...register("CredExp")}
              />
              <label htmlFor="CredExp" className="form-label" style={checkboxLabelStyle}>
                Credential Expired
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="SpAdmin"
                name="SpAdmin"
                type="checkbox"
                {...register("SpAdmin")}
              />
              <label htmlFor="SpAdmin" className="form-label" style={checkboxLabelStyle}>
                Service provider Admin
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="TopAdmin"
                name="TopAdmin"
                type="checkbox"
                {...register("TopAdmin")}
              />
              <label htmlFor="TopAdmin" className="form-label" style={checkboxLabelStyle}>
                Top Admin
              </label>
            </div>
            </div>
          </div>
           </div>

          <div className="col-span-3 flex justify-end">
            <button type="submit" className="btn btn-primary" disabled={isLoading}>
              {isLoading ? <Loader className="animate-spin" /> : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddUserForm;
