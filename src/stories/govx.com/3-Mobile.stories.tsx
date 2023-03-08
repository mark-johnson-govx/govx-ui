import { Meta, StoryObj } from "@storybook/react";
import Placeholder from "../../components/Placeholder";

const meta = {
  title: "Mobile",
  component: Placeholder,
  parameters: {},
} satisfies Meta<typeof Placeholder>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Mobile: Story = {
  render: Placeholder,
};
