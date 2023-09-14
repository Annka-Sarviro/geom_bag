import Button from '@/components/button/Button/';
import Paragraph from '@/components/typography/Paragraph/Paragraph';
import { useState } from 'react';

const Filter = ({ filters, setFilter, setPageCount, setDisabled, setSearchfilter }: any) => {
  const [current, setCurrent] = useState('all');
  const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const name = (event.target as HTMLButtonElement).id;

    if (name === 'all') {
      setSearchfilter('');
    }
    if (name) {
      setFilter(name);
      setCurrent(name);
    }
    setPageCount(1);
    setDisabled(false);
  };

  return (
    <ul className="grid smOnly:grid-cols-3 md:grid-cols-4 xl:w-[800px] mx-auto mb-5 md:mb-10">
      {filters.map((item: any, ind: any) => {
        return (
          <Button
            onClick={handleClick}
            variant="simple"
            key={ind}
            className={`${ind === 0 ? 'smOnly:col-start-1 smOnly:col-end-4 ' : ''} !px-2 mx-auto ${
              current === item.id ? '!border-dark' : '!border-transparent'
            }`}
            // className={`${mode ? '!border-transparent' : ' !border-dark'} !px-2`}
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
