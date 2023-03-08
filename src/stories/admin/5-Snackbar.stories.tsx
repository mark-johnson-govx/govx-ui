import { Meta, StoryObj } from "@storybook/react";
import Placeholder from "../../components/Placeholder";

const meta = {
  title: "Snackbar",
  component: Placeholder,
  parameters: {},
} satisfies Meta<typeof Placeholder>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Snackbar: Story = {
  render: Placeholder,
};
