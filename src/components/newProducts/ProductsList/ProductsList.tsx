import ProductCard from '@/components/common/ProductCard/ProductCard';
import { SampleNextArrow } from '@/components/slider/SampleNextArrow';
import { SamplePrevArrow } from '@/components/slider/SamplePrevArrow';
import Slider from 'react-slick';

import { ProductCardProp } from '@/app/page.props';
import Paragraph from '@/components/typography/Paragraph';
import d from '@/data/new_products.json';
import { ProductsListProps } from './ProductsList.props';

const getSlideShowCount = (cardCount: number) => {
  if (cardCount === 0) {
    return;
  }
  return cardCount < 3 ? cardCount : 3;
};

const ProductsList = ({ data }: ProductsListProps) => {
  const cardCount = data.length;
  const slideShowCount = getSlideShowCount(cardCount);

  const settings = {
    infinite: true,
    speed: 500,
    adaptiveHeight: false,
    slidesToShow: slideShowCount,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1080,
        settings: {
          slidesToShow: slideShowCount,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: slideShowCount,
          slidesToScroll: 1,
          dots: false,
          arrows: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
        },
      },
    ],
  };
  return (
    <>
      {cardCount > 0 ? (
        <Slider {...settings}>
          {data.map((item: ProductCardProp) => (
            <ProductCard item={item} key={item.id} />
          ))}
        </Slider>
      ) : (
        <Paragraph centered>{d.noItem}</Paragraph>
      )}
    </>
  );
};

export default ProductsList;
