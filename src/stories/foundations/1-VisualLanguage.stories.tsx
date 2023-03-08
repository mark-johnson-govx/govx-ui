import { Meta, StoryObj } from "@storybook/react";
import ColorsCanvas from "./ColorsCanvas";
import TypographyCanvas from "./TypographyCanvas";

const meta = {
  title: "Visual Language",
  parameters: {
    a11y: {
      disable: true,
    },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Color: Story = {
  render: ColorsCanvas,
};
export const Typography: Story = {
  render: TypographyCanvas,
};
