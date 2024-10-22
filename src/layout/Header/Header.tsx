import ContactsList from '@/components/header/ContactsList/ContactsList';
import { NavList } from '@/components/header/NavList';
import Logo from '../Logo';

import { ContactsListProps } from '@/components/common/Contacts/Contacts.props';
import { ItemProps } from './Header.props';

import { HeaderScripts } from '@/components/header/HeaderScripts/HeaderScripts';
import MobileHeader from '@/components/header/MobileHeader';
import { Navigation } from '@/components/header/Navigation';
import header from '@/data/header.json';

const Header = ({ contacts }: ContactsListProps) => {
  const items = header.nav as ItemProps[];

  return (
    <header
      id="header"
      className={`left-0 top-0 z-[20]  flex h-[80px] md:h-[150px] w-full items-center transition-all fixed bg-white  backdrop-blur-[3px]  '`}
    >
      <HeaderScripts />
      <div
        id="header-thumb"
        className="w-full h-full z-[100]  flex items-center border-b-[1px] border-solid border-white_gray"
      >
        <div className="container relative smOnly:hidden">
          <ContactsList contacts={contacts} />
          <Logo className="!block md:absolute md:top-10 xl:top-4 md:inset-x-0 mdOnly:scale-[0.69]	m-auto" />
          <NavList list={items} />
        </div>
        <MobileHeader />
      </div>
      <div
        id="mobile_menu_overlay"
        className={`absolute z-10 xl:mr-[100px] notXl:bg-gray_transparent notXl:backdrop-blur-[3px]}`}
      >
        <div
          className="relative  bg-white ml-auto flex flex-col w-screen py-6 h-fit"
          id="mobile_menu"
        >
          <Navigation list={items} contacts={contacts} />
        </div>
      </div>
    </header>
  );
};

export default Header;
