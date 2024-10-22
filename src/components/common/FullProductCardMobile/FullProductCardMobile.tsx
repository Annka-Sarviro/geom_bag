import { Image as DatoImage } from 'react-datocms';
import Slider from 'react-slick';

import { SampleNextArrow } from '@/components/slider/SampleNextArrow';
import { SamplePrevArrow } from '@/components/slider/SamplePrevArrow';

import Button from '@/components/button/Button/';
import Paragraph from '@/components/typography/Paragraph/';
import Title from '@/components/typography/Title';

import d from '@/data/full_product_card.json';
import { routes } from '@/utils/routs';
import { useRouter, useSearchParams } from 'next/navigation';
import { SliderProp } from '../FullProductCardDesktop/FullProductCardDesktop.props';
import { FullProductCardMobileProps } from './FullProductCardMobile.props';

const FullProductCardMobile = ({ data }: FullProductCardMobileProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const settings = {
    infinite: true,
    speed: 500,
    adaptiveHeight: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,

    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          arrows: true,
        },
      },
    ],
  };

  const handleClick = () => {
    router.push(`${routes.HOME}?${searchParams}&orderModal=true`);
  };
  return (
    <div className="w-[80vw] md:hidden">
      <Slider {...settings} className="fullCardSlider">
        {data?.image.map((item: SliderProp, ind: number) => (
          <DatoImage data={item?.responsiveImage} key={ind} />
        ))}
      </Slider>

      <Title tag="h3" variant="dark" centered className="">
        {data?.name}
      </Title>
      <Paragraph variantFontSize="text" variant="dark" centered className="text-sm mb-3">
        {d.title.article}
        {data.article}
      </Paragraph>
      <Paragraph centered variantFontSize="text" className="!text-xl mb-3">
        {data.price} {d.title.price}
      </Paragraph>

      <Button variant="primary" onClick={handleClick} className="mx-auto mb-3">
        {d.button.text}
      </Button>
      <div className="flex flex-col gap-y-3 mb-4">
        <Paragraph variantFontSize="text">
          <span className="font-bold">{d.title.material}</span> {data.material}
        </Paragraph>
        <Paragraph variantFontSize="text">
          <span className="font-bold">{d.title.color}</span>
          {data.color}
        </Paragraph>
        <Paragraph variantFontSize="text">
          <span className="font-bold">{d.title.size}</span>
          {data.size}
        </Paragraph>
        {data.peculiar.length > 0 && (
          <Paragraph variantFontSize="text">
            <span className="font-bold">{d.title.peculiar}</span>
            {data.peculiar}
          </Paragraph>
        )}

        <Paragraph variantFontSize="text" className="text-sm">
          {data.description}
        </Paragraph>
        {data.recommendations.length > 0 && (
          <Paragraph className="text-[10px]">
            <span className="font-bold">{d.title.recommendations}</span> {data.recommendations}
          </Paragraph>
        )}
      </div>
      <Button variant="primary" onClick={handleClick} className="mx-auto">
        {d.button.text}
      </Button>
    </div>
  );
};

export default FullProductCardMobile;
