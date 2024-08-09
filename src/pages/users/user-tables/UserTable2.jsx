import React, { useState, useMemo } from "react";
import Switch from "@/components/ui/Switch";
import Icon from "@/components/ui/Icon";
import {
  useTable,
  useRowSelect,
  useSortBy,
  useGlobalFilter,
  usePagination,
} from "react-table";
import GlobalFilter from "./GlobalFilter";
import AddUserForm from "./AddUserForm"; // Import the AddUserForm component
import { UserTable as initialUserTable } from "../../../mocks/table-data"; // Ensure the correct path to your data

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

const UserTable2 = () => {
  const COLUMNS = [
    {
      Header: "#",
      accessor: "id",
      Cell: (row) => {
        return <span>{row?.cell?.value}</span>;
      },
    },
    {
      Header: "Full Names",
      accessor: "user.name",
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
      accessor: "username",
      Cell: (row) => {
        return <span>{row?.cell?.value}</span>;
      },
    },
    {
      Header: "Phone",
      accessor: "phone",
      Cell: (row) => {
        return <span>{row?.cell?.value}</span>;
      },
    },
    {
      Header: "Role",
      accessor: "role",
      Cell: (row) => {
        return <span>{row?.cell?.value}</span>;
      },
    },
    {
      Header: "Status",
      accessor: "status",
      Cell: (row) => {
        const [checked, setChecked] = useState(row?.cell?.value === "active");

        const handleCheckboxChange = () => {
          const updatedData = [...UserTable];
          updatedData[row.cell.row.index].status = checked ? "inactive" : "active";
          setChecked(!checked);
        };

        return (
          <span>
            <Switch value={checked} onChange={handleCheckboxChange} />
          </span>
        );
      },
    },
    {
      Header: "Action",
      accessor: "action",
      Cell: (row) => {
        return (
          <div className="flex space-x-2 rtl:space-x-reverse justify-center">
            <button className="btn btn-primary" type="button">
              View
            </button>
            <button className="btn btn-secondary" type="button">
              Edit
            </button>
          </div>
        );
      },
    },
  ];

  const [showAddUserForm, setShowAddUserForm] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [UserTable, setUserTable] = useState(initialUserTable);

  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => UserTable, [UserTable]);

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

  const openAddUserForm = () => {
    setShowAddUserForm(true);
  };

  const closeAddUserForm = () => {
    setShowAddUserForm(false);
  };

  const addUser = (newUser) => {
    // Simulate adding user to the table
    const updatedUserTable = [
      ...UserTable,
      {
        id: UserTable.length + 1,
        user: {
          name: newUser.fullName, // Assuming you pass fullName in newUser
        },
        username: newUser.username,
        phone: newUser.phone,
        role: newUser.role,
        status: "active", // Default status assuming newUser doesn't include status
        action: "", // Add action if necessary
      },
    ];
    setUserTable(updatedUserTable);
    setShowAddUserForm(false); // Close the form after adding user
    setShowSuccessMessage(true); // Show success message
    setTimeout(() => {
      setShowSuccessMessage(false); // Hide success message after 3 seconds
    }, 3000); // 3000 milliseconds = 3 seconds
  };

  const returnToUserTable = () => {
    setShowAddUserForm(false); // Close the form if open
    // Additional logic if needed
  };

  return (
    <>
      {!showAddUserForm && (
        <div>
          <div className="md:flex justify-between items-center mb-6">
            <h4 className="card-title">Users List</h4>
            <button className="btn btn-primary" onClick={openAddUserForm}>
              Add User
            </button>
          </div>
          <h7 className="mb-4">A list of all users</h7>
          <div className="card">
            <div className="mb-4 flex items-center justify-between">
              <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
              <div className="space-x-2 flex items-center">
                <Icon icon="fa-solid:file-pdf" className="text-gray-400" />
                <Icon icon="heroicons-outline:view-grid" className="text-gray-400" />
                <Icon icon="feather:scan" className="text-gray-400" />
              </div>
            </div>
            <div className="overflow-x-auto rounded-t-lg">
              <div className="inline-block min-w-full align-middle">
                <div className="overflow-hidden">
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
                    <tbody className="bg-white divide-y divide-gray-100 dark:bg-gray-800 dark:divide-gray-700" {...getTableBodyProps()}>
                      {page.map((row) => {
                        prepareRow(row);
                        return (
                          <tr {...row.getRowProps()} className="hover:bg-gray-100 dark:hover:bg-gray-700 hover:bg-opacity-30">
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
      )}

      {showAddUserForm && (
        <AddUserForm addUser={addUser} returnToUserTable={returnToUserTable} />
      )}

      {showSuccessMessage && (
        <div className="mt-4 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
          <strong className="font-bold">Success!</strong>
          <span className="block sm:inline"> User added successfully.</span>
        </div>
      )}
    </>
  );
};

export default UserTable2;
