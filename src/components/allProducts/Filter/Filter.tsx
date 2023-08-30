import Button from '@/components/button/Button/';
import Paragraph from '@/components/typography/Paragraph/Paragraph';

const Filter = ({ filters }: any) => {
  return (
    <ul className="grid smOnly:grid-cols-3 md:grid-cols-4 xl:w-[800px] mx-auto mb-5 md:mb-10">
      {filters.map((item: any, ind: any) => {
        return (
          <Button
            variant="simple"
            key={ind}
            className={`${ind === 0 ? 'smOnly:col-start-1 smOnly:col-end-4 ' : ''} mx-auto`}
            // className={`${mode ? '!border-transparent' : ' !border-dark'} !px-2`}
          >
            <Paragraph variant="dark" variantFontSize="text">
              {item.name}
            </Paragraph>
          </Button>
        );
      })}
    </ul>
  );
};

export default Filter;
