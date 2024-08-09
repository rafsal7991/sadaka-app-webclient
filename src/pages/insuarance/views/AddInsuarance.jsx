import React, { useState } from "react";
import { Loader } from "lucide-react";
import { Link } from "react-router-dom";
import Textinput from "@/components/ui/Textinput";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";

const schema = yup
  .object({
    InsuaranceCode: yup.string().required("Insuarance is Required"),
    InsuaranceDescription: yup
      .string()
      .required("Insuarance Description is Required"),
  })
  .required();

const AddInsuarance = () => {
  const user = useSelector((e) => e.user);
  const [isLoading, setisLoading] = useState(false);
  const [InsuaranceAndDescription, setInsuaranceAndDescription] = useState({
    InsuaranceCode: "",
    InsuaranceDescription: "",
  });

  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
    //
    mode: "all",
  });

  const onSubmit = async (data) => {
    setisLoading(true);
    // const InsuaranceResponse = await InsuaranceController.saveInsuarance(
    //   user.userInfo.UsrResp.UsrDtl,
    //   user.accessToken.access_token,
    //   data
    // );
    // if (InsuaranceResponse.status == 200) {
    //   toast.success("successfully added", { autoClose: 4000 });
    //   window.location.reload();
    // }
    // if (InsuaranceResponse.status == 400) {
    //   toast.error(InsuaranceResponse.message.SetupInfResp.StsDesc, {
    //     autoClose: 4000,
    //   });
    // }
    // if (InsuaranceResponse.status == 401) {
    //   dispatch(logout());
    // }
    // if (InsuaranceResponse.status == 404) {
    //   toast.error("Not found", { autoClose: 4000 });
    // }
    // if (InsuaranceResponse.status == 500) {
    //   toast.error(
    //     "Failure to process Request at this Time,Please try again later",
    //     { autoClose: 4000 }
    //   );
    // }
    // setisLoading(false);
  };

  const handleChangeInsuaranceAndDescription = (event) => {
    const { name, value } = event.target;
    setInsuaranceAndDescription((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
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
                to="/userManagement/Insuarance"
                className="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white"
              >
                Insuarance List
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
                Add Insuarance
              </span>
            </div>
          </li>
        </ol>
      </nav>

      <h4 className="card-title">Create Insuarance</h4>
      <div className="mb-4 text-sm text-red-500">
        <strong>Fields marked with * are mandatory</strong>
      </div>
      <div className="content">
        {/* <div className="page-header">
          <div className="page-title">
            <h4>Create Insuarance</h4>
            <h6>Manage Insuarance</h6>
          </div>
        </div> */}
        {/* /product list */}
        <div className="card p-3">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 ">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="form-group">
                <label>
                  Insuarance Code <span className="text-red-500">*</span>
                </label>
                <Textinput
                  placeholder="Admin"
                  id="bs_01"
                  type="text"
                  name="InsuaranceCode"
                  register={register}
                  error={errors.InsuaranceCode}
                  //  onChange={handleChangeInsuaranceAndDescriprion}
                />
              </div>
              <div className="form-group">
                <label>
                  Insuarance Description <span className="text-red-500">*</span>
                </label>
                <Textinput
                  placeholder="Admin"
                  id="bs_01"
                  type="text"
                  name="InsuaranceDescription"
                  register={register}
                  error={errors.InsuaranceDescription}
                  // onChange={handleChangeInsuaranceAndDescriprion}
                />
              </div>
            </div>

            <div className="flex justify-end gap-2 mt-4">
              <button
                type="reset"
                className="text-red-500 bg-white btn hover:text-red-500 hover:bg-red-100 focus:text-red-500 focus:bg-red-100 active:text-red-500 active:bg-red-100 dark:bg-zink-700 dark:hover:bg-red-500/10 dark:focus:bg-red-500/10 dark:active:bg-red-500/10"
              >
                Cancel
              </button>
              <div className="col-span-3 flex justify-end">
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={isLoading}
                >
                  {isLoading ? <Loader className="animate-spin" /> : "Submit"}
                </button>
              </div>
            </div>
          </form>
        </div>
        {/* /product list */}
      </div>
    </div>
  );
};

export default AddInsuarance;
