import React from 'react';
import Card from "@/components/ui/Card";
import { Ticket, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
const ViewSale= () => {
    const location = useLocation();
  const saleDetail = location.state.row;
  console.log("sale",saleDetail);


  return (
    <div className="container mx-auto p-4">
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
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 9 4-4-4-4"
                  />
                </svg>
                <span className="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">
                Sales Details
                </span>
              </div>
            </li>
          </ol>
        </nav>

        <h4 className="card-title mb-3"> Details</h4>
        {/* <div className="mb-4 text-sm text-red-500">
          <strong>Fields marked with * are mandatory</strong>
        </div> */}
      {/* <h1 className="text-xl font-semibold mb-2">View Role</h1>
      <h2 className="text-md text-gray-600 mb-4">General Information</h2> */}
      <Card title="" noborder>
        <table className="min-w-full dark:divide-gray-700">
          <tbody className='bg-white divide-y divide-gray-100 dark:bg-gray-800 dark:divide-gray-700'>
            <tr>
              <td className="border px-4 py-2 font-semibold ">Invoice No</td>
              <td className="border px-4 py-2">{saleDetail.ZNum}</td>
            </tr>
            <tr>
              <td className="border px-4 py-2 font-semibold ">Original Invoice</td>
              <td className="border px-4 py-2">{saleDetail.ZNum}</td>
            </tr>
            <tr>
              <td className="border px-4 py-2 font-semibold ">Invoice Type</td>
              <td className="border px-4 py-2">{saleDetail.ZNum}</td>
            </tr>
            <tr>
              <td className="border px-4 py-2 font-semibold ">Currency</td>
              <td className="border px-4 py-2">{saleDetail.Ccy}</td>
            </tr>
            <tr>
              <td className="border px-4 py-2 font-semibold ">Billed Amount</td>
              <td className="border px-4 py-2">{saleDetail.BillAmt}</td>
            </tr>
            <tr>
              <td className="border px-4 py-2 font-semibold ">Billed Tax Amount</td>
              <td className="border px-4 py-2">{saleDetail.BillEqvAmt}</td>
            </tr>
            <tr>
              <td className="border px-4 py-2 font-semibold ">Exclusive Billed Amount</td>
              <td className="border px-4 py-2">{saleDetail.BillEqvAmt}</td>
            </tr>
            <tr>
              <td className="border px-4 py-2 font-semibold ">Discount Amount</td>
              <td className="border px-4 py-2">{saleDetail.SlDiscAmt}</td>
            </tr>
            <tr>
              <td className="border px-4 py-2 font-semibold ">Cancel Reason</td>
              <td className="border px-4 py-2">{saleDetail.SlCanclRsn}</td>
            </tr>
            <tr>
              <td className="border px-4 py-2 font-semibold ">Added By</td>
              <td className="border px-4 py-2">{saleDetail.SlGenBy}</td>
            </tr>
            <tr>
              <td className="border px-4 py-2 font-semibold ">Added On</td>
              <td className="border px-4 py-2">{saleDetail.GenDt}</td>
            </tr>
            <tr>
              <td className="border px-4 py-2 font-semibold ">Approved By</td>
              <td className="border px-4 py-2">{saleDetail.SlApvdBy}</td>
            </tr>
            <tr>
              <td className="border px-4 py-2 font-semibold ">Approved On</td>
              <td className="border px-4 py-2">{saleDetail.SlApvdDt}</td>
            </tr>
            <tr>
              <td className="border px-4 py-2 font-semibold ">Status</td>
              <td className="border px-4 py-2"><span className="bg-green-600 flex items-center gap-1 w-20 px-1 rounded-md"><CheckCircle size={15}></CheckCircle>Active</span></td>
            </tr>
          </tbody>
        </table>
      </Card>
    </div>
  );
}

export default ViewSale;

