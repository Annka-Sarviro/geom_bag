import { useGroupContext } from '@/app/context';
import Button from '@/components/button/Button/';
import Paragraph from '@/components/typography/Paragraph/Paragraph';
import { useEffect, useState } from 'react';
import { FilterProps, FiltersProps } from './Filter.props';

const Filter = ({ filters, setPageCount, setDisabled }: FilterProps) => {
  const [current, setCurrent] = useState('all');
  const { groupFilter, setGroupFilter } = useGroupContext();

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
      setGroupFilter(name);
      setCurrent(name);
    }
  };

  return (
    <ul className="grid smOnly:grid-cols-3 md:grid-cols-4 xl:w-[800px] mx-auto mb-5 md:mb-10">
      {filters.map((item: FiltersProps, ind: number) => {
        return (
          <Button
            onClick={handleClick}
            variant="simple"
            key={ind}
            className={`${ind === 0 ? 'smOnly:col-start-1 smOnly:col-end-4 ' : ''} !px-2 mx-auto ${
              current === item.id ? '!border-dark' : '!border-transparent'
            }`}
          >
            <Paragraph variant="dark" variantFontSize="text" id={item.id} className="{`}">
              {item.name}
            </Paragraph>
          </Button>
        );
      })}
    </ul>
  );
};

export default Filter;
