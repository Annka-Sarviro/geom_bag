import Button from '@/components/button/Button/';
import Paragraph from '@/components/typography/Paragraph/Paragraph';
import { routes } from '@/utils/routs';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { FilterProps, FiltersProps } from './Filter.props';

const Filter = ({ filters, setPageCount, setDisabled, groupFilter }: FilterProps) => {
  const [current, setCurrent] = useState('all');
  const router = useRouter();
  useEffect(() => {
    if (groupFilter) {
      setCurrent(groupFilter);
    }
  }, [groupFilter, setCurrent]);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const name = (event.target as HTMLButtonElement).id;

    setPageCount(1);
    setDisabled(false);

    if (name) {
      setCurrent(name);
      router.push(`${routes.HOME}?groupFilter=${name}`, { scroll: false });
    }
  };

  return (
    <ul className="grid  smOnly:auto-rows-min	 md:grid-cols-6 xl:w-[900px] mx-auto mb-5 md:mb-10 gap-y-2">
      {filters.map((item: FiltersProps, ind: number) => {
        return (
          <li key={ind}>
            <Button
              onClick={handleClick}
              variant="simple"
              className={`${
                ind === 0 ? 'smOnly:col-start-1 smOnly:col-end-5 ' : ''
              } smOnly:!px-1 !px-2 mx-auto min-w-fit ${
                current === item.id ? '!border-dark' : '!border-transparent'
              }`}
            >
              <Paragraph variant="dark" variantFontSize="text" id={item.id} className="{`}">
                {item.name}
              </Paragraph>
            </Button>
          </li>
        );
      })}
    </ul>
  );
};

export default Filter;
