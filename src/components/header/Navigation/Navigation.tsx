import { FC } from 'react';

import ContactsList from '../ContactsList/ContactsList';
import { NavList } from '../NavList';

import { NavigationProps } from './Navigation.props';

export const Navigation: FC<NavigationProps> = ({
  list,
  isOpen = false,
  setNavbarOpen,
  contacts,
}) => {
  return (
    <nav
      id="navbarCollapse"
      className={`container xl:w-auto xl:max-w-[541px]  xl:border-none md:!bg-transparent xl:p-0 xl:opacity-100 smOnly:flex-col-reverse smOnly:flex smOnly:gap-y-10 mdOnly:mb-20 ${
        isOpen ? 'visibility  opacity-100' : 'invisible top-[120%] opacity-0'
      }`}
    >
      <ContactsList contacts={contacts} setNavbarOpen={setNavbarOpen} />
      <NavList setNavbarOpen={setNavbarOpen} list={list} isOpen={isOpen} />
    </nav>
  );
};
