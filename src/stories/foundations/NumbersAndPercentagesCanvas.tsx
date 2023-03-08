import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from "../../components/Table/Table";

const NumbersAndPercentagesCanvas = () => {
  return (
    <div className="tw-font-sans tw-text-gray-darkest">
      <h2 className="reset tw-font-extrabold tw-text-3xl tw-mt-4 tw-tracking-wide">
        Numbers &amp; Percentages
      </h2>
      <hr className="reset tw-mb-8 tw-mt-4" />
      <p>When presenting numbers, use the following formatting:</p>

      <Table>
        <TableHead>
          <TableRow>
            <TableHeadCell>Scenario</TableHeadCell>
            <TableHeadCell>Rules</TableHeadCell>
            <TableHeadCell>Example</TableHeadCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>Number</TableCell>
            <TableCell>
              <ul>
                <li>Always use the comma seperator for thousands</li>
                <li>
                  Avoid using decimals unless that data specificity is necessary
                  to convey the message
                </li>
              </ul>
            </TableCell>
            <TableCell>
              100
              <br />
              1,000
              <br />
              1,234,567
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Percent</TableCell>
            <TableCell>
              <ul>
                <li>
                  Percent should be between 1-100. Avoid using percentages above
                  100.
                </li>
                <li>Always display the % sign</li>
                <li>
                  Avoid using decimals unless that data specificity is necessary
                  to convey the message.
                </li>
              </ul>
            </TableCell>
            <TableCell>
              5%
              <br />
              10%
              <br />
              95%
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Currency</TableCell>
            <TableCell>
              <ul>
                <li>
                  Always use the $ sign to indicate currency. Never spell out
                  the word “dollar”.
                </li>
                <li>
                  If the price ends in .00, avoid displaying the decimal values.{" "}
                </li>
              </ul>
            </TableCell>
            <TableCell>
              $5.95
              <br />
              $10 (not $10.00)
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default NumbersAndPercentagesCanvas;
