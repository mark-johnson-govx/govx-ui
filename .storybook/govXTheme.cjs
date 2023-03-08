import { create } from "@storybook/theming";
import logo from "../src/assets/govx-logo.svg";

export default create({
  base: "light",
  brandTitle: "GovX Style Guide and Component Library",
  brandUrl: "https://govx.com",
  brandImage: logo,
  brandTarget: "_self",
});
