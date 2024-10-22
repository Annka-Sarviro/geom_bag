import { Image as DatoImage } from 'react-datocms';

import Paragraph from '@/components/typography/Paragraph/Paragraph';
import Title from '@/components/typography/Title';
import Link from 'next/link';
import { ProductCardProps } from './ProductCard.props';

const ProductCard = (props: ProductCardProps) => {
  const item = props.item;

  return (
    <>
      <Link
        className="w-full mx-auto max-w-[300px]  flex flex-col items-stretch text-center md:place-self-stretch  px-5 pb-7 cursor-pointer"
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
    </>
  );
};

export default ProductCard;
