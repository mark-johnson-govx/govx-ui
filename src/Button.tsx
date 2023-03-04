import React, { PropsWithChildren } from 'react'
import { useButton } from 'react-aria';

type ButtonProps = {
    onClick?: () => void
}

const Button: React.FC<PropsWithChildren<ButtonProps>> = (props) => {
  const { onClick, children } = props;
  let ref = React.useRef(null);
  let { buttonProps } = useButton(props, ref);
  

  return (
      <button {...buttonProps} onClick={onClick} className='reset tw-bg-gray-800 hover:tw-bg-gray-700 tw-text-white tw-px-4 tw-py-2 tw-rounded tw-shadow tw-inline-block tw-font-medium tw-transition-colors'>{children}</button>
  )
}

export default Button