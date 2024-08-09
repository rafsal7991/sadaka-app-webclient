import React from "react";
import { Link } from "react-router-dom";
import { Filter, X, Search, FileText, FileSpreadsheet, Printer } from "lucide-react";

const Tabletop = ({  searchQuery, onChangeSearch }) => {
  return (
    <div className="flex justify-between items-center p-4 bg-gray-100 dark:bg-gray-700 shadow-md">
      <div className="flex items-center space-x-4">
        {/* <button
          className={`${
            inputfilter ? "bg-red-500" : "bg-blue-500"
          } text-white px-3 py-2 rounded-md flex items-center`}
          id="filter_search"
          onClick={() => togglefilter(!inputfilter)}
        >
          <Filter className="mr-2" />
          {inputfilter && <X />}
        </button> */}
        <div className="relative">
          <input
            className="form-control form-control-sm border border-gray-300 rounded-md pl-10 pr-4 py-2"
            type="text"
            value={searchQuery}
            onChange={onChangeSearch}
            placeholder="Search..."
          />
          <Link to="#" className="absolute top-1/2 left-3 transform -translate-y-1/2">
            <Search />
          </Link>
        </div>
      </div>
      <div className="flex space-x-4">
        <button className="p-2" data-tip="Pdf">
          <FileText />
        </button>
        <button className="p-2" data-tip="Excel">
          <FileSpreadsheet />
        </button>
        <button className="p-2" data-tip="Print">
          <Printer />
        </button>
      </div>
    </div>
  );
};

export default Tabletop;
