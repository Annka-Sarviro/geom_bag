'use client';

import { useFilterContext, useGroupContext } from '@/app/context';
import Paragraph from '@/components/typography/Paragraph';
import Link from 'next/link';
import { Image as DatoImage } from 'react-datocms';
import { GroupMenuCardProps } from './GroupMenuCard.props';

const GroupMenuCard = ({ item, title, id }: GroupMenuCardProps) => {
  const { groupFilter, setGroupFilter } = useGroupContext();
  const { searchfilter, setSearchfilter } = useFilterContext();

  const handleClick = () => {
    setSearchfilter('');
    return setGroupFilter(id);
  };

  return (
    <li>
      <Link
        onClick={handleClick}
        href={'/#all_products'}
        className="relative h-full w-full flex items-end overflow-hidden"
      >
        <DatoImage
          data={item.responsiveImage}
          className="hover:scale-[1.1] duration-1000 brightness-50 saturate-75 hover:brightness-90 hover:saturate-100"
        />
        <Paragraph
          variantFontSize="text"
          variant="white"
          className="absolute bottom-5 left-5 !text-3xl "
        >
          {title}
        </Paragraph>
      </Link>
    </li>
  );
};

export default GroupMenuCard;
