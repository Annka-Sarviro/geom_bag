import cn from 'classnames';
import { FC } from 'react';

import { IconButtonProps } from './IconButton.props';

const IconButton: FC<IconButtonProps> = ({
  className,
  label,
  children,
  type = 'button',
  disabled = false,
  onClick,
}) => {
  return (
    <button
      disabled={disabled}
      type={type}
      className={cn(
        'h-fit w-fit duration-300 hover:outline-primary focus:outline-primary',
        className
      )}
      aria-label={label}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default IconButton;
