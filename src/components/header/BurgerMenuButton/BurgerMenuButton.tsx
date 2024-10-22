'use client';
import IconButton from '@/components/button/IconButton';
import header from '@/data/header.json';
import { useEffect, useState } from 'react';

export const BurgerMenuButton = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleButtonClick = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const burgerMenu = document.getElementById('mobile_menu');
      const inputElement = document.getElementById('input_search');

      if (!burgerMenu) {
        return;
      }

      if (inputElement?.contains(event.target as Node)) {
        return;
      }

      const targetElement = event.target as HTMLElement;

      if (targetElement && targetElement.tagName !== 'INPUT') {
        setIsMenuOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('click', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
    } else {
      document.removeEventListener('click', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const burgerMenu = document.getElementById('mobile_menu_overlay');
    const body = document.body;
    const headerEl = document.getElementById('header-thumb');
    if (burgerMenu) {
      if (isMenuOpen) {
        burgerMenu.classList.add('open');
        body.classList.add('no-scroll');
        headerEl?.classList.add('bg-white');
      } else {
        burgerMenu.classList.remove('open');
        body.classList.remove('no-scroll');

        setTimeout(() => {
          headerEl?.classList.remove('bg-white');
        }, 500);
      }
    }

    return () => {
      body.classList.remove('no-scroll');
    };
  }, [isMenuOpen]);

  return (
    <>
      <IconButton
        label={header.buttons.mobileMenu.label.open}
        className={isMenuOpen ? '' : ''}
        onClick={handleButtonClick}
      >
        <svg
          id="burger_svg"
          width="42"
          height="42"
          viewBox="0 0 42 42"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="transition-all origin-center"
        >
          <path
            d="M36.75 13.5625H5.25C4.5325 13.5625 3.9375 12.9675 3.9375 12.25C3.9375 11.5325 4.5325 10.9375 5.25 10.9375H36.75C37.4675 10.9375 38.0625 11.5325 38.0625 12.25C38.0625 12.9675 37.4675 13.5625 36.75 13.5625Z"
            fill="#1E1E1E"
            className={`
                transition-all
                duration-300
              ${
                isMenuOpen
                  ? 'translate-x-[-6px] translate-y-[6px] origin-center rotate-45'
                  : 'transform-none'
              }
            `}
          />
          <path
            d="M36.75 22.3125H5.25C4.5325 22.3125 3.9375 21.7175 3.9375 21C3.9375 20.2825 4.5325 19.6875 5.25 19.6875H36.75C37.4675 19.6875 38.0625 20.2825 38.0625 21C38.0625 21.7175 37.4675 22.3125 36.75 22.3125Z"
            fill="#1E1E1E"
            className={` transition-all ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}
          />
          <path
            d="M36.75 31.0625H5.25C4.5325 31.0625 3.9375 30.4675 3.9375 29.75C3.9375 29.0325 4.5325 28.4375 5.25 28.4375H36.75C37.4675 28.4375 38.0625 29.0325 38.0625 29.75C38.0625 30.4675 37.4675 31.0625 36.75 31.0625Z"
            fill="#1E1E1E"
            className={`
                transition-all
                duration-300
              ${
                isMenuOpen
                  ? 'translate-x-[-6px] translate-y-[-6px] origin-center rotate-[-45deg]'
                  : 'transform-none'
              }
            `}
          />
        </svg>
      </IconButton>
    </>
  );
};
export default BurgerMenuButton;
