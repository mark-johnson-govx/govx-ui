import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from "../../components/Table/Table";

const DatesAndTimesCanvas = () => {
  return (
    <div className="tw-font-sans tw-text-gray-darkest">
      <h2 className="reset tw-font-extrabold tw-text-3xl tw-mt-4 tw-tracking-wide">
        Dates &amp; Times
      </h2>
      <hr className="reset tw-mb-8 tw-mt-4" />
      <p>When presenting dates and times, use the following formatting:</p>

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
            <TableCell>Dates</TableCell>
            <TableCell>
              <ul className="tw-leading-normal">
                <li>
                  We do not have a standard date format for all of GovX,
                  however, the format should be consistent across a single page
                  element (ex: always use the same format when showing a list of
                  events on an affiliate page).
                </li>
                <li>
                  Only show the year if it is necessary to add clarity for the
                  user.
                </li>
              </ul>
            </TableCell>
            <TableCell>
              <div className="tw-leading-normal">
                April 26
                <br />
                Apr-26
                <br />
                4/26
              </div>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Time</TableCell>
            <TableCell>
              <ul className="tw-leading-normal">
                <li>
                  When presenting times for events, always should the time in
                  the timezone where the event is taking place. A Padres game at
                  Petco Park should always be shown in PT, regardless of the
                  timezone of the user’s IP address.
                </li>
                <li>
                  When not intuitive from the rest of the page content, indicate
                  the timezone being shown
                </li>
                <li>
                  Always indicate “am” or “pm” when showing a time.
                  <ul>
                    <li>“am” and “pm” should be lowercase</li>
                    <li>
                      There should be no space between the label and the time
                    </li>
                  </ul>
                </li>
                <li>
                  If the time is at the top of the hour (i.e. “:00”), you do not
                  need to show the minutes, unless doing so adds clarity for the
                  user.
                </li>
              </ul>
            </TableCell>
            <TableCell>
              <div className="tw-leading-normal tw-min-w-[8rem]">
                1:30pm PT
                <br />
                10am ET
              </div>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default DatesAndTimesCanvas;
