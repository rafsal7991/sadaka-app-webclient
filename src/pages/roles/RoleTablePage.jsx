import React, { useState, useMemo } from "react";
import { churchLeaders as initialData } from "../../mocks/churchLeaders";
import Switch from "@/components/ui/Switch";
import Icon from "@/components/ui/Icon";
import Dropdown from "@/components/ui/Dropdown";
import { Menu } from "@headlessui/react";
import clsx from "clsx";
import {
  useTable,
  useRowSelect,
  useSortBy,
  useGlobalFilter,
  usePagination,
} from "react-table";
import GlobalFilter from "../users/user-tables/GlobalFilter";

const IndeterminateCheckbox = React.forwardRef(
  ({ indeterminate, checked, onChange, ...rest }, ref) => {
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
          checked={checked}
          onChange={onChange}
          className="table-checkbox"
        />
      </>
    );
  }
);

const RoleTablePage = () => {
  const [data, setData] = useState(initialData); // Use state for data
  const [showForm, setShowForm] = useState(false);
  const [newRole, setNewRole] = useState({
    id: data.length + 1,
    title: "",
    description: "",
    isAssignableMultiple: false,
  });

  const handleSwitchChange = (id) => {
    const updatedData = data.map((item) =>
      item.id === id
        ? { ...item, isAssignableMultiple: !item.isAssignableMultiple }
        : item
    );
    setData(updatedData);
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setNewRole({
      ...newRole,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleAddRole = () => {
    setData([...data, newRole]);
    setNewRole({
      id: data.length + 2,
      title: "",
      description: "",
      isAssignableMultiple: false,
    });
    setShowForm(false);
  };

  const COLUMNS = [
    {
      Header: "#",
      accessor: "id",
      Cell: (row) => {
        return <span>{row?.cell?.value}</span>;
      },
    },
    {
      Header: "Title",
      accessor: "title",
      Cell: (row) => {
        return <span>{row?.cell?.value}</span>;
      },
    },
    {
      Header: "Description",
      accessor: "description",
      Cell: (row) => {
        return <span>{row?.cell?.value}</span>;
      },
    },
    {
      Header: "Is Assignable Multiple?",
      accessor: "isAssignableMultiple",
      Cell: (row) => {
        return (
          <span>
            <Switch
              value={row?.cell?.value}
              onChange={() => handleSwitchChange(row?.row?.original?.id)}
            />
          </span>
        );
      },
    },
    {
      Header: "Action",
      accessor: "action",
      Cell: (row) => {
        return (
          <div className="text-center">
            <Dropdown
              classMenuItems="right-0 w-[140px] top-[110%]"
              label={
                <span className="text-xl text-center h-7 w-7 inline-flex justify-center items-center bg-transparent hover:bg-gray-200 transition-all duration-200 rounded-full leading-none">
                  <Icon icon="heroicons-outline:dots-horizontal" />
                </span>
              }
            >
              <div className="divide-y divide-gray-100 dark:divide-gray-800">
                {actions.map((item, i) => (
                  <Menu.Item key={i}>
                    <div
                      className="hover:bg-[#13317d]ver:text-indigo-500 w-full border-b border-b-gray-400 border-opacity-10 px-4 py-2 text-sm last:mb-0 cursor-pointer first:rounded-t last:rounded-b flex space-x-2 items-center rtl:space-x-reverse"
                    >
                      <span className="text-base">
                        <Icon icon={item.icon} />
                      </span>
                      <span className="text-sm">{item.name}</span>
                    </div>
                  </Menu.Item>
                ))}
              </div>
            </Dropdown>
          </div>
        );
      },
    },
  ];

  const actions = [
    {
      name: "View",
      icon: "ph:eye",
    },
    {
      name: "Edit",
      icon: "ph:pencil-line",
    },
    {
      name: "Delete",
      icon: "ph:trash",
    },
  ];

  const columns = useMemo(() => COLUMNS, []);
  const tableData = useMemo(() => data, [data]);

  const tableInstance = useTable(
    {
      columns,
      data: tableData,
      initialState: {
        pageSize: 4,
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
    setPageSize,
    setGlobalFilter,
    prepareRow,
  } = tableInstance;

  const { globalFilter, pageIndex, pageSize } = state;

  return (
    <>
      <div className="md:flex justify-between items-center mb-6">
        <h4 className="card-title">Role Table</h4>
        <div className="flex space-x-2">
          <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
          <button
            className="btn btn-primary"
            onClick={() => setShowForm(!showForm)}
          >
            Add Role
          </button>
        </div>
      </div>

      {showForm && (
        <div className="card mb-6">
          <div className="p-4">
            <h5 className="card-title">Add New Role</h5>
            <form>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Title
                </label>
                <input
                  type="text"
                  name="title"
                  value={newRole.title}
                  onChange={handleInputChange}
                  className="mt-1 block w-full"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Description
                </label>
                <input
                  type="text"
                  name="description"
                  value={newRole.description}
                  onChange={handleInputChange}
                  className="mt-1 block w-full"
                />
              </div>
              <div className="mb-4">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="isAssignableMultiple"
                    checked={newRole.isAssignableMultiple}
                    onChange={handleInputChange}
                    className="mr-2"
                  />
                  Is Assignable Multiple?
                </label>
              </div>
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleAddRole}
              >
                Add Role
              </button>
            </form>
          </div>
        </div>
      )}

      <div className="card">
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
    </>
  );
};

export default RoleTablePage;
