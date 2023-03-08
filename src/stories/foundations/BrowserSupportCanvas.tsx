import React from "react";
import {
  Table,
  TableHead,
  TableRow,
  TableHeadCell,
  TableBody,
  TableCell,
} from "../../components/Table/Table";

const BrowserSupportCanvas = () => {
  return (
    <div className="tw-font-sans tw-text-gray-darkest">
      <h2 className="reset tw-font-extrabold tw-text-3xl tw-mt-4 tw-tracking-wide">
        Browser Support
      </h2>
      <hr className="reset tw-mb-8 tw-mt-4" />
      <Table>
        <TableHead>
          <TableRow>
            <TableHeadCell>Browser</TableHeadCell>
            <TableHeadCell>Version</TableHeadCell>
            <TableHeadCell>Priority</TableHeadCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>Safari</TableCell>
            <TableCell>14.0 and newer</TableCell>
            <TableCell>High Priority</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Chrome</TableCell>
            <TableCell>87 and newer</TableCell>
            <TableCell>High Priority</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Internet Explorer</TableCell>
            <TableCell>11.0</TableCell>
            <TableCell>Medium Priority</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Safari</TableCell>
            <TableCell>12.1.2, 13.0.5, 13.1, 13.1.1, 13.1.2</TableCell>
            <TableCell>Low Priority</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default BrowserSupportCanvas;
