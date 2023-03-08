import { Meta, StoryObj } from "@storybook/react";
import Placeholder from "../../components/Placeholder";

const meta = {
  title: "Product Attribute Selector Chips",
  component: Placeholder,
  parameters: {},
} satisfies Meta<typeof Placeholder>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ProductAttributeSelectorChips: Story = {
  render: Placeholder,
};
