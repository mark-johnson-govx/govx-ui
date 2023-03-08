import { Meta, StoryObj } from "@storybook/react";
import ConfirmationBox from "../../components/Auth/ConfirmationBox";

const meta = {
  title: "Confirmation Box",
  component: ConfirmationBox,
  parameters: {},
  tags: ["autodocs"],
} satisfies Meta<typeof ConfirmationBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    title: "Delete User",
    body: "Are you sure you wish to delete this user on this platform?",
    type: "delete",
  },
  argTypes: {
    type: { control: { type: "select", options: ["confirm", "delete"] } },
    onClose: { action: "close", control: false },
    onConfirm: { action: "confirm", control: false },
  },
  render: (args) => <ConfirmationBox {...args} />,
};
