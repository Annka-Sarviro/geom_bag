import { FC } from 'react';

import { NavItem } from '../NavItem';

import { NavListProps } from './NavList.props';

export const NavList: FC<NavListProps> = ({ list, onItemClick }) => {
  return (
    <ul className=" md:flex md:justify-center md:gap-x-[60px] smOnly:space-y-10 ">
      <NavItem onItemClick={onItemClick} list={list} />
    </ul>
  );
};
