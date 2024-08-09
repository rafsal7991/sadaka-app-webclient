import React, { useState } from "react";
import { Loader } from "lucide-react";
import { Link } from "react-router-dom";
import Textinput from "@/components/ui/Textinput";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { CustomerController } from "../controller/CustomerController";

const schema = yup
  .object({
    //customNm: yup.string().required("Customer is Required"),
    /*customEmail: yup
      .string()
      .required("Customer Description is Required"),*/
  })
  .required();

const AddCustomer = () => {
  const user = useSelector((e) => e.user);
  const [isLoading, setisLoading] = useState(false);
  const [CustomerAndDescription, setCustomerAndDescription] = useState({
        customNm: "",
        customId: "",
        customEmail: "",
        customAdd: "",
        customPhn: "",
        customPhn1: "",
        faxNumber: "",
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
    const CustomerResponse = await CustomerController.savingCustomerSetupRequest(
      user.userInfo.UsrResp.UsrDtl,
      user.accessToken.access_token,
      data
    );
    if (CustomerResponse.status == 200) {
      toast.success("successfully added", { autoClose: 4000 });
      window.location.reload();
    }
    if (CustomerResponse.status == 400) {
      toast.error(CustomerResponse.message.SetupInfResp.StsDesc, {
        autoClose: 4000,
      });
    }
    if (CustomerResponse.status == 401) {
      dispatch(logout());
    }
    if (CustomerResponse.status == 404) {
      toast.error("Not found", { autoClose: 4000 });
    }
    if (CustomerResponse.status == 500) {
      toast.error(
        "Failure to process Request at this Time,Please try again later",
        { autoClose: 4000 }
      );
    }
    setisLoading(false);
  };

  const handleChangeCustomerAndDescription = (event) => {
    const { name, value } = event.target;
    setCustomerAndDescription((prevFormData) => ({
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
                to="/settings/customers"
                className="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white"
              >
                Customer List
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
                Add Customer
              </span>
            </div>
          </li>
        </ol>
      </nav>

      <h4 className="card-title">Create Customer</h4>
      <div className="mb-4 text-sm text-red-500">
        <strong>Fields marked with * are mandatory</strong>
      </div>
      <div className="content">
        <div className="card p-3">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 ">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="form-group">
                <label>
                Customer Name <span className="text-red-500"></span>
                </label>
                <Textinput
                  type="text"
                  name="customNm"
                  register={register}
                  error={errors.customNm}
                  //  onChange={handleChangeCustomerAndDescriprion}
                />
              </div>
              <div className="form-group">
                <label>
                  Customer Id<span className="text-red-500"></span>
                </label>
                <Textinput
                  type="text"
                  name="customId"
                  register={register}
                  error={errors.customId}
                  //  onChange={handleChangeCustomerAndDescriprion}
                />
              </div>
              <div className="form-group">
                <label>
                  Customer Email<span className="text-red-500"></span>
                </label>
                <Textinput
                  type="text"
                  name="customEmail"
                  register={register}
                  error={errors.customEmail}
                />
              </div>
              <div className="form-group">
                <label>
                  Customer Address <span className="text-red-500"></span>
                </label>
                <Textinput
                  type="text"
                  name="customAdd"
                  register={register}
                  error={errors.customAdd}
                />
              </div>
              <div className="form-group">
                <label>
                  Customer Phone Number <span className="text-red-500"></span>
                </label>
                <Textinput
                  type="text"
                  name="customPhn"
                  register={register}
                  error={errors.customPhn}
                />
              </div>
              <div className="form-group">
                <label>
                  Customer Phone number1 <span className="text-red-500"></span>
                </label>
                <Textinput
                  type="text"
                  name="customPhn1"
                  register={register}
                  error={errors.customPhn1}
                />
              </div>
              
              <div className="form-group">
                <label>
                  Fax Number <span className="text-red-500"></span>
                </label>
                <Textinput
                  type="text"
                  name="faxNumber"
                  register={register}
                  error={errors.faxNumber}
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

export default AddCustomer;
