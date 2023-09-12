import { useRouter } from 'next/navigation';
import { FC, Key } from 'react';

import LinkButton from '@/components/button/LinkButton/LinkButton';
import { NavItemProps } from './NavItem.props';

export const NavItem: FC<NavItemProps> = ({ list, setNavbarOpen, isOpen }) => {
  const router = useRouter();

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
              href={item.id}
              variant="simple"
              scroll={item.scroll}
              onClick={() => (isOpen ? setNavbarOpen(false) : null)}
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
