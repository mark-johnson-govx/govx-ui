import { Prism } from "@mantine/prism";
import React, { PropsWithChildren, ReactNode } from "react";

const basePalette: ColorPaletteItemProps[] = [
  {
    name: "Dark Blue",
    colors: [".tw-*-blue-dark", "#0e5777", "rbg(14,87,119)"],
    colorClass: "tw-bg-blue-dark",
  },
  {
    name: "Light Blue",
    colors: [".tw-*-blue-light", "#0c9ac4", "rbg(12,154,196)"],
    colorClass: "tw-bg-blue-light",
  },
  {
    name: "Dark Gray",
    colors: [".tw-*-gray-dark", "#2a2d36", "rbg(42,45,54)"],
    colorClass: "tw-bg-gray-dark",
  },
  {
    name: "Medium Gray",
    colors: [".tw-*-gray-medium", "#7b7e84", "rbg(123,126,132)"],
    colorClass: "tw-bg-gray-medium",
  },
  {
    name: "Light Gray",
    colors: [".tw-*-gray-light", "#e3e3e3", "rbg(227,227,227)"],
    colorClass: "tw-bg-gray-light",
  },
  {
    name: "Subtle Gray",
    colors: [".tw-*-gray-subtle", "#f7f7f7", "rbg(247,247,247)"],
    colorClass: "tw-bg-gray-subtle",
  },
];
const highlightPalette: ColorPaletteItemProps[] = [
  {
    name: "Red",
    colors: [".tw-*-red", "#bd2326", "rbg(189,35,38)"],
    colorClass: "tw-bg-red",
  },
  {
    name: "Orange",
    colors: [".tw-*-orange", "#d74f27", "rbg(215,79,39)"],
    colorClass: "tw-bg-orange",
  },
  {
    name: "Yellow",
    colors: [".tw-*-yellow", "#f7b918", "rbg(247,185,24)"],
    colorClass: "tw-bg-yellow",
  },
  {
    name: "Gold",
    colors: [".tw-*-gold", "#b79042", "rbg(183,144,66)"],
    colorClass: "tw-bg-gold",
  },
  {
    name: "Green",
    colors: [".tw-*-green", "#1F8623", "rbg(31, 134, 35)"],
    colorClass: "tw-bg-green",
  },
];
const govxNeutralGrays: ColorPaletteItemProps[] = [
  {
    name: "",
    colors: ["#f4f4f4", "rbg(244, 244, 244)"],
    colorClass: "#f4f4f4",
  },
  {
    name: "",
    colors: ["#eeeeee", "rbg(238, 238, 238)"],
    colorClass: "#eeeeee",
  },
  {
    name: "",
    colors: ["#e3e3e3", "rbg(227, 227, 227)"],
    colorClass: "#e3e3e3",
  },
  {
    name: "",
    colors: ["#e0e0e0", "rbg(224, 224, 224)"],
    colorClass: "#e0e0e0",
  },
  {
    name: "",
    colors: ["#bfbfbf", "rbg(191, 191, 191)"],
    colorClass: "#bfbfbf",
  },
  {
    name: "",
    colors: ["#7b7e84", "rbg(123, 126, 132)"],
    colorClass: "#7b7e84",
  },
];
const partnerStorefrontNeutralGrays: ColorPaletteItemProps[] = [
  {
    name: "",
    colors: ["#fbfbfb", "rbg(251, 251, 251)"],
    colorClass: "#fbfbfb",
  },
  {
    name: "",
    colors: ["#f3f3f3", "rbg(243, 243, 243)"],
    colorClass: "#f3f3f3",
  },
  {
    name: "",
    colors: ["#f1f1f1", "rbg(241, 241, 241)"],
    colorClass: "#f1f1f1",
  },
  {
    name: "",
    colors: ["#ededed", "rbg(237, 237, 237)"],
    colorClass: "#ededed",
  },
  {
    name: "",
    colors: ["#ebebeb", "rbg(235, 235, 235)"],
    colorClass: "#ebebeb",
  },
  {
    name: "",
    colors: ["#e3e3e3", "rbg(227, 227, 227)"],
    colorClass: "#e3e3e3",
  },
  {
    name: "",
    colors: ["#e0e0e0", "rbg(224, 224, 224)"],
    colorClass: "#e0e0e0",
  },
  {
    name: "",
    colors: ["#dbdbdb", "rbg(219, 219, 219)"],
    colorClass: "#dbdbdb",
  },
];

const ColorsCanvas = () => {
  return (
    <div className="tw-font-sans tw-text-gray-darkest">
      <h2 className="reset tw-font-extrabold tw-text-3xl tw-mt-4 tw-tracking-wide">
        Colors
      </h2>
      <hr className="reset tw-mb-8 tw-mt-4" />
      <p className="tw-leading-6">
        The following color palette applies to GovX brand properties, including{" "}
        <a className="" href="https://govx.com">
          GovX.com
        </a>
        ,{" "}
        <a className="" href="https://auth.govx.com">
          Auth.govx.com
        </a>
        ,{" "}
        <a className="" href="https://partners.govx.com">
          Partners.govx.com
        </a>{" "}
        and{" "}
        <a className="" href="https://storefront.govx.com">
          Storefront.govx.com
        </a>
        . VCS has a distinct color palette.
      </p>
      <div className="tw-mt-12">
        <h4 className="reset tw-font-bold tw-mb-2 tw-tracking-wide tw-text-xl">
          Base Palette
        </h4>
        <ColorPaletteSwatch palette={basePalette} />
      </div>
      <div className="tw-mt-12">
        <h4 className="reset tw-font-bold tw-mb-2 tw-tracking-wide tw-text-xl">
          Highlight Palette
        </h4>
        <ColorPaletteSwatch palette={highlightPalette} />
      </div>
      <div className="tw-mt-12">
        <h4 className="reset tw-font-bold tw-mb-1 tw-tracking-wide tw-text-xl">
          Neutral Grays
        </h4>
        <p className="reset tw-text-gray-medium tw-text-sm tw-mb-3">
          Applies for GovX only
        </p>
        <ColorPaletteSwatch palette={govxNeutralGrays} />
      </div>
      <div className="tw-mt-12">
        <h4 className="reset tw-font-bold tw-mb-1 tw-tracking-wide tw-text-xl">
          Neutral Grays
        </h4>
        <p className="reset tw-text-gray-medium tw-text-sm tw-mb-3">
          Applies for Partners and Storefront Admins only
        </p>
        <ColorPaletteSwatch palette={partnerStorefrontNeutralGrays} />
      </div>
      <i className="tw-font-italic tw-block tw-my-12 tw-text-gold">
        ## TODO: Color application examples at Partners.govx.com. We can use
        REAL components instead of screenshots for these examples!
      </i>
    </div>
  );
};

type ColorPaletteItemProps = {
  name: string;
  colors: string[];
  colorClass: string;
};

type ColorPaletteSwatchProps = {
  palette: ColorPaletteItemProps[];
};

export const ColorPaletteSwatch: React.FC<ColorPaletteSwatchProps> = ({
  palette,
}) => {
  return (
    <div className="tw-flex tw-gap-4">
      {palette.map((item) => (
        <ColorPaletteItem
          key={item.colorClass}
          name={item.name}
          colorClass={item.colorClass}
          colors={item.colors}
        />
      ))}
    </div>
  );
};

const ColorPaletteItem: React.FC<ColorPaletteItemProps> = ({
  colorClass = "",
  name = "",
  colors = [],
}) => {
  const bgStyle = colorClass.includes("#")
    ? { backgroundColor: colorClass }
    : {};
  return (
    <div className="tw-flex-1 tw-rounded-xl tw-shadow tw-p-2 tw-text-center">
      <div
        className={`tw-h-24 tw-rounded-lg ${
          !colorClass.includes("#") ? colorClass : ""
        }`}
        style={bgStyle}
      >
        &nbsp;
      </div>
      <div className="tw-mt-2 tw-font-medium">{name}</div>
      <div className="tw-mt-3">
        {colors.map((color) => (
          <div key={color} className="tw-text-gray-medium tw-text-sm">
            {color}
          </div>
        ))}
      </div>
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

export default ColorsCanvas;
