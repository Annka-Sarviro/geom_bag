import cn from 'classnames';
import Link, { LinkProps } from 'next/link';
import { Link as Scroll } from 'react-scroll';

import { FC } from 'react';
import { LinkButtonProps } from './LinkButton.props';

const LinkButton: FC<LinkButtonProps & LinkProps> = ({
  variant = 'primary',
  disabled = false,
  href,
  children,
  scroll,
  offset,
  className,
  onClick,
  onKeyUp,
  ...props
}) => {
  const disabledProps = disabled ? { role: 'link', 'aria-disabled': disabled } : {};

  if (scroll) {
    return (
      <Scroll
        onClick={onClick}
        onKeyUp={onKeyUp}
        tabIndex={0}
        to={href}
        href=""
        spy
        smooth={true}
        offset={offset}
        duration={600}
        activeClass="active"
        className={cn(
          'flex w-full max-w-[230px] items-center justify-center border border-solid py-[10px] px-9 text-xl',
          className,
          !disabled && {
            [' border-dark bg-dark text-white duration-300 hover:bg-white focus:bg-white hover:text-dark focus:text-dark']:
              variant == 'primary',
            [' border-white bg-white text-dark duration-300 hover:bg-dark focus:bg-dark hover:text-white focus:text-white hover:border-dark focus:border-dark']:
              variant == 'secondary',
            ['!max-w-[fit-content] !justify-start border-none bg-transparent !py-0 !px-0 text-dark duration-300 hover:text-accent focus:text-accent']:
              variant == 'simple',
          },
          disabled && {
            ['primary pointer-events-none   bg-white_gray border-white_gray text-gray']:
              variant == 'primary',
            ['secondary border-gray_light bg-white pointer-events-none  text-gray']:
              variant == 'secondary',
            ['simple !max-w-[fit-content] pointer-events-none  !justify-start border-none bg-transparent py-0 px-0 text-gray duration-300 ']:
              variant == 'simple',
          }
        )}
      >
        {children}
      </Scroll>
    );
  }

  return (
    <Link legacyBehavior href={href} {...disabledProps}>
      <a
        onClick={onClick}
        className={cn(
          'flex w-full max-w-[240px] cursor-pointer items-center rounded-sm border-2 border-solid p-[10px] text-xl',
          className,
          !disabled && {
            [' border-dark bg-dark text-white duration-300 hover:bg-white focus:bg-white hover:text-dark focus:text-dark']:
              variant == 'primary',
            [' border-whit bg-white text-dark duration-300 hover:bg-dark focus:bg-dark hover:text-white focus:text-white hover:border-dark focus:border-dark']:
              variant == 'secondary',
            ['!max-w-[fit-content] !justify-start border-none bg-transparent py-0 px-0 text-dark duration-300 hover:text-accent focus:text-accent']:
              variant == 'simple',
          },
          disabled && {
            ['primary pointer-events-none   bg-white_gray border-white_gray text-gray']:
              variant == 'primary',
            ['secondary border-gray_light bg-white pointer-events-none  text-gray']:
              variant == 'secondary',
            ['simple !max-w-[fit-content] pointer-events-none  !justify-start border-none bg-transparent py-0 px-0 text-gray duration-300 ']:
              variant == 'simple',
          }
        )}
        {...props}
      >
        {children}
      </a>
    </Link>
  );
};

export default LinkButton;
