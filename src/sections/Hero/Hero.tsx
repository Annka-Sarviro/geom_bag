import LinkButton from '@/components/button/LinkButton';
import Paragraph from '@/components/typography/Paragraph';
import Title from '@/components/typography/Title';

import Image from 'next/image';
import { Image as DatoImage } from 'react-datocms';

import d from '@/data/hero.json';

import { HeroProps } from './Hero.props';

const Hero = (data: HeroProps) => {
  const { title, buttonText, image, subtitle } = data;

  return (
    <>
      <div
        className={`smOnly:hidden flex basis-1/2 relative h-[875px]  xl:h-[875px]'
          }`}
      >
        <div className=" w-full h-full relative overflow-hidden">
          <Image
            src={image[0]?.url}
            alt={image[0].alt || ''}
            sizes="50vw"
            priority={true}
            fill
            className=" object-cover object-center hover:scale-[1.1] duration-1000 brightness-50 saturate-75 hover:brightness-90 hover:saturate-100"
          />
        </div>
        <div className=" w-full h-full flex flex-col">
          <div className=" basis-7/12 relative overflow-hidden">
            <Image
              src={image[1].url}
              alt={image[1].alt || ''}
              fill
              sizes="50vw"
              priority={true}
              className=" object-cover object-center hover:scale-[1.1] duration-1000 brightness-50 saturate-75 hover:brightness-90 hover:saturate-100"
            />
          </div>
          <div className=" basis-5/12 relative overflow-hidden">
            <Image
              src={image[2].url}
              alt={image[2].alt || ''}
              fill
              sizes="50vw"
              priority={true}
              className=" object-cover object-center hover:scale-[1.1] duration-1000 brightness-50 saturate-75 hover:brightness-90 hover:saturate-100"
            />
          </div>
        </div>
      </div>

      <div className="w-full h-full md:hidden">
        <DatoImage
          data={image[0].responsiveImage}
          className={`w-full h-full  scale-[1.0] hover:scale-[1.1] duration-1000 brightness-50 saturate-75 hover:brightness-90 hover:saturate-100`}
        />
      </div>

      <div className=" absolute left-0 right-0 bottom-10 container flex items-end pb-10 xl:pb-20 smOnly:justify-center md:left-[calc(50%_-_378px)] xl:left-[calc(50%_-_634px)] md:right-auto md:w-fit">
        <div className="relative z-10 ">
          <Title tag="h1" variant="light" className="mb-0 ">
            {title}
          </Title>
          <Paragraph variant="hero" className="mb-14 md:mb-9">
            {subtitle}
          </Paragraph>
          <LinkButton
            scroll
            href={d.button.href}
            variant="secondary"
            offset={-80}
            className=" smOnly:mx-auto"
          >
            {buttonText}
          </LinkButton>
        </div>
      </div>
    </>
  );
};

export default Hero;
