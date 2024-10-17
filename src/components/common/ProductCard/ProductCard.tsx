'use client';

import useBreakpoints from '@/hooks/useBreakpoints';
import { useEffect, useState } from 'react';

import { Image as DatoImage } from 'react-datocms';

import OrderForm from '@/components/OrderForm/OrderForm';
import Modal from '@/components/common/Modal';
import Paragraph from '@/components/typography/Paragraph/Paragraph';
import Title from '@/components/typography/Title';
import Link from 'next/link';
import FullProductCardDesktop from '../FullProductCardDesktop';
import FullProductCardMobile from '../FullProductCardMobile/FullProductCardMobile';
import { ProductCardProps } from './ProductCard.props';

const ProductCard = (props: ProductCardProps) => {
  const item = props.item;
  const isModalOpen = props.isModalOpen;
  const { less1040px } = useBreakpoints();
  const [isCardOPen, setIsCardOpen] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleClick = () => {
    setIsCardOpen(true);
  };

  useEffect(() => {
    isModalOpen
      ? (document.body.style.overflow = 'hidden')
      : (document.body.style.overflow = 'auto');
  }, [isModalOpen]);

  return (
    <>
      <Link
        className="w-full mx-auto max-w-[300px]  flex flex-col items-stretch text-center md:place-self-stretch  px-5 pb-7 cursor-pointer"
        onClick={handleClick}
        href={`/?searchId=${item.article}&isModalOpen=true`}
      >
        <div className="mb-2">
          <DatoImage
            data={item.image[0].responsiveImage}
            className="mx-auto hover:scale-[1.1] duration-1000"
          />
        </div>
        <Title variant="dark" tag="h3" className="text-center line-clamp-3">
          {item.name}
        </Title>
        <Paragraph variant="dark" className="text-sm md:text-base text-center mb-4">
          {item.article}
        </Paragraph>

        <Paragraph className="!text-2xl mt-[auto]">{item.price} грн</Paragraph>
      </Link>

      {isModalOpen && (
        <Modal>
          {isCardOPen ? (
            less1040px ? (
              <FullProductCardMobile
                data={item}
                setIsCardOpen={setIsCardOpen}
                setIsFormOpen={setIsFormOpen}
              />
            ) : (
              <FullProductCardDesktop
                data={item}
                setIsCardOpen={setIsCardOpen}
                setIsFormOpen={setIsFormOpen}
              />
            )
          ) : (
            <div>
              <OrderForm item={item} />
            </div>
          )}
        </Modal>
      )}
    </>
  );
};

export default ProductCard;
