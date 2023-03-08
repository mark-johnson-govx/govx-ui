import { Meta, StoryObj } from "@storybook/react";
import Placeholder from "../../components/Placeholder";
import BrowserSupportCanvas from "./BrowserSupportCanvas";

const meta = {
  title: "Browser Support",
  parameters: {
    a11y: {
      disable: true,
    },
    options: { showPanel: false }
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const BrowserSupport: Story = {
  render: BrowserSupportCanvas,
};
