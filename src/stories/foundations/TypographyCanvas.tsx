import { Prism } from "@mantine/prism";
import React, { PropsWithChildren, ReactNode } from "react";

const VisualLanguageCanvas = () => {
  return (
    <div className="tw-font-sans tw-text-gray-darkest">
      <h2 className="reset tw-font-extrabold tw-text-3xl tw-mt-4 tw-tracking-wide">
        Typography
      </h2>
      <hr className="reset tw-mb-8 tw-mt-4" />
      <table className=" reset tw-max-w-full tw-border tw-border-1 tw-border-gray-medium">
        <tbody>
          <tr className="tw-w-full">
            <th className="tw-p-3 tw-font-bold tw-text-left tw-bg-gray-subtle">
              Properties
            </th>
            <td className="tw-w-1/3">
              <p className="tw-mx-4">
                <a href="http://govx.com">GovX.com</a>
                <br />
                <a href="http://auth.govx.com">Auth.govX.com</a>
              </p>
            </td>
            <td className="tw-w-1/3">
              <p className="tw-mx-4">
                <a href="http://partners.govx.com">Partners.govX.com</a>
                <br />
                <a href="http://storefront.govx.com">Storefront.govX.com</a>
              </p>
            </td>
            <td className="tw-w-1/3">
              <p className="tw-mx-4">
                <a href="http://shopvcs.com">ShopVCS.com</a>
              </p>
            </td>
          </tr>
          <tr>
            <th className="tw-p-3 tw-font-bold tw-text-left tw-bg-gray-subtle">
              Fonts
            </th>
            <td>
              <ul>
                <li>Geomanist Regular</li>
                <li>Geomanist Medium</li>
              </ul>
            </td>
            <td>
              <ul>
                <li>Roboto Regular</li>
              </ul>
            </td>
            <td>
              <ul>
                <li>Arial</li>
              </ul>
            </td>
          </tr>
          <tr>
            <th className="tw-p-3 tw-font-bold tw-text-left tw-bg-gray-subtle">
              Headers
            </th>
            <td>
              <CodeBlock>{`font-family: geomanist-medium, Helvetica, sans-serif;
font-weight: 400;`}</CodeBlock>
            </td>
            <td>
              <CodeBlock>{`font-family: Roboto Regular,Helvetica,sans-serif;
font-weight: 600;`}</CodeBlock>
            </td>
            <td>
              <CodeBlock>{`font-family: Arial, Helvetica, sans-serif;
font-weight: 700;`}</CodeBlock>
            </td>
          </tr>
          <tr>
            <th className="tw-p-3 tw-font-bold tw-text-left tw-bg-gray-subtle">
              Paragraphs
            </th>
            <td>
              <CodeBlock>
                {`font-family: geomanist-regular, Helvetica, sans-serif;
font-weight: 400;`}
              </CodeBlock>
            </td>
            <td>
              <CodeBlock>
                {`font-family: Roboto Regular,Helvetica,sans-serif;
font-weight: 400;`}
              </CodeBlock>
            </td>
            <td>
              <CodeBlock>
                {`font-family: Arial, Helvetica, sans-serif;
font-weight: 400;`}
              </CodeBlock>
            </td>
          </tr>
        </tbody>
      </table>
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
