import React, { useEffect, useState } from "react";
// import { getPermissionList, addGroup } from "slices/thunk";
import { useDispatch, useSelector } from "react-redux";
import {toast, ToastContainer} from "react-toastify";
import { Loader } from "lucide-react";
import { PermissionController } from "../../permisions/controller/PermissionController";
import { Link } from "react-router-dom";
import Textinput from "@/components/ui/Textinput";
import Select from "@/components/ui/Select";
import Checkbox from "@/components/ui/Checkbox";
import {logoutSuccess} from "@/store/slices/auth/userSlice.js";

const addRole = () => {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const user = useSelector((e) => e.user);
  const [isPermissionsLoading, setisPermissionsLoading] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [IsDataLoading, setIsDataLoading] = useState(false);
  const [groupName, setGroupName] = useState("");
  const [isAllChecked, setisAllChecked] = useState(false);
  const [newRoleData, setNewRoleData] = useState({
    role: "",
    description: "",
    roleCaategory: "",
  });

  async function pullPermissionFromServer() {
    const permissionResponseWrapper =
      await PermissionController.getPermissionByStatusCode(user.accessToken);
    console.log(permissionResponseWrapper);
    if (permissionResponseWrapper.error) {
      if (permissionResponseWrapper.status == 401) {
        toast.error("Session Timed out, Logout", { autoClose: 2000 });
        dispatch(logoutSuccess());
      }
      if (permissionResponseWrapper.status == 404) {
        setData([]);
      }
    } else {
      const permDtl = await permissionResponseWrapper.resultCurl.PermResp
        .PermDtl;

      setData(
        permDtl.map((e, index) => {
          return {
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
          };
        })
      );
    }
  }

  useEffect(() => {
    pullPermissionFromServer();
  }, []);

  const handleCheckboxChange = (index) => {
    const newData = [...data];
    newData[index].selected = !newData[index].selected;
    setData(newData);
  };

  useEffect(() => {
    const allSelected = data.length > 0 && data.every((pem) => pem?.selected);
    setisAllChecked(allSelected);
  }, [data]);

  const handleSelectAll = (checked) => {
    const newData = [...data];
    for (let i = 0; i < data.length; i++) {
      newData[i].selected = checked;
    }
    setData(newData);
  };

  const half = Math.ceil(data.length / 2);

  const handleSubmit = () => {
    setIsLoading(true);
    const serverData = {
      name: groupName,
      permissions: [],
    };
    data.map((pem) => {
      if (pem.selected) {
        serverData.permissions.push(pem.name);
      }
    });
    console.log(serverData);

    setIsLoading(false);
  };

  const options = [
    {
      value: "SP",
      label: "SERVICE PROVIDER",
    },
    {
      value: "RETAIL",
      label: "RETAIL",
    },
  ];

  return (
    <React.Fragment>
      <ToastContainer closeButton={false} limit={1} />
      <div className="">
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
                  to="/userManagement/roles"
                  className="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white"
                >
                  Roles List
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
                  Add role
                </span>
              </div>
            </li>
          </ol>
        </nav>

        <h4 className="card-title">Create Role</h4>
        <div className="mb-4 text-sm text-red-500">
          <strong>Fields marked with * are mandatory</strong>
        </div>
        <div className="">
          <div className="card p-3">
            <div className="card-body">
              <h6 className="mb-4 text-15"></h6>

              <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 ">
                <div className="">
                  <Textinput
                    placeholder="Admin"
                    id="bs_01"
                    type="text"
                    label="Role *"
                  />
                </div>
                <div className="">
                  <Textinput
                    placeholder="Admin"
                    id="bs_01"
                    type="text"
                    label="Role *"
                    required
                  />
                </div>
                <div className="">
                  <Select options={options} label="Category *" />
                </div>
              </div>

              <div className="my-2 mt-6">
                <Checkbox
                    label="Select All"
                    value={isAllChecked}
                    className="!rounded-full group-hover:border-green-500"
                    activeClass="border-green-500 bg-green-500"
                    onChange={(e) =>
                        handleSelectAll(
                            e.target.checked,
                        )
                    }
                />
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-12 gap-10 ">
                <div className="overflow-x-auto col-span-6">
                  <table className="w-full">
                    <thead className="ltr:text-left rtl:text-right">
                      <tr>
                        <th className="px-3.5 py-2.5 font-semibold border-b border-slate-200 dark:border-zink-500">
                          {/*<Checkbox*/}
                          {/*  label="Action"*/}
                          {/*  // value={checked7}*/}
                          {/*  className="!rounded-full group-hover:border-green-500"*/}
                          {/*  activeClass="border-green-500 bg-green-500"*/}
                          {/*  onChange={(e) =>*/}
                          {/*    handleSelectAll(e.target.checked, 0, half)*/}
                          {/*  }*/}
                          {/*/>*/}
                        </th>
                        <th className="px-3.5 py-2.5 font-semibold border-b border-slate-200 dark:border-zink-500">
                          Permission name
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.slice(0, half).map((item, index) => (
                        <tr key={index}>
                          <td className="px-3.5 py-2.5 border-y border-slate-200 dark:border-zink-500">
                            <Checkbox
                              label=""
                              activeClass="border-cyan-500 bg-cyan-500"
                              className=" group-hover:border-cyan-500"
                              value={item.selected}
                              onChange={() => handleCheckboxChange(index)}
                            />
                          </td>
                          <td className="px-3.5 py-2.5 border-y border-slate-200 dark:border-zink-500">
                            {" "}
                            {item.PermNm}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="overflow-x-auto col-span-6">
                  <table className="w-full">
                    <thead className="ltr:text-left rtl:text-right">
                      <tr>
                        <th className="px-3.5 py-2.5 font-semibold border-b border-slate-200 dark:border-zink-500 gap-4">

                        </th>
                        <th className="px-3.5 py-2.5 font-semibold border-b border-slate-200 dark:border-zink-500">
                          Permission name
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.slice(half, data.length).map((item, index) => (
                        <tr key={index + half}>
                          <td className="px-3.5 py-2.5 border-y border-slate-200 dark:border-zink-500">
                            <Checkbox
                                label=""
                                activeClass="border-cyan-500 bg-cyan-500"
                                className=" group-hover:border-cyan-500"
                                value={item.selected}
                              onChange={() =>
                                handleCheckboxChange(index + half)
                              }
                            />
                          </td>
                          <td className="px-3.5 py-2.5 border-y border-slate-200 dark:border-zink-500">
                            {" "}
                            {item.PermNm}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="flex justify-end gap-2 mt-4">
                <button
                  type="reset"
                  className="text-red-500 bg-white btn hover:text-red-500 hover:bg-red-100 focus:text-red-500 focus:bg-red-100 active:text-red-500 active:bg-red-100 dark:bg-zink-700 dark:hover:bg-red-500/10 dark:focus:bg-red-500/10 dark:active:bg-red-500/10"
                >
                  Reset
                </button>
                {isLoading ? (
                  <button className="text-white btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20">
                    <Loader /> Creating Role ....
                  </button>
                ) : (
                  <button
                    onClick={handleSubmit}
                    className="btn-primary p-3 rounded-lg "
                  >
                    Create Role
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default addRole;
