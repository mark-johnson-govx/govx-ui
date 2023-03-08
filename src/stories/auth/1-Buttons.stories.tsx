import { Meta, StoryObj } from "@storybook/react";
import Button from "../../components/Auth/Button";

const meta = {
  title: "Buttons",
  component: Button,
  parameters: {
    docs: {
      autodocs: false,
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Buttons: Story = {
  render: Button,
};
