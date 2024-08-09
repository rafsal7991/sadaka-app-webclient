import React, { useState, useMemo, useEffect } from "react";
import Switch from "@/components/ui/Switch";
import Icon from "@/components/ui/Icon";
import {
  useTable,
  useRowSelect,
  useSortBy,
  useGlobalFilter,
  usePagination,
} from "react-table";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { SpController } from "../controller/SpController";
import { FolderOpen, Edit, PlusCircle } from "lucide-react";
import Tabletop from "../../../components/ui/TableTop";
import SkeletionTable from "../../../components/skeleton/Table";
import { GlobalMethod } from "../../../helpers/apiHelper";

const IndeterminateCheckbox = React.forwardRef(
  ({ indeterminate, ...rest }, ref) => {
    const defaultRef = React.useRef();
    const resolvedRef = ref || defaultRef;

    React.useEffect(() => {
      resolvedRef.current.indeterminate = indeterminate;
    }, [resolvedRef, indeterminate]);

    return (
      <>
        <input
          type="checkbox"
          ref={resolvedRef}
          {...rest}
          className="table-checkbox"
        />
      </>
    );
  }
);

const   SpList = () => {
  const user = useSelector((e) => e.user);
  const permission = user.userInfo.UsrResp.UsrDtl.PermDtl;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const [isDataLoading, setIsDataLoading] = useState(false);

  React.useEffect(() => {
    getSpList();
    return () => {
    };
   }, []);

   async function getSpList(){
    setIsDataLoading(true)
    const result= await SpController.getAllSp(user.userInfo.UsrResp.UsrDtl,user.accessToken.access_token)
    console.log(result)
    if(result.error){
      if(result.status==401){
          dispatch(addAlert("Message", "success", "Session Time Out"));
          dispatch(logout());
       }
       if(result.status==404){
         setData([]);
       }
    }
    else{
      const spResponseWrapper=result.resultCurl;
      const spDtl= spResponseWrapper.SpResp.SpDtl.map((e,index)=>{
        return {
          sNo:index+1,
          ApvdBy: e.ApvdBy,
          ApvdDt: e.ApvdDt,
          Cty:e.Cty,
          Cy: e.Cy,
          GenBy: e.GenBy,
          GenDt: e.GenDt,
          LocDesc: e.LocDesc,
          SpDesc: e.SpDesc,
          SpName: e.SpNm,
          pinNumber: e.SpRefNum,
          TxOfcNm: e.TxOfcNm,
          status: e.StsCode==10001 ? "Active" :"Inactive",
        }
      })
      setData(spDtl);
    }
    setIsDataLoading(false);
   }


  const COLUMNS = [
    {
      Header: "#",
      accessor: "sNo",
      Cell: (row) => {
        return <span>{row?.cell?.value}</span>;
      },
    },
    {
      Header: "Full Names",
      accessor: "SpName",
      Cell: (row) => {
        return (
          <div className="flex items-center space-x-3 rtl:space-x-reverse">
            <span className="text-sm text-gray-600 dark:text-gray-300 capitalize">
              {row?.cell?.value}
            </span>
          </div>
        );
      },
    },
    {
      Header: "Username",
      accessor: "pinNumber",
      Cell: (row) => {
        return <span>{row?.cell?.value}</span>;
      },
    },
    {
      Header: "Phone",
      accessor: "SpDesc",
      Cell: (row) => {
        return <span>{row?.cell?.value}</span>;
      },
    },
    {
      Header: "Taxpayer",
      accessor: "LocDesc",
      Cell: (row) => {
        return <span>{row?.cell?.value}</span>;
      },
    },
    {
      Header: "Status",
      accessor: "status",
      Cell: (row) => {
        return (
          <span>
            {row?.cell?.value === "Active" ? (
              <span className="badges bg-lightgreen">Active</span>
            ) : (
              <span className="badges bg-lightgreen">Inactive</span>
            )}
          </span>
        );
      },
    },
    {
      Header: "Action",
      accessor: "action",
      Cell: (row) => {
        // console.log("records",row.cell.original)
        return (
            <div className="flex space-x-2 rtl:space-x-reverse justify-center">
           {GlobalMethod.hasAnyPermission(
        ["MANAGE_IDENTITY_TYPE", "VIEW_IDENTITY_TYPE"],
          GlobalMethod.getUserPermissionName(permission)
        ) && (
            <button className="btn btn-primary flex gap-2" type="button"
            onClick={() =>{ 
              navigate("/settings/viewSp" ,{
                  state: { row: row?.cell?.row?.original},
                })
              }}
            >
            <FolderOpen size={15}/>  View
            </button>
          )}

           {GlobalMethod.hasAnyPermission(
        ["MANAGE_IDENTITY_TYPE", "EDIT_IDENTITY_TYPE"],
          GlobalMethod.getUserPermissionName(permission)
        ) && (
            <button style={{ backgroundColor: '#E49B18' }} className="btn  flex gap-2" type="button"
            onClick={() =>{ 
              navigate("/settings/editDetail",{
                  state: { row: row?.cell?.row?.original},
                })
              }}
            >
            <FolderOpen size={15}/>  Edit
            </button>
          )}
          </div>
        );
      },
    },
  ];


  const columns = useMemo(() => COLUMNS, []);

  const tableInstance = useTable(
    {
      columns,
      data,
      initialState: {
        pageSize: 10,
      },
    },
    useGlobalFilter,
    useSortBy,
    usePagination,
    useRowSelect,
    (hooks) => {
      hooks.visibleColumns.push((columns) => [
        {
          id: "selection",
          Header: ({ getToggleAllRowsSelectedProps }) => (
            <div>
              <IndeterminateCheckbox {...getToggleAllRowsSelectedProps()} />
            </div>
          ),
          Cell: ({ row }) => (
            <div>
              <IndeterminateCheckbox {...row.getToggleRowSelectedProps()} />
            </div>
          ),
        },
        ...columns,
      ]);
    }
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    state,
    gotoPage,
    pageCount,
    setGlobalFilter,
    prepareRow,
  } = tableInstance;

  const { globalFilter, pageIndex, pageSize } = state;

  return (
    <>
      <div>
        <div className="">
         
          <nav class="flex" aria-label="Breadcrumb">
            <ol class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
              <li class="inline-flex items-center">
                <Link
                  to="#"
                  class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
                >
                  <svg
                    class="w-3 h-3 me-2.5"
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
           
              <li aria-current="page">
                <div class="flex items-center">
                  <svg
                    class="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
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
                  <span class="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">
                  Service Providers
                  </span>
                </div>
              </li>
            </ol>
          </nav>
        </div>
        <div className="md:flex justify-between items-center mt-6">
          <div className="flex flex-col">
          <h7 className="text-lg font-bold"> Service Providers List</h7>
          <h7 className="mb-4">A list of all Sps</h7>
          </div>
        
          <button
            className="btn btn-primary flex gap-2"
            onClick={() => {
              navigate("/settings/addSp");
            }}
          >
           <PlusCircle size={15}/>   Add Sp
          </button>
        </div>
        
        <div className="card">
          <Tabletop/>
          <div className="overflow-x-auto rounded-t-lg">
            <div className="inline-block min-w-full align-middle">
              <div className="overflow-hidden">
              {isDataLoading? <SkeletionTable items={null} count={5} /> :
              <table
              className="min-w-full divide-y divide-gray-100 table-fixed dark:divide-gray-700"
              {...getTableProps()}
            >
              <thead className="bg-gray-100 dark:bg-gray-700">
                {headerGroups.map((headerGroup) => (
                  <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map((column) => (
                      <th
                        {...column.getHeaderProps(
                          column.getSortByToggleProps()
                        )}
                        scope="col"
                        className="table-th last:text-center"
                      >
                        {column.render("Header")}
                        <span>
                          {column.isSorted
                            ? column.isSortedDesc
                              ? " 🔽"
                              : " 🔼"
                            : ""}
                        </span>
                      </th>
                    ))}
                  </tr>
                ))}
              </thead>
              <tbody
                className="bg-white divide-y divide-gray-100 dark:bg-gray-800 dark:divide-gray-700"
                {...getTableBodyProps()}
              >
                {page.map((row) => {
                  prepareRow(row);
                  return (
                    <tr
                      {...row.getRowProps()}
                      className="hover:bg-gray-100 dark:hover:bg-gray-700 hover:bg-opacity-30"
                    >
                      {row.cells.map((cell) => {
                        return (
                          <td {...cell.getCellProps()} className="table-td">
                            {cell.render("Cell")}
                          </td>
                        );
                      })}
                    </tr>
                  );
                })}
              </tbody>
            </table>
             }
              </div>
            </div>
          </div>
          <div className="md:flex md:space-y-0 space-y-5 justify-between mt-6 items-center px-5 pb-5">
            <div className="flex items-center space-x-3 rtl:space-x-reverse">
              <span className="flex space-x-2 rtl:space-x-reverse items-center">
                <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
                  Go
                </span>
                <span>
                  <input
                    type="number"
                    className="text-control py-2"
                    defaultValue={pageIndex + 1}
                    onChange={(e) => {
                      const pageNumber = e.target.value
                        ? Number(e.target.value) - 1
                        : 0;
                      gotoPage(pageNumber);
                    }}
                    style={{ width: "50px" }}
                  />
                </span>
              </span>
              <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
                Page{" "}
                <span>
                  {pageIndex + 1} of {pageOptions.length}
                </span>
              </span>
            </div>
            <ul className="flex items-center space-x-3 rtl:space-x-reverse">
              <li className="text-xl leading-4 text-gray-900 dark:text-white rtl:rotate-180">
                <button
                  className={`${
                    !canPreviousPage ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                  onClick={() => previousPage()}
                  disabled={!canPreviousPage}
                >
                  <Icon icon="heroicons-outline:chevron-left" />
                </button>
              </li>
              {pageOptions.map((page, pageIdx) => (
                <li key={pageIdx}>
                  <button
                    aria-current="page"
                    className={`${
                      pageIdx === pageIndex
                        ? "bg-[#13317d] text-white font-medium"
                        : "bg-gray-100 dark:bg-gray-700 dark:text-gray-400 text-gray-900 font-normal"
                    } text-sm rounded leading-[16px] flex h-6 w-6 items-center justify-center transition-all duration-150`}
                    onClick={() => gotoPage(pageIdx)}
                  >
                    {page + 1}
                  </button>
                </li>
              ))}
              <li className="text-xl leading-4 text-gray-900 dark:text-white rtl:rotate-180">
                <button
                  className={`${
                    !canNextPage ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                  onClick={() => nextPage()}
                  disabled={!canNextPage}
                >
                  <Icon icon="heroicons-outline:chevron-right" />
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default SpList;
