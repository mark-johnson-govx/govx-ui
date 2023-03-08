import { Meta, StoryObj } from "@storybook/react";
import Placeholder from "../../components/Placeholder";
import AccessibilityCanvas from "./AccessibilityCanvas";

const meta = {
  title: "Accessibility",
  parameters: {
    a11y: {
      disable: true,
    },
    options: { showPanel: false }
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Accessibility: Story = {
  render: AccessibilityCanvas,
};
