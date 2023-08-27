import { FC } from 'react';

import ContactsList from '../ContactsList/ContactsList';
import { NavList } from '../NavList';

import { NavigationProps } from './Navigation.props';

export const Navigation: FC<NavigationProps> = ({
  list,
  isOpen = false,
  onItemClick,
  contacts,
}) => {
  return (
    <nav
      id="navbarCollapse"
      className={`container xl:w-auto xl:max-w-[541px]  xl:border-none md:!bg-transparent xl:p-0 xl:opacity-100 smOnly:mb-[60px] mdOnly:mb-20 ${
        isOpen ? 'visibility  opacity-100' : 'invisible top-[120%] opacity-0'
      }`}
    >
      <ContactsList contacts={contacts} />
      <NavList onItemClick={onItemClick} list={list} />
    </nav>
  );
};
