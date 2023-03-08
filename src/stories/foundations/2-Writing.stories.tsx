import { Meta, StoryObj } from "@storybook/react";
import Placeholder from "../../components/Placeholder";
import CapitalizationCanvas from "./CapitalizationCanvas";
import DatesAndTimesCanvas from "./DatesAndTimesCanvas";
import NumbersAndPercentagesCanvas from "./NumbersAndPercentagesCanvas";

const meta = {
  title: "Writing",
  parameters: {
    a11y: {
      disable: true,
    },
    options: { showPanel: false }
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Capitalization: Story = {
  name: "Capitalization & Punctuation",
  render: CapitalizationCanvas,
};
export const NumbersAndPercentages: Story = {
  name: "Numbers & Percentages",
  render: NumbersAndPercentagesCanvas,
};
export const DatesAndTimes: Story = {
  name: "Dates & Times",
  render: DatesAndTimesCanvas,
};
