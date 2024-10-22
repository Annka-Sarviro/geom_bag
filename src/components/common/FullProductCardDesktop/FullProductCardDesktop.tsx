'use client';
import { useEffect, useRef, useState } from 'react';
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
import { FullProductCardDesktopProps, SliderProp } from './FullProductCardDesktop.props';

const FullProductCardDesktop = ({ data }: FullProductCardDesktopProps) => {
  const [nav1, setNav1] = useState<any | null>(null);
  const [nav2, setNav2] = useState<any>(null);
  const [imgCount, setImgCount] = useState<number>(0);

  const slider1 = useRef<Slider | null>(null);
  const slider2 = useRef<Slider | null>(null);

  const length = data.image.length;

  const router = useRouter();
  const searchParams = useSearchParams();
  useEffect(() => {
    if (!nav1 && !nav2) {
      return;
    }
  });

  useEffect(() => {
    length <= 3 ? setImgCount(length - 1) : setImgCount(3);
  }, [length]);

  useEffect(() => {
    setNav1(slider1.current), setNav2(slider2.current);
  }, []);

  const settings1 = {
    infinite: true,
    speed: 500,
    adaptiveHeight: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: 'center',
    centerMode: true,
    autoplay: false,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    arrows: false,
    fade: true,
  };

  const settings2 = {
    infinite: true,
    speed: 500,
    slidesToShow: imgCount,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    swipeToSlide: true,
    focusOnSelect: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    vertical: true,
    verticalSwiping: true,
  };

  const handleClick = () => {
    // setIsFormOpen(true);
    // return setIsCardOpen(false);
    router.push(`${routes.HOME}?${searchParams}&orderModal=true`);
  };
  return (
    <div className="max-w-[896px] smOnly:hidden">
      <div className="flex justify-between	 mb-10 min-h-[350px] ">
        <div className="flex flex-col justify-between">
          <div className="w-[300px]">
            <Title tag="h3" variant="dark">
              {data.name}
            </Title>
            <Paragraph variantFontSize="text" variant="dark" className="!text-base mb-6">
              {d.title.article}
              {data.article}
            </Paragraph>

            <div className=" flex flex-col gap-y-2 ">
              <Paragraph variantFontSize="text" className="!text-base">
                <span className="font-bold">{d.title.material}</span> {data.material}
              </Paragraph>
              <Paragraph variantFontSize="text" className="!text-base">
                <span className="font-bold">{d.title.color}</span>
                {data.color}
              </Paragraph>
              <Paragraph variantFontSize="text" className="!text-base">
                <span className="font-bold">{d.title.size}</span>
                {data.size}
              </Paragraph>
              {data.peculiar.length > 0 && (
                <Paragraph variantFontSize="text" className="!text-base">
                  <span className="font-bold">{d.title.peculiar}</span>
                  {data.peculiar}
                </Paragraph>
              )}
            </div>
          </div>
          <Paragraph className="!text-2xl">
            {data.price} {d.title.price}
          </Paragraph>
        </div>
        <div className="flex items-center gap-x-6">
          <Slider {...settings1} asNavFor={nav2} ref={slider1} className="w-[440px]">
            {data.image.map((item: SliderProp, ind: number) => (
              <DatoImage data={item?.responsiveImage} key={ind} />
            ))}
          </Slider>
          <Slider
            {...settings2}
            asNavFor={nav1}
            ref={slider2}
            className="cardVerticalSlider w-[80px] py-2 cursor-pointer"
          >
            {data.image.map((item: SliderProp, ind: number) => (
              <DatoImage data={item?.responsiveImage} key={ind} />
            ))}
          </Slider>
        </div>
      </div>
      <Paragraph variantFontSize="text" className="!text-base mb-4">
        {data.description}
      </Paragraph>

      {data.recommendations.length > 0 && (
        <Paragraph className="!text-[12px]">
          <span className="font-bold">{d.title.recommendations}</span> {data.recommendations}
        </Paragraph>
      )}

      <Button variant="primary" onClick={handleClick} className="mx-auto mt-4">
        {d.button.text}
      </Button>
    </div>
  );
};

export default FullProductCardDesktop;
