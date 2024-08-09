import React, { useState } from "react";
import { Loader } from "lucide-react";
import { Select, MenuItem, FormControl, TextField } from "@mui/material";
import Textinput from "@/components/ui/Textinput";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { GlobalMethod } from "../../../helpers/apiHelper";
import { PlusCircle } from "lucide-react";
import { useNavigate, Link } from "react-router-dom";

const schema = yup.object({
  // Define your validation schema here
}).required();

const AddSale = () => {
  const user = useSelector((e) => e.user);
  const navigate=useNavigate();
  const permission = user.userInfo.UsrResp.UsrDtl.PermDtl;
  const [isLoading, setisLoading] = useState(false);
  const [DeviceAndDescription, setDeviceAndDescription] = useState({
    SubSpRefNum: "",
    DevCode: "",
    DevMdlCode: "",
    DevId: "",
    SlLmt: "",
  });

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

  const onSubmit = async (data) => {
    // Handle form submission
  };

  const handleChangeDeviceAndDescription = (event) => {
    const { name, value } = event.target;
    setDeviceAndDescription((prevFormData) => ({
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
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <Link
                to="/transactionManagement/sales"
                className="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white"
              >
                Sales List
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
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <span className="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">
                Add New Sale
              </span>
            </div>
          </li>
        </ol>
      </nav>

      <h4 className="card-title"> Add New Sale</h4>
      <p className="" style={{ fontSize: '12px' }}>Add New Sale</p>

      <div className="mb-4 text-sm text-red-500">
        <strong>Fields marked with * are mandatory</strong>
      </div>
      <div className="content">
        <div className="card p-3">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex space-x-4">
              <div className="form-group">
                <div className="horizontal-line">
                  <div className="form-group mb-4">
                    <label>Customer</label>
                    <FormControl sx={{ minWidth: 450 }} fullWidth>
                      <Select
                        labelId="supplier-label"
                        name="Supplier"
                        value={"select..."}
                      >
                      </Select>
                    </FormControl>
                  </div>
                  {GlobalMethod.hasAnyPermission(
                    ["MANAGE_SUPPLIER", "CREATE_SUPPLIER"],
                    GlobalMethod.getUserPermissionName(permission)
                  ) && (
                    <div className="flex space-x-2">
                      <button
                      className="text-blue-500 bg-white btn  focus:text-red-500  dark:bg-zink-700 dark:hover:bg-red-500/10"
                        onClick={() => {navigate('/settings/addCustomer')}}
                      >
                        <PlusCircle size={15}/> 
                      </button>
                    </div>
                  )}
                  <div className="form-container" style={{ display: 'flex', gap: '20px' }}>
  <div className="form-group">
    <label>Transaction Status</label>
    <FormControl sx={{ minWidth: 200 }} fullWidth>
      <Select
        labelId="payment-type-label"
        name="PaymentType"
        value={"select..."}
      >
      </Select>
    </FormControl>
  </div>
  <div className="form-group">
    <label>Transaction Type</label>
    <FormControl sx={{ minWidth: 200 }} fullWidth>
      <Select
        labelId="purchase-type-label"
        name="PurchaseType"
        value={"select..."}
      >
      </Select>
    </FormControl>
  </div>
</div>

                </div>

          
                  <div className="form-group mb-4">
                    <label>Payment Type</label>
                    <FormControl sx={{ minWidth: 850 }} fullWidth>
                    <Textinput
                  type="text"
                  name="customNm"
                  register={register}
                  
                  //  onChange={handleChangeCustomerAndDescriprion}
                />
                  </FormControl>

                  </div>

                  <div className="form-group mb-4">
                    <label>Product Name </label>
                    <FormControl sx={{ minWidth: 250 }} fullWidth>
                    <Textinput
                  type="text"
                  name="customNm"
                  register={register}
                  
                  //  onChange={handleChangeCustomerAndDescriprion}
                />
                  </FormControl>

                  </div>
                
              </div>
            </div>
            </div>
            <table className="min-w-full bg-white border border-gray-200">
  <thead className="bg-gray-100 text-gray-600 text-sm leading-normal">
    <tr>
      <th className="py-3 px-6 text-left">#</th>
      <th className="py-3 px-6 text-left">Product Name</th>
      <th className="py-3 px-6 text-left">Quantity</th>
      <th className="py-3 px-6 text-left">Price per item</th>
      <th className="py-3 px-6 text-left">Total Price</th>
      <th className="py-3 px-6 text-left">Tax</th>
      <th className="py-3 px-6 text-left">Discount</th>
      <th className="py-3 px-6 text-left">Sub Total</th>
      <th className="py-3 px-6 text-left">Action</th>
    </tr>
  </thead>
  <tbody className="text-gray-600 text-sm font-light">
    {/* Example row */}
    <tr className="border-b border-gray-200 hover:bg-gray-100">
      <td className="py-3 px-6 text-left"></td>
      <td className="py-3 px-6 text-left">Total Tax
      </td>
      <td className="py-3 px-6 text-left"></td>
      <td className="py-3 px-6 text-left"></td>
      <td className="py-3 px-6 text-left"></td>
      <td className="py-3 px-6 text-left"></td>
      <td className="py-3 px-6 text-left"></td>
      <td className="py-3 px-6 text-left">
      $18.00
      </td>
    </tr>
  </tbody>
</table>

            <style jsx>{`
              .horizontal-line {
                display: flex;
                justify-content: space-between;
              }
              .form-group {
                margin-bottom: 16px;
              }
            `}</style>


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
        {/* /Device */}
      </div>
     
    
      </div>
    
  );
};

export default AddSale;
