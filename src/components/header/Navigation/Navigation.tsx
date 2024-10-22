import { FC } from 'react';

import ContactsList from '../ContactsList/ContactsList';
import { NavList } from '../NavList';

import { NavigationProps } from './Navigation.props';

export const Navigation: FC<NavigationProps> = ({ list, contacts }) => {
  return (
    <nav
      id="navbarCollapse"
      className={`container xl:w-auto xl:max-w-[541px]  xl:border-none md:!bg-transparent xl:p-0 xl:opacity-100 smOnly:flex-col-reverse smOnly:flex smOnly:gap-y-10 mdOnly:mb-20
        visibility  opacity-100 `}
    >
      <ContactsList contacts={contacts} />
      <NavList list={list} />
    </nav>
  );
};
