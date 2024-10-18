import { FC } from 'react';

import { NavItem } from '../NavItem';

import { NavListProps } from './NavList.props';

export const NavList: FC<NavListProps> = ({ list }) => {
  return (
    <ul className="flex justify-center smOnly:flex-col  md:gap-x-[60px] smOnly:gap-y-4 ">
      <NavItem list={list} />
    </ul>
  );
};
