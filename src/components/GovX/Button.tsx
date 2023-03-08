type PrimaryButtonProps = GenericButtonProps & {};
import { PropsWithChildren } from "react";

const baseButtonClasses = (options: any) => {
  const base = [
    "reset",
    "tw-box-border",
    "tw-tracking-wide",
    "tw-h-[45px]",
    "tw-transition-colors",
    "tw-duration-300",
    "tw-px-4",
    "tw-rounded-[2px]",
  ];

  let conditional: string[] = [];
  if (options["fullWidth"]) {
    conditional = [...conditional, "tw-block", "tw-w-full"];
  }

  return [...conditional, ...base].join(" ");
};

const CTAButton: React.FC<PrimaryButtonProps> = ({
  children,
  type = "button",
  fullWidth = false,
  ...props
}) => {
  return (
    <button
      type={type}
      {...props}
      className={`${baseButtonClasses({
        fullWidth,
      })} tw-bg-blue-dark hover:tw-bg-blue-darker disabled:tw-bg-[#e0e0e0] active:tw-bg-[#527686] tw-text-white tw-font-medium`}
    >
      {children}
    </button>
  );
};

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  children,
  type = "button",
  fullWidth = false,
  ...props
}) => {
  return (
    <button
      type={type}
      {...props}
      className={`${baseButtonClasses({
        fullWidth,
      })} tw-bg-gray-dark hover:tw-bg-gray-darkest disabled:tw-bg-[#e0e0e0] active:tw-bg-[#646D85] tw-text-white tw-font-medium`}
    >
      {children}
    </button>
  );
};

type SecondaryButtonProps = GenericButtonProps & {};
const SecondaryButton: React.FC<SecondaryButtonProps> = ({
  children,
  type = "button",
  fullWidth = false,
  ...props
}) => {
  return (
    <button
      type={type}
      {...props}
      className={`${baseButtonClasses({
        fullWidth,
      })} tw-bg-white hover:tw-bg-[#EAEAEA] disabled:tw-bg-[#e0e0e0] active:tw-bg-[#f2f2f2] tw-text-blue-dark disabled:tw-text-white tw-font-medium tw-border-2 disabled:tw-border-none tw-border-solid tw-border-blue-dark`}
    >
      {children}
    </button>
  );
};

type DangerButtonProps = GenericButtonProps & {};
const DangerButton: React.FC<DangerButtonProps> = ({
  children,
  type = "button",
}) => {
  return <button type={type}>{children}</button>;
};

type GenericButtonProps = PropsWithChildren & {
  /**
   * Optional click handler
   */
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit";
  fullWidth?: boolean;
  disabled?: boolean;
};

type ButtonProps = GenericButtonProps & {
  variant: "cta" | "primary" | "secondary" | "danger";
};

const Button: React.FC<ButtonProps> = (props) => {
  const { variant, ...args } = props;

  if (variant === "secondary")
    return <SecondaryButton {...args}>{props.children}</SecondaryButton>;
  if (variant === "danger")
    return <DangerButton {...args}>{props.children}</DangerButton>;
  if (variant === "primary")
    return <PrimaryButton {...args}>{props.children}</PrimaryButton>;
  return <CTAButton {...args}>{props.children}</CTAButton>;
};

export default Button;
export { PrimaryButton, SecondaryButton, DangerButton };
