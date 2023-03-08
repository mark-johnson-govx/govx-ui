import { Prism } from "@mantine/prism";
import React, { PropsWithChildren, ReactNode } from "react";
import { Table, TableBody, TableCell, TableHeadCell, TableRow } from "../../components/Table/Table";

const VisualLanguageCanvas = () => {
  return (
    <div className="tw-font-sans tw-text-gray-darkest">
      <h2 className="reset tw-font-extrabold tw-text-3xl tw-mt-4 tw-tracking-wide">
        Typography
      </h2>
      <hr className="reset tw-mb-8 tw-mt-4" />

      <Table>
        <TableBody>
          <TableRow>
            <TableHeadCell>Properties</TableHeadCell>
            <TableCell>
              <p className="tw-mx-4">
                <a href="http://govx.com">GovX.com</a>
                <br />
                <a href="http://auth.govx.com">Auth.govX.com</a>
              </p>
            </TableCell>
            <TableCell>
              <p className="tw-mx-4">
                <a href="http://partners.govx.com">Partners.govX.com</a>
                <br />
                <a href="http://storefront.govx.com">Storefront.govX.com</a>
              </p>
            </TableCell>
            <TableCell>
              <p className="tw-mx-4">
                <a href="http://shopvcs.com">ShopVCS.com</a>
              </p>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableHeadCell>Fonts</TableHeadCell>
            <TableCell>
              <ul>
                <li>Geomanist Regular</li>
                <li>Geomanist Medium</li>
              </ul>
            </TableCell>
            <TableCell>
              <ul>
                <li>Roboto Regular</li>
              </ul>
            </TableCell>
            <TableCell>
              <ul>
                <li>Arial</li>
              </ul>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableHeadCell>Headers</TableHeadCell>
            <TableCell>
            <CodeBlock>{`font-family: geomanist-medium, Helvetica, sans-serif;
font-weight: 400;`}</CodeBlock>
            </TableCell>
            <TableCell>
            <CodeBlock>{`font-family: Roboto Regular,Helvetica,sans-serif;
font-weight: 600;`}</CodeBlock>
            </TableCell>
            <TableCell>
            <CodeBlock>{`font-family: Arial, Helvetica, sans-serif;
font-weight: 700;`}</CodeBlock>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableHeadCell>Paragraphs</TableHeadCell>
            <TableCell>
            <CodeBlock>
                {`font-family: geomanist-regular, Helvetica, sans-serif;
font-weight: 400;`}
              </CodeBlock>
            </TableCell>
            <TableCell>
              <CodeBlock>
                {`font-family: Roboto Regular,Helvetica,sans-serif;
font-weight: 400;`}
              </CodeBlock>
            </TableCell>
            <TableCell>
              <CodeBlock>
                {`font-family: Arial, Helvetica, sans-serif;
font-weight: 400;`}
              </CodeBlock>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>

    </div>
  );
};

type CodeBlockProps = {
  children: string;
};
export const CodeBlock: React.FC<CodeBlockProps> = ({ children }) => {
  return (
    <Prism withLineNumbers language="tsx">
      {children}
    </Prism>
  );
};

export default VisualLanguageCanvas;
