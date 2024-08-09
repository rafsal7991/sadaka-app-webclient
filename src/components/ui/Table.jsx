// Table.js

import React from 'react';

// Table Component
const Table = ({ children }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border">
        {children}
      </table>
    </div>
  );
};

// TableHead Component
const TableHead = ({ children }) => {
  return (
    <thead className="bg-gray-200">
      {children}
    </thead>
  );
};

// TableBody Component
const TableBody = ({ children }) => {
  return <tbody>{children}</tbody>;
};

// TableRow Component
const TableRow = ({ children }) => {
  return <tr>{children}</tr>;
};

// TableCell Component
const TableCell = ({ children, className }) => {
  return (
    <td className={`py-3 px-6 border ${className}`}>
      {children}
    </td>
  );
};

export { Table, TableHead, TableBody, TableRow, TableCell };
