'use client';

import { Image as DatoImage } from 'react-datocms';

import LinkButton from '@/components/button/LinkButton/LinkButton';
import Paragraph from '@/components/typography/Paragraph/';
import Title from '@/components/typography/Title';

import heroData from '@/data/hero.json';
import { HeroProps } from './Hero.props';

const Hero = (data: HeroProps) => {
  const { title, description, buttonText, image, name, subtitle } = data;
  // const handleClick = () => {
  //   return console.log('click');
  // };

  return (
    <>
      <div className="mx-auto picture_thumb absolute left-0 right-0 xl:grid xl:grid-flow-col xl:grid-rows-[60%_40%] h-[530px] w-[auto] xl:h-[875px] xl:max-w-[1480px]">
        <DatoImage
          data={image[0].responsiveImage}
          className="xl:row-span-2 h-[100%] w-[auto] max-w-[100%] mx-auto"
        />

        <DatoImage data={image[1].responsiveImage} className="notXl:invisible" />
        <DatoImage data={image[2].responsiveImage} className="notXl:invisible" />
      </div>
      <div className="container h-[100%] flex items-end pb-10 xl:pb-20 smOnly:justify-center">
        <div className="relative z-10 ">
          <Title tag="h1" variant="light" className="mb-0 ">
            {title}
          </Title>
          <Paragraph variant="hero" className="mb-14 md:mb-9">
            {subtitle}
          </Paragraph>
          <LinkButton scroll href={heroData.button.href} variant="secondary">
            {buttonText}
          </LinkButton>
        </div>
      </div>
    </>
  );
};

export default Hero;
