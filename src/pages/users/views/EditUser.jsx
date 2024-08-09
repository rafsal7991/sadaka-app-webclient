import React, { useState, useEffect } from "react";
import { Loader } from "lucide-react";
import { Link, useLocation } from 'react-router-dom';
import Textinput from "@/components/ui/Textinput"; // Correctly import your Textinput
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Select from "react-select";
import { useDispatch, useSelector } from "react-redux";
import UserController from "@/pages/users/controller/usersController.js";
import { SpController } from "@/pages/sp/controller/SpController.js";
import { toast } from "react-toastify";
import { logoutSuccess } from "@/store/slices/auth/userSlice.js";

// Validation schema
const schema = yup.object({
  FNm: yup.string().required("First Name is required"),
  MNm: yup.string(),
  LNm: yup.string().required("Last Name is required"),
  PhNum: yup.string().required("Mobile Phone is required"),
  PhNum1: yup.string(),
  Email: yup.string().email("Invalid email format"),
  Psswd: yup.string().required("Password is required"),
  PsswdExpryDt: yup.date().required("Password Expired Date is required"),
  Addrs: yup.string(),
  RoleNm: yup.string().required("Role is required"),
  UsrNm: yup.string(),
  AccExp: yup.boolean(),
  AccLock: yup.boolean(),
  AccEn: yup.boolean(),
  CredExp: yup.boolean(),
  SpAdmin: yup.boolean(),
  TopAdmin: yup.boolean(),
  SubSpRefNum: yup.string(),
  serviceProvider: yup.string(),
}).required();

const EditUserForm = ({ userId }) => {
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const userDetail = location.state.row;
  const [showPassword, setShowPassword] = useState(false);
  const user = useSelector((state) => state.user);
  const [role, setRole] = useState([]);
  const [subSp, setSubSp] = useState([]);
  const [sp, setSp] = useState([]);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    PsswdExpryDt: userDetail.PsswdExpryDt.split("T")[0],
    Psswd: "",
    FNm: userDetail.fNm,
    LNm: userDetail.lNm,
    MNm: userDetail.mNm,
    PhNum: userDetail.phone,
    PhNum1: userDetail.PhNum1,
    Email: userDetail.Email,
    UsrNm: userDetail.UsrNm,
    Addrs: userDetail.Addrs,
    RoleNm: "",
    AccExp: userDetail.AccExp == "true" ? true : false,
    AccLock: userDetail.AccLock == "true" ? true : false,
    AccEn: userDetail.AccEn == "true" ? true : false,
    CredExp: userDetail.CredExp == "true" ? true : false,
    SpAdmin: userDetail.SpAdmin == "true" ? true : false,
    TopAdmin: userDetail.TopAdmin == "true" ? true : false,
    SubSpRefNum: userDetail.SubSpRefNum,
    serviceProvider: userDetail.SpRefNum
  });

  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
  } = useForm({
    resolver: yupResolver(schema),
    mode: "all",
  });

  useEffect(() => {
    getRoles();
    if (user.userInfo.UsrResp.UsrDtl.TopAdmin === "true") {
      getSpList();
    }
    if (user.userInfo.UsrResp.UsrDtl.SpAdmin === "true") {
      fetchSubSpData();
    }
    getUserData(userId);
  }, [userId]);

  const getUserData = async (userId) => {
    try {
      const userData = await UserController.getUserById(userId, user.accessToken.access_token);
      // Populate the form fields with the fetched user data
      setValue("FNm", userData.FNm);
      setValue("MNm", userData.MNm);
      setValue("LNm", userData.LNm);
      setValue("PhNum", userData.PhNum);
      setValue("PhNum1", userData.PhNum1);
      setValue("Email", userData.Email);
      setValue("Psswd", userData.Psswd);
      setValue("PsswdExpryDt", userData.PsswdExpryDt);
      setValue("Addrs", userData.Addrs);
      setValue("RoleNm", userData.RoleNm);
      setValue("UsrNm", userData.UsrNm);
      setValue("serviceProvider", userData.serviceProvider);
      setValue("AccExp", userData.AccExp);
      setValue("AccLock", userData.AccLock);
      setValue("AccEn", userData.AccEn);
      setValue("CredExp", userData.CredExp);
      setValue("SpAdmin", userData.SpAdmin);
      setValue("TopAdmin", userData.TopAdmin);
    } catch (error) {
      console.error("Failed to fetch user data", error);
    }
  };

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    const newValue = type === "checkbox" ? checked : value;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: newValue,
    }));
  };

  const handleRole = (e) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      RoleNm: e.value,
    }));
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword); // Toggle password visibility
  };

  const getRoles = async () => {
    const response = await UserController.getRoleFromServer(user.userInfo.UsrResp.UsrDtl, user.accessToken.access_token);
    const rolesDetailResult = response.resultCurl.RoleResp.RoleDtl.map((e) => ({
      label: e.RoleDesc,
      value: e.RoleNm,
    }));
    if (user.userInfo.UsrResp.UsrDtl.TopAdmin === "true") {
      setRole(rolesDetailResult);
    }
  };

  const getSpList = async () => {
    try {
      const response = await SpController.getSpList(user.accessToken.access_token);
      const spList = response.map((e) => ({
        label: e.name,
        value: e.id,
      }));
      setSp(spList);
    } catch (error) {
      console.error("Failed to fetch service providers", error);
    }
  };

  const handleSp = (e) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      serviceProvider: e.pinNumber,
    }));
  };

  const fetchSubSpData = async () => {
    try {
      const response = await SpController.getSubSpList(user.accessToken.access_token);
      const subSpList = response.map((e) => ({
        label: e.name,
        value: e.id,
      }));
      setSubSp(subSpList);
    } catch (error) {
      console.error("Failed to fetch sub service providers", error);
    }
  };

  const onSubmit = async (data) => {
    try {
      setIsLoading(true);
      await UserController.updateUser(data, user.accessToken.access_token);
      toast.success("User updated successfully");
    } catch (error) {
      console.error("Error updating user", error);
      toast.error("Failed to update user");
    } finally {
      setIsLoading(false);
    }
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
                <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 1 0 1.414-1.414Z" />
              </svg>
              Home
            </Link>
          </li>
          <li className="inline-flex items-center">
            <Link
              to="/users"
              className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
            >
              / Users
            </Link>
          </li>
          <li>
            <div className="flex items-center">
              <span className="text-gray-400">/</span>
              <span className="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">
                Edit User
              </span>
            </div>
          </li>
        </ol>
      </nav>
      <h4 className="card-title">Edit User</h4>
      <div className="mb-4 text-sm text-red-500">
        <strong>Fields marked with * are mandatory</strong>
      </div>

      <div className="card layout">
        <div className="card-header">
        </div>
        
        <div className="card-body">
          <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex justify-between">
            <div className="w-full px-2">
              {user.userInfo.UsrResp.UsrDtl.TopAdmin=="true" &&
              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="sp">
                Search Taxpayer <span className="text-danger">*</span>
                </label>
                <Select
                  options={sp}
                  onChange={handleSp} 
                  name="sp"
                  styles={{ container: (base) => ({ ...base, width: '60%' }) }}
                />
              </div>}
            </div>
               
              </div>
              <div className="flex px-2 space-x-4 mb-4">
  <div className="flex-1">
    <Textinput
      label="First Name *"
      name="FNm"
      register={register}
      errors={errors}
      value={formData.FNm}
      onChange={handleChange}
      placeholder="First Name"
    />
  </div>
  <div className="flex-1">
    <Textinput
      label="Middle Name"
      name="MNm"
      register={register}
      errors={errors}
      value={formData.MNm}
      onChange={handleChange}
      placeholder="Middle Name"
    />
  </div>
  <div className="flex-1">
    <Textinput
      label="Last Name *"
      name="LNm"
      register={register}
      errors={errors}
      value={formData.LNm}
      onChange={handleChange}
      placeholder="Last Name"
    />
  </div>
</div>

   <div className="flex px-2 space-x-4 mb-4">
  <div className="flex-1">
    <Textinput
      label="Mobile Phone *"
      name="PhNum"
      register={register}
      errors={errors}
      value={formData.PhNum}
      onChange={handleChange}
      placeholder="Phone Number"
    />
  </div>
  <div className="flex-1">
    <Textinput
      label="Secondary Mobile Phone"
      name="PhNum1"
      register={register}
      errors={errors}
      value={formData.PhNum1}
      onChange={handleChange}
      placeholder="Phone Number 2"
    />
  </div>
</div>
<div className="flex px-2 space-x-4 mb-4">
  <div className="flex-1">
    <label className="block text-sm font-medium mb-1" htmlFor="RoleNm">
      Role <span className="text-danger">*</span>
    </label>
    <Select
      options={role}
      value={role.find((option) => option.value === formData.RoleNm)}
      onChange={handleRole}
      name="RoleNm"
    />
  </div>
  <div className="flex-1">
    <Textinput
      label="Address *"
      name="Addrs"
      register={register}
      errors={errors}
      value={formData.Addrs}
      onChange={handleChange}
      placeholder="Address"
      className="w-full"
    />
  </div>
  <div className="flex-1">
    <Textinput
      label="Email"
      name="Email"
      register={register}
      errors={errors}
      value={formData.Email}
      onChange={handleChange}
      placeholder="Email"
    />
  </div>
</div>

<div className="flex px-2 space-x-4 mb-4">
  <div className="flex-1">
    <Textinput
      label="Password *"
      name="Psswd"
      type={showPassword ? "text" : "password"}
      register={register}
      errors={errors}
      value={formData.Psswd}
      onChange={handleChange}
      placeholder="Password"
    />
  </div>
  <div className="flex-1">
    <label className="block text-sm font-medium mb-1" htmlFor="PsswdExpryDt">
      Password Expiry Date <span className="text-danger">*</span>
    </label>
    <Textinput
      type="date"
      register={register}
      className="form-input w-full"
      name="PsswdExpryDt"
      value={formData.PsswdExpryDt}
      onChange={handleChange}
    />
  </div>
</div>

<div className="flex flex-wrap justify-between">
  <div  className="w-1/2 px-2 mb-4">
    <div style={{ backgroundColor: 'rgb(222, 227, 224)' }} className="p-4  flex items-start">
      <label className="inline-flex items-start">
        <input
          type="checkbox"
          className="form-checkbox mr-2"
          name="AccExp"
          checked={formData.AccExp}
          onChange={handleChange}
        />
        <span>Account Expired</span>
      </label>
    </div>
  </div>
  <div className="w-1/2 px-2 mb-4">
    <div style={{ backgroundColor: 'rgb(222, 227, 224)' }} className=" p-4  flex items-start">
      <label className="inline-flex items-start">
        <input
          type="checkbox"
          className="form-checkbox mr-2"
          name="AccLock"
          checked={formData.AccLock}
          onChange={handleChange}
        />
        <span>Account Locked</span>
      </label>
    </div>
  </div>
  <div className="w-1/2 px-2 mb-4">
    <div style={{ backgroundColor: 'rgb(222, 227, 224)' }} className=" p-4  flex items-start">
      <label className="inline-flex items-start">
        <input
          type="checkbox"
          className="form-checkbox mr-2"
          name="AccEn"
          checked={formData.AccEn}
          onChange={handleChange}
        />
        <span>Account Enabled</span>
      </label>
    </div>
  </div>
  <div className="w-1/2 px-2 mb-4">
    <div style={{ backgroundColor: 'rgb(222, 227, 224)' }} className=" p-4  flex items-start">
      <label className="inline-flex items-start">
        <input
          type="checkbox"
          className="form-checkbox mr-2"
          name="CredExp"
          checked={formData.CredExp}
          onChange={handleChange}
        />
        <span>Credentials Expired</span>
      </label>
    </div>
  </div>
  <div className="w-1/2 px-2 mb-4">
    <div style={{ backgroundColor: 'rgb(222, 227, 224)' }} className=" p-4  flex items-start">
      <label className="inline-flex items-start">
        <input
          type="checkbox"
          className="form-checkbox mr-2"
          name="SpAdmin"
          checked={formData.SpAdmin}
          onChange={handleChange}
        />
        <span>Service Provider Admin</span>
      </label>
    </div>
  </div>
  <div className="w-1/2 px-2 mb-4">
    <div style={{ backgroundColor: 'rgb(222, 227, 224)' }} className=" p-4  flex items-start">
      <label className="inline-flex items-start">
        <input
          type="checkbox"
          className="form-checkbox mr-2"
          name="TopAdmin"
          checked={formData.TopAdmin}
          onChange={handleChange}
        />
        <span>Top Admin</span>
      </label>
    </div>
  </div>
</div>

  <div className="mt-4 flex justify-end space-x-2">
  <button
    type="button"
    style={{
      backgroundColor: 'rgb(189, 189, 189)', // Grey color
      color: '#fff', // White text color
      padding: '8px 16px', // Padding
      border: 'none', // No border
      borderRadius: '4px', // Rounded corners
      cursor: 'pointer', // Pointer cursor
    }}
    className="btn" 
    onClick={() => {
      console.log('Cancel button clicked');
    }}
  >
    Cancel
  </button>
  <button
    type="submit"
    className="btn btn-primary"
    disabled={isLoading}
  >
    {isLoading ? (
      <Loader className="animate-spin mr-2" />
    ) : null}
   submit
  </button>
</div>

          </form>
        </div>
      </div>
    </div>
  );
};

export default EditUserForm;
