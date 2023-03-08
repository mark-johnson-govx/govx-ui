import type { Meta, StoryObj } from "@storybook/react";
import Button from "../../components/GovX/Button";

const meta: Meta<typeof Button> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/7.0/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Button",
  component: Button,
  argTypes: {
    variant: {
      control: false,
    },
    onClick: { action: "clicked", control: false },
    children: { name: "Label" },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Button>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/7.0/react/api/csf
 * to learn how to use render functions.
 */
export const CTA: Story = {
  args: {
    children: "Add to Cart",
    disabled: false,
    type: "button",
  },
  render: ({ children, ...args }) => (
    <Button
      variant="cta"
      disabled={args.disabled}
      onClick={args.onClick}
      fullWidth={args.fullWidth}
      type={args.type}
    >
      {children}
    </Button>
  ),
};

export const Primary: Story = {
  args: {
    children: "+ Show More Products",
    disabled: false,
    type: "button",
    onClick: (e) => console.log(e.currentTarget.value),
  },
  render: ({ children, ...args }) => (
    <Button
      variant="primary"
      disabled={args.disabled}
      onClick={args.onClick}
      fullWidth={args.fullWidth}
      type={args.type}
    >
      {children}
    </Button>
  ),
};

export const Secondary: Story = {
  args: {
    children: "View Cart",
    disabled: false,
    type: "button",
    onClick: (e) => console.log(e.currentTarget.value),
  },
  render: ({ children, ...args }) => (
    <Button
      variant="secondary"
      disabled={args.disabled}
      onClick={args.onClick}
      fullWidth={args.fullWidth}
      type={args.type}
    >
      {children}
    </Button>
  ),
};
