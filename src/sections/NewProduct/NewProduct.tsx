'use client';

import Button from '@/components/button/Button';
import Paragraph from '@/components/typography/Paragraph';
import Title from '@/components/typography/Title';

const NewProduct = (data: any) => {
  const handleClick = () => {
    return console.log('click');
  };
  return (
    <div className="container">
      <Title tag="h2">Новинки / Топ-продажів</Title>
      <Paragraph variantFontSize="text">jsdkljfskljdf</Paragraph>

      <Button variant="primary" onClick={handleClick}>
        Зaмовити
      </Button>
    </div>
  );
};

export default NewProduct;
