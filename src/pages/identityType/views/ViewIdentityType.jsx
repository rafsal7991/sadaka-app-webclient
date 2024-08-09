import React from 'react';
import Card from "@/components/ui/Card";
import { Ticket, CheckCircle } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
const ViewIdentityType = () => {
  const location = useLocation();
  const viewIdentityType=location.state.row
  console.log(viewIdentityType);
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
                  to="/settings/identities"
                  className="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white"
                >
                    Identities List
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
                Identity
                </span>
              </div>
            </li>
          </ol>
        </nav>

        <h3 className="card-title mb-3">View Identity</h3>
        <h5 className="card-title mb-3">General Information</h5>
      <Card title="" noborder>
        <table className="min-w-full dark:divide-gray-700">
          <tbody className='bg-white divide-y divide-gray-100 dark:bg-gray-800 dark:divide-gray-700'>
            <tr>
              <td className="border px-4 py-2 font-semibold ">Identity Type</td>
              {/* <td className="border px-4 py-2">{ViewIdentityType.Cy}</td> */}
            </tr>
            <tr>
              <td className="border px-4 py-2 font-semibold ">Code</td>
              <td className="border px-4 py-2">{viewIdentityType.code}</td>
            </tr>
            <tr>
              <td className="border px-4 py-2 font-semibold ">Name</td>
              <td className="border px-4 py-2">{viewIdentityType.name}</td>
            </tr>
            
            <tr>
              <td className="border px-4 py-2 font-semibold ">Added By</td>
              <td className="border px-4 py-2">{viewIdentityType.GenBy}</td>
            </tr>
            <tr>
              <td className="border px-4 py-2 font-semibold ">Added On</td>
              <td className="border px-4 py-2">{viewIdentityType.GenDt}</td>
            </tr>
            <tr>
              <td className="border px-4 py-2 font-semibold ">Approved By</td>
              <td className="border px-4 py-2">{viewIdentityType.ApvdBy}</td>
            </tr>
            <tr>
              <td className="border px-4 py-2 font-semibold ">Approved On</td>
              <td className="border px-4 py-2">{viewIdentityType.ApvdDt}</td>
            </tr>
            <tr>
              <td className="border px-4 py-2 font-semibold ">Status</td>
              <td className="border px-4 py-2"><span className="bg-green-600 flex items-center gap-1 w-20 px-1 rounded-md"><CheckCircle size={15}></CheckCircle>{viewIdentityType.status}</span></td>
            </tr>
          </tbody>
        </table>
      </Card>
    </div>
  );
}

export default ViewIdentityType;



