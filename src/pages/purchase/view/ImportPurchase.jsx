import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import { logoutSuccess } from "@/store/slices/auth/userSlice.js";
import Textinput from "@/components/ui/Textinput";
import { Table, TableHead, TableBody, TableRow, TableCell } from "@/components/ui/Table";
import { PlusCircle } from "lucide-react";
import { PurchaseController } from "../controoler/PurchaseController";
import Modal from "./ImportPurchaseModel";// import the Modal component

const ImportPurchase = () => {
  const [data, setData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control the modal
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  async function pullPermissionFromServer() {
    const purchaseResponseWrapper = await PurchaseController.getPurchaseBySubSp(user.accessToken);
    if (purchaseResponseWrapper.error) {
      if (purchaseResponseWrapper.status === "401") {
        toast.error("Session Timed out, Logout", { autoClose: 2000 });
        dispatch(logoutSuccess());
      }
      if (purchaseResponseWrapper.status === 404) {
        setData([]);
      }
    } else {
      const permDtl = purchaseResponseWrapper.resultCurl.PermResp.PermDtl;
      console.log(permDtl)
      setData(
        permDtl.map((e, index) => ({
          sNo: index + 1,
          ApvdBy: e.ApvdBy,
          ApvdDt: e.ApvdDt,
          GenBy: e.GenBy,
          GenDt: e.GenDt,
          PermCatCode: e.PermCatCode,
          PermDesc: e.PermDesc,
          PermNm: e.PermNm,
          selected: false,
          StsCode: e.StsCode,
        }))
      );
    }
  }

  useEffect(() => {
    pullPermissionFromServer();
  }, []);

  const openModal = () => setIsModalOpen(true); // Function to open the modal
  const closeModal = () => setIsModalOpen(false); // Function to close the modal

  return (
    <React.Fragment>
      <ToastContainer closeButton={false} limit={1} />
      <div className="p-6 bg-white rounded shadow">
        <div className="flex justify-between items-center mb-4">
          <h4 className="text-xl font-semibold">Import Purchase List</h4>
          <div className="flex space-x-2">
          <button
            className="btn btn-primary flex gap-2"
            onClick={openModal}
          >
          <PlusCircle size={15}/>   Get Purchase
          </button>
        </div>
        </div>
        <div className="flex items-center mb-4">
          <div className="flex items-center border rounded p-2">
            <svg
              className="w-4 h-4 text-orange-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M11 5H5a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-6M10 14h1M21 7a2 2 0 01-2 2h-4l-5 5V7a2 2 0 012-2h5a2 2 0 012 2z"
              />
            </svg>
            <Textinput
              placeholder="Search..."
              className="ml-2"
              id="search"
              type="text"
            />
          </div>
        </div>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell>Declaration Date</TableCell>
              <TableCell>Supplier Name</TableCell>
              <TableCell>Product Name</TableCell>
              <TableCell>Item Quantity</TableCell>
              <TableCell>Invoice Currency Amount</TableCell>
              <TableCell>Invoice Currency Code</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item, index) => (
              <TableRow key={index}>
                <TableCell>{item.sNo}</TableCell>
                <TableCell>{item.ApvdDt}</TableCell>
                <TableCell>{item.ApvdBy}</TableCell>
                <TableCell>{item.PermNm}</TableCell>
                <TableCell>{item.GenDt}</TableCell>
                <TableCell>{item.PermCatCode}</TableCell>
                <TableCell>{item.InvoiceCurrencyCode}</TableCell>
                <TableCell>{item.StsCode}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div className="flex justify-between items-center mt-4">
          <select className="border rounded p-2">
            <option value="50">50 / page</option>
          </select>
          <span>1 to 1 of 1 items</span>
          <nav className="inline-flex items-center">
            <button className="p-2 border rounded">
              <svg
                className="w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M11 5H5a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-6M10 14h1M21 7a2 2 0 01-2 2h-4l-5 5V7a2 2 0 012-2h5a2 2 0 012 2z"
                />
              </svg>
            </button>
          </nav>
        </div>
      </div>
      <Modal isOpen={isModalOpen} closeModal={closeModal} />
    </React.Fragment>
  );
};

export default ImportPurchase;
