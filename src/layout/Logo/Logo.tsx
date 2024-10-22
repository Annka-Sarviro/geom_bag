import { routes } from '@/utils/routs';
import cn from 'classnames';
import Link from 'next/link';
import { FC } from 'react';
import LogoImg from '../../../public/logo.svg';
import { LogoProps } from './Logo.props';

const Logo: FC<LogoProps> = ({ sticky, width = 140, height = 94, className }) => {
  return (
    <Link
      href={routes.HOME}
      id="logo-desktop"
      className={cn('logo relative block w-fit', className)}
    >
      <LogoImg width={width} height={height} aria-label="Логотип сайту" className="" />
    </Link>
  );
};

export default Logo;
