import Button from '@/components/button/Button/';
import Paragraph from '@/components/typography/Paragraph/';
import Title from '@/components/typography/Title';

import d from '@/data/full_product_card.json';

const FullProductCardDesktop = ({ data }: any) => {
  console.log(data);

  const handleClick = () => {
    return console.log('click');
  };
  return (
    <>
      <Title tag="h3" variant="dark">
        {data.name}
      </Title>
      <Paragraph variantFontSize="text" variant="dark">
        {d.title.article}
        {data.article}
      </Paragraph>
      <div>
        <Paragraph variantFontSize="text">
          <span>{d.title.material}</span> {data.material}
        </Paragraph>
        <Paragraph variantFontSize="text">
          <span>{d.title.color}</span>
          {data.color}
        </Paragraph>
        <Paragraph variantFontSize="text">
          <span>{d.title.size}</span>
          {data.size}
        </Paragraph>
        <Paragraph variantFontSize="text">
          <span>{d.title.peculiar}</span>
          {data.peculiar}
        </Paragraph>
        <Paragraph>
          {data.price} {d.title.price}
        </Paragraph>
      </div>
      <Paragraph variantFontSize="text">{data.description}</Paragraph>
      <Paragraph>
        <span>{d.title.recommendations}</span> {data.recommendations}
      </Paragraph>

      <Button variant="primary" onClick={handleClick}>
        {d.button.text}
      </Button>
    </>
  );
};

export default FullProductCardDesktop;
