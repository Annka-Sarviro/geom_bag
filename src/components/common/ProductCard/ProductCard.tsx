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
        className="w-[280px] md:w-[300px] flex flex-col items-center gap-y-4"
        onClick={handleClick}
      >
        <DatoImage data={item.image[0].responsiveImage} />
        <div>
          <Title variant="dark" tag="h3" className="text-center">
            {item.name}
          </Title>
          <Paragraph variant="dark" className="text-sm md:text-base text-center">
            {item.article}
          </Paragraph>
        </div>

        <Paragraph className="!text-accent !font-semibold">{item.price} грн</Paragraph>
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
