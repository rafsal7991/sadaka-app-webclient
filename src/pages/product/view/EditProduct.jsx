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

const EditProduct = () => {
  const user = useSelector((state) => state.user);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const product = location.state.row;

  const [itemAndData, setItemAndData] = useState({
    ItmBtchNum: product.ItmBtchNum,
    ItmCstAmt: product.ItmCstAmt,
    SftQty: product.SftQty,
    DfltQty: product.DfltQty,
    ItmAmt: product.ItmAmt,
    itemBarCode: "", // Add initial state for new fields
    itemQuantityDescription: "",
    itemQuantityCode: "",
    itemPackageCode: "",
    country: "",
    itemTypeCode: "",
    itemClassCode: "",
    itemTaxCode: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setItemAndData((prevState) => ({
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
            <div className="flex items-center">/
              <Link to="/stockManagement/items" className="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white">
                Items List
              </Link>
            </div>
          </li>
          <li aria-current="page">
            <div className="flex items-center">/
              <span className="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">Edit Item</span>
            </div>
          </li>
        </ol>
      </nav>

      <h4 className="card-title">Create Item</h4>
      <div className="mb-4 text-sm text-red-500">
        <strong>Fields marked with * are mandatory</strong>
      </div>
      <div className="content">
        <div className="card p-3">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* First Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="form-group">
                <label>Item Name <span className="text-red-500">*</span></label>
                <Textinput
                  id="itemCode"
                  type="text"
                  name="itemCode"
                  register={register}
                  error={errors.itemCode}
                />
              </div>
              <div className="form-group">
                <label>Item Standard Name <span className="text-red-500">*</span></label>
                <Textinput
                  id="itemDescription"
                  type="text"
                  name="itemDescription"
                  register={register}
                  error={errors.itemDescription}
                />
              </div>
            </div>

            {/* Second Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="form-group">
                <label>Item Batch Number <span className="text-red-500">*</span></label>
                <FormControl fullWidth>
                  <Textinput
                    id="ItmBtchNum"
                    type="text"
                    name="ItmBtchNum"
                    value={itemAndData.ItmBtchNum}
                    onChange={handleInputChange}
                    register={register}
                  />
                </FormControl>
              </div>
              <div className="form-group">
                <label>Item BarCode <span className="text-red-500">*</span></label>
                <FormControl fullWidth>
                  <Textinput
                    id="itemBarCode"
                    type="text"
                    name="itemBarCode"
                    value={itemAndData.itemBarCode}
                    onChange={handleInputChange}
                    register={register}
                  />
                </FormControl>
              </div>
            </div>

            {/* Third Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="form-group">
                <label>Sft Qty <span className="text-red-500">*</span></label>
                <FormControl fullWidth>
                  <Textinput
                    id="SftQty"
                    type="text"
                    name="SftQty"
                    value={itemAndData.SftQty}
                    onChange={handleInputChange}
                    register={register}
                  />
                </FormControl>
              </div>
              <div className="form-group">
                <label>Dflt Qty <span className="text-red-500">*</span></label>
                <FormControl fullWidth>
                  <Textinput
                    id="DfltQty"
                    type="text"
                    name="DfltQty"
                    value={itemAndData.DfltQty}
                    onChange={handleInputChange}
                    register={register}
                  />
                </FormControl>
              </div>
              <div className="form-group">
                <label>Item Amount <span className="text-red-500">*</span></label>
                <FormControl fullWidth>
                  <Textinput
                    id="ItmAmt"
                    type="number"
                    name="ItmAmt"
                    value={itemAndData.ItmAmt}
                    onChange={handleInputChange}
                    register={register}
                  />
                </FormControl>
              </div>
            </div>

            {/* Additional Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="form-group">
                <label>Item Quantity Description <span className="text-red-500">*</span></label>
                <FormControl fullWidth>
                  <Textinput
                    id="itemQuantityDescription"
                    type="text"
                    name="itemQuantityDescription"
                    value={itemAndData.itemQuantityDescription}
                    onChange={handleInputChange}
                    register={register}
                  />
                </FormControl>
              </div>
              <div className="form-group">
                <label>Item Quantity Code <span className="text-red-500">*</span></label>
                <FormControl fullWidth>
                  <Textinput
                    id="itemQuantityCode"
                    type="text"
                    name="itemQuantityCode"
                    value={itemAndData.itemQuantityCode}
                    onChange={handleInputChange}
                    register={register}
                  />
                </FormControl>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="form-group">
                <label>Item Package Code <span className="text-red-500">*</span></label>
                <FormControl fullWidth>
                  <Textinput
                    id="itemPackageCode"
                    type="text"
                    name="itemPackageCode"
                    value={itemAndData.itemPackageCode}
                    onChange={handleInputChange}
                    register={register}
                  />
                </FormControl>
              </div>
              <div className="form-group">
                <label>Country <span className="text-red-500">*</span></label>
                <FormControl fullWidth>
                  <Textinput
                    id="country"
                    type="text"
                    name="country"
                    value={itemAndData.country}
                    onChange={handleInputChange}
                    register={register}
                  />
                </FormControl>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="form-group">
                <label>Item Type Code <span className="text-red-500">*</span></label>
                <FormControl fullWidth>
                  <Textinput
                    id="itemTypeCode"
                    type="text"
                    name="itemTypeCode"
                    value={itemAndData.itemTypeCode}
                    onChange={handleInputChange}
                    register={register}
                  />
                </FormControl>
              </div>
              <div className="form-group">
                <label>Item Class Code <span className="text-red-500">*</span></label>
                <FormControl fullWidth>
                  <Textinput
                    id="itemClassCode"
                    type="text"
                    name="itemClassCode"
                    value={itemAndData.itemClassCode}
                    onChange={handleInputChange}
                    register={register}
                  />
                </FormControl>
              </div>
            </div>

            <div className="form-group">
              <label>Item Tax Code <span className="text-red-500">*</span></label>
              <FormControl fullWidth>
                <Textinput
                  id="itemTaxCode"
                  type="text"
                  name="itemTaxCode"
                  value={itemAndData.itemTaxCode}
                  onChange={handleInputChange}
                  register={register}
                />
              </FormControl>
            </div>

            <div className="flex flex-wrap justify-between">
              <div className="w-1/2 px-2 mb-4">
                <div className="bg-gray-200 p-4 flex items-start">
                  <label className="inline-flex items-start">
                    <input type="checkbox" className="form-checkbox mr-2" />
                    <span>Fixed Item Amount Flag</span>
                  </label>
                </div>
              </div>
              <div className="w-1/2 px-2 mb-4">
                <div className="bg-gray-200 p-4 flex items-start">
                  <label className="inline-flex items-start">
                    <input type="checkbox" className="form-checkbox mr-2" />
                    <span>Insurance Apply Flag</span>
                  </label>
                </div>
              </div>
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

export default EditProduct;
