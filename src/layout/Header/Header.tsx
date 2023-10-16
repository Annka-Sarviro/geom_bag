'use client';
import { MouseEvent, useEffect, useState } from 'react';

import IconButton from '@/components/button/IconButton';
import ContactsList from '@/components/header/ContactsList/ContactsList';
import { NavList } from '@/components/header/NavList';
import { Navigation } from '@/components/header/Navigation';
import Logo from '../Logo';

import { useCloseOnEsc } from '@/hooks';

import CloseMenuIcon from '../../../public/svg/close.svg';
import MobileMenuIcon from '../../../public/svg/menu.svg';

import { ContactsListProps } from '@/components/common/Contacts/Contacts.props';
import { ItemProps } from './Header.props';

import header from '@/data/header.json';

const Header = ({ contacts }: ContactsListProps) => {
  const HEIGHT_SCROLL = 80;
  const items = header.nav as ItemProps[];
  const [windowWidth, setWindowWidth] = useState(768);

  // Navbar toggle
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };
  const closeNavbar = () => setNavbarOpen(false);
  // Sticky Navbar
  const [sticky, setSticky] = useState(false);
  const handleStickyNavbar = () => {
    if (window.scrollY >= HEIGHT_SCROLL) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  // Close Navbar with click to ESC and on the backdrop
  const handleBackdropClick = (e: MouseEvent<HTMLDivElement>) => {
    if (e.currentTarget === e.target) {
      navbarToggleHandler();
    }
  };

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    handleWindowResize();
    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  useCloseOnEsc(() => setNavbarOpen(false));

  useEffect(() => {
    window.addEventListener('scroll', handleStickyNavbar);
  });

  useEffect(() => {
    navbarOpen
      ? (document.body.style.overflow = 'hidden')
      : (document.body.style.overflow = 'auto');
  }, [navbarOpen]);

  return (
    <header
      className={`left-0 top-0 z-40 flex h-[80px] md:h-[150px] w-full items-center border-b-[1px] border-solid border-white_gray bg-transparent  ${
        sticky
          ? '!fixed !z-[9999] !bg-white !bg-opacity-50  backdrop-blur-[3px] !transition '
          : 'absolute bg-white '
      }`}
    >
      {windowWidth < 768 && (
        <div className=" container  flex justify-between items-center	">
          <Logo width={69} height={46} className="!block w-[69px] h-[46px]" />

          {navbarOpen ? (
            <IconButton
              onClick={navbarToggleHandler}
              label={header.buttons.mobileMenu.label.close}
              className="flex items-center justify-center text-primary  xl:hidden"
            >
              <CloseMenuIcon width={40} height={40} className="h-10 w-10 fill-dark" />
            </IconButton>
          ) : (
            <IconButton
              onClick={navbarToggleHandler}
              label={header.buttons.mobileMenu.label.open}
              className="flex items-center justify-center text-primary  xl:hidden"
            >
              <MobileMenuIcon width={30} height={30} className="h-[30px] w-[30px]" />
            </IconButton>
          )}
          <div
            className={`absolute z-10 xl:mr-[100px] notXl:bg-gray_transparent notXl:backdrop-blur-[3px] ${
              navbarOpen
                ? ' disable-scroll !fixed left-0 top-20 h-screen w-screen '
                : '!static notXl:hidden  '
            }`}
            onClick={handleBackdropClick}
          >
            <div className="relative  bg-white ml-auto flex flex-col w-screen py-6">
              <Navigation
                setNavbarOpen={setNavbarOpen}
                list={items}
                isOpen={navbarOpen}
                contacts={contacts}
              />
            </div>
          </div>
        </div>
      )}

      {windowWidth > 768 && (
        <div className="container relative ">
          <ContactsList contacts={contacts} setNavbarOpen={setNavbarOpen} />
          <Logo className="!block md:absolute md:top-10 xl:top-4 md:inset-x-0 mdOnly:scale-[0.69]	m-auto" />
          <NavList list={items} isOpen={navbarOpen} />
        </div>
      )}
    </header>
  );
};

export default Header;
