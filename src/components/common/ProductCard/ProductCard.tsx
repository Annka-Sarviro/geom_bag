'use client';

import { useCloseOnEsc } from '@/hooks';
import { useEffect, useState } from 'react';

import { Image as DatoImage } from 'react-datocms';

import FullProductCard from '@/components/common/FullProductCard';
import Modal from '@/components/common/Modal';
import Paragraph from '@/components/typography/Paragraph/Paragraph';
import Title from '@/components/typography/Title';

const ProductCard = ({ item }: any) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = () => {
    setIsModalOpen(!isModalOpen);
  };

  const ModalClose = () => {
    setIsModalOpen(false);
  };

  useCloseOnEsc(() => setIsModalOpen(false));

  useEffect(() => {
    isModalOpen
      ? (document.body.style.overflow = 'hidden')
      : (document.body.style.overflow = 'auto');
  }, [isModalOpen]);

  return (
    <>
      <li
        className="w-full md:w-[270px] flex flex-col items-stretch text-center md:place-self-stretch  px-5 pb-7 mx-auto"
        onClick={handleClick}
      >
        <DatoImage data={item.image[0].responsiveImage} className="mx-auto" />

        <Title variant="dark" tag="h3" className="text-center">
          {item.name}
        </Title>
        <Paragraph variant="dark" className="text-sm md:text-base text-center mb-4">
          {item.article}
        </Paragraph>

        <Paragraph className="!text-accent !font-semibold mt-[auto]">{item.price} грн</Paragraph>
      </li>

      {isModalOpen && (
        <Modal>
          <FullProductCard data={item} />
        </Modal>
      )}
    </>
  );
};

export default ProductCard;
