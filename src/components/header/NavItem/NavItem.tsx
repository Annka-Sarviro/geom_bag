import { usePathname } from 'next/navigation';
import { FC, Key } from 'react';

import LinkButton from '@/components/button/LinkButton/LinkButton';
import { NavItemProps } from './NavItem.props';

export const NavItem: FC<NavItemProps> = ({ list, setNavbarOpen, isOpen }) => {
  const pathname = usePathname();

  return (
    <>
      {list.map((item, index: Key) => {
        return (
          <li
            key={index}
            className={` md:py-0   ${
              item.name === 'Новинки' ? 'md:mr-[152px] xl:mr-[382px]' : null
            }`}
          >
            <LinkButton
              href={pathname === '/' || item.id === 'contacts' ? item.id : item.url}
              variant="simple"
              offset={item.offset}
              scroll={pathname === '/' || item.id === 'contacts' ? item.scroll : !item.scroll}
              onClick={() => (isOpen && setNavbarOpen ? setNavbarOpen(false) : '')}
              className="smOnly:mx-auto"
            >
              {item.name}
            </LinkButton>
          </li>
        );
      })}
    </>
  );
};
