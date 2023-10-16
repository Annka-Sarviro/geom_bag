'use client';
import { useState } from 'react';

import { ProductCardProp } from '@/app/page.props';
import ProductsList from '@/components/newProducts/ProductsList';
import { NewPropductsProps } from './NewProduct.props';

import Button from '@/components/button/Button';
import Title from '@/components/typography/Title';

import d from '@/data/new_products.json';

const getNewProducts = (data: ProductCardProp[]) => {
  const newData = data.filter((items: ProductCardProp) => items.isnew);
  return newData;
};

const getTopProducts = (data: ProductCardProp[]) => {
  const newData = data.filter((items: ProductCardProp) => items.ispopular);
  return newData;
};

const NewProduct = ({ data }: NewPropductsProps) => {
  const newProduct = getNewProducts(data);
  const topProduct = getTopProducts(data);

  const [products, setProducts] = useState(newProduct);
  const [mode, setMode] = useState(true);

  const handleNewClick = () => {
    setProducts(newProduct);
    setMode(true);
  };

  const handleTopClick = () => {
    setProducts(topProduct);
    setMode(false);
  };

  return (
    <div className="container">
      <ul className="flex justify-center gap-x-4 items-center mb-10 md:mb-12">
        <li>
          <Button
            variant="simple"
            onClick={handleNewClick}
            className={`${mode ? 'border-b-2 !border-dark' : '!border-transparent'} !px-2`}
          >
            <Title tag="h2" className="!m-0">
              {d.title_new}
            </Title>
          </Button>
        </li>
        <li>
          <Title tag="h2" className="!m-0">
            /
          </Title>
        </li>
        <li>
          <Button
            variant="simple"
            onClick={handleTopClick}
            className={`${mode ? '!border-transparent' : ' !border-dark'} !px-2`}
          >
            <Title tag="h2" className="!m-0">
              {d.title_top}
            </Title>
          </Button>
        </li>
      </ul>

      <ProductsList data={products} />
    </div>
  );
};

export default NewProduct;
