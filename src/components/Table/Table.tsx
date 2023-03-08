import React, { ReactNode } from "react";

type TableProps = {
  children: ReactNode;
};

export const Table: React.FC<TableProps> = ({ children }) => {
  return (
    <div className="tw-table tw-w-full tw-rounded-lg tw-overflow-hidden tw-border-gray-light tw-border tw-border-solid tw-bg-gray-subtle tw-pb-8">
      {children}
    </div>
  );
};

export const TableHead: React.FC<TableProps> = ({ children }) => {
  return <div className="tw-table-header-group">{children}</div>;
};

export const TableHeadCell: React.FC<TableProps> = ({ children }) => {
  return (
    <div className="tw-table-cell tw-bg-gray-subtle tw-text-gray-medium tw-p-4 tw-font-medium">
      {children}
    </div>
  );
};

export const TableBody: React.FC<TableProps> = ({ children }) => {
  return <div className="tw-table-row-group tw-shadow-sm">{children}</div>;
};

export const TableRow: React.FC<TableProps> = ({ children }) => {
  return <div className="tw-table-row">{children}</div>;
};

export const TableCell: React.FC<TableProps> = ({ children }) => {
  return (
    <div className="tw-table-cell tw-bg-white tw-p-4 tw-border-solid tw-border-x-0 tw-border-t-0 tw-border-b tw-border-gray-light">
      {children}
    </div>
  );
};
