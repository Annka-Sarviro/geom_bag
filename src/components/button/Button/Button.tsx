import cn from 'classnames';

// import Arrow from 'public/images/right-arrow.svg';
import { FC } from 'react';
import { ButtonProps } from './Button.props';

const Button: FC<ButtonProps> = ({
  variant = 'primary',
  disabled = false,
  children,
  className,
  ...props
}) => {
  return (
    <button
      className={cn(
        'flex w-full max-w-[220px] items-center justify-center border-2 border-solid py-[10px] px-9 text-xl',
        className,
        !disabled && {
          [' border-dark bg-dark text-white duration-300 hover:bg-white focus:bg-white hover:text-dark focus:text-dark']:
            variant == 'primary',
          [' border-whit bg-white text-dark duration-300 hover:bg-dark focus:bg-dark hover:text-white focus:text-white hover:border-dark focus:border-dark']:
            variant == 'secondary',
        },
        disabled && {
          ['primary pointer-events-none   bg-white_gray border-white_gray text-gray']:
            variant == 'primary',
          ['secondary border-gray_light bg-white pointer-events-none  text-gray']:
            variant == 'secondary',
        }
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
