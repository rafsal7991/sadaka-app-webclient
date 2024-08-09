import React, { useState } from "react";
import { Loader } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { FormControl } from "@mui/material";
import Textinput from "@/components/ui/Textinput";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useSelector } from "react-redux";

const schema = yup.object({}).required();

const EditCustomer = () => {
  const user = useSelector((state) => state.user);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const customerDetails = location.state.row;
   console.log("customer",customerDetails);
   {
//     ApvdBy
// : 
// "neema.kilongo"
// ApvdDt
// : 
// "2024-07-25T15:17:40"
// CstphoneNumber
// : 
// ""
// CustomAddrs
// : 
// ""
// CustomEmail
// : 
// "michaelkilongoo193@gmail.com"
// CustomPhNum1
// : 
// "0693274908"
// CustomerpinNumber
// : 
// "P109272930A"
// GenBy
// : 
// "neema.kilongo"
// GenDt
// : 
// "2024-07-25T15:17:28.85792"
// IdTyp
// : 
// 1
// IdTypCode
// : 
// "1"
// SpRefNum
// : 
// "P700000002F"
// SubSpRefNum
// : 
// "02"
// customerName
// : 
// "MICHAEL KILONGO"
// sNo
// : 
// 1
// status
// : 
// undefined
   }

  const [customerData, setCustomerData] = useState({
    customerName: customerDetails.customerName,
    CustomEmail: customerDetails.CustomEmail,
    CustomerpinNumber: customerDetails.CustomerpinNumber,
    CustomAddrs: "",
    CustomPhNum1: customerDetails.CustomPhNum1,
    CstphoneNumber: "",
    IdTyp: ""




    // ItmBtchNum: customerDetails.ItmBtchNum,
    // ItmCstAmt: customerDetails.ItmCstAmt,
    // SftQty: customerDetails.SftQty,
    // DfltQty: customerDetails.DfltQty,
    // ItmAmt: customerDetails.ItmAmt,
    // itemBarCode: "", // Add initial state for new fields
    // itemQuantityDescription: "",
    // itemQuantityCode: "",
    // itemPackageCode: "",
    // country: "",
    // itemTypeCode: "",
    // itemClassCode: "",
    // itemTaxCode: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCustomerData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
    mode: "all",
  });

  const onSubmit = async (data) => {
    // Implement your submit logic here
  };

  return (
    <div className="page-wrapper">
      <nav className="flex mb-3" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
          <li className="inline-flex items-center">
            <Link to="/" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
              Home
            </Link>
          </li>
          <li>
            <div className="flex items-center">
              <Link to="/stockManagement/items" className="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white">
              Customer List
              </Link>
            </div>
          </li>
          <li aria-current="page">
            <div className="flex items-center">
              <span className="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">Edit Customer </span>
            </div>
          </li>
        </ol>
      </nav>

      <h4 className="card-title">Edit Customer Management</h4>
      <div className="mb-4 text-sm text-red-500">
        <strong>Fields marked with * are mandatory</strong>
      </div>
      <div className="content">
        <div className="card p-3">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Additional Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="form-group">
                <label>Customer Name <span className="text-red-500">*</span></label>
                <FormControl fullWidth>
                  <Textinput
                    id="customerName"
                    type="text"
                    name="customerName"
                    value={customerData.customerName}
                    onChange={handleInputChange}
                    register={register}
                  />
                </FormControl>
              </div>
              <div className="form-group">
                <label>Customer Id<span className="text-red-500">*</span></label>
                <FormControl fullWidth>
                  <Textinput
                    id="CustomerpinNumber"
                    type="text"
                    name="CustomerpinNumber"
                    value={customerData.CustomerpinNumber}
                    register={register}
                  />
                </FormControl>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="form-group">
                <label>Customer Email <span className="text-red-500">*</span></label>
                <FormControl fullWidth>
                  <Textinput
                    id="CustomEmail"
                    type="text"
                    name="CustomEmail"
                    value={customerData.CustomEmail}
                    onChange={handleInputChange}
                    register={register}
                  />
                </FormControl>
              </div>
              <div className="form-group">
                <label>Customer Address <span className="text-red-500">*</span></label>
                <FormControl fullWidth>
                  <Textinput
                    id="CustomAddrs"
                    type="text"
                    name="CustomAddrs"
                    value={customerData.CustomAddrs}
                    onChange={handleInputChange}
                    register={register}
                  />
                </FormControl>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="form-group">
                <label>Customer Phone Number<span className="text-red-500">*</span></label>
                <FormControl fullWidth>
                  <Textinput
                    id="CstphoneNumber"
                    type="text"
                    name="CstphoneNumber"
                    value={customerData.CstphoneNumber}
                    onChange={handleInputChange}
                    register={register}
                  />
                </FormControl>
              </div>
              <div className="form-group">
                <label>Customer Phone Number1 <span className="text-red-500">*</span></label>
                <FormControl fullWidth>
                  <Textinput
                    id="CustomPhNum1"
                    type="text"
                    name="CustomPhNum1"
                    value={customerData.CustomPhNum1}
                    onChange={handleInputChange}
                    register={register}
                  />
                </FormControl>
              </div>
            </div>

            <div className="form-group">
              <label>Fax Number <span className="text-red-500">*</span></label>
              <FormControl fullWidth>
                <Textinput
                  id="IdTyp"
                  type="text"
                  name="IdTyp"
                  value={customerData.IdTyp}
                  onChange={handleInputChange}
                  register={register}
                />
              </FormControl>
            </div>

            <div className="flex justify-end gap-2 mt-4">
              <button type="reset" className="text-red-500 bg-white btn">
                Cancel
              </button>
              <button type="submit" className="btn btn-primary" disabled={isLoading}>
                {isLoading ? <Loader className="animate-spin" /> : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditCustomer;
