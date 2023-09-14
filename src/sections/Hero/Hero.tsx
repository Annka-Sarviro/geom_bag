'use client';

import LinkButton from '@/components/button/LinkButton';
import Paragraph from '@/components/typography/Paragraph';
import Title from '@/components/typography/Title';
import useBreakpoints from '@/hooks/useBreakpoints';
import { Image as DatoImage } from 'react-datocms';

import d from '@/data/hero.json';

import { HeroProps } from './Hero.props';

const Hero = (data: HeroProps) => {
  const { title, description, buttonText, image, name, subtitle } = data;
  const { bigger940px } = useBreakpoints();

  return (
    <>
      <div
        className={`mx-auto picture_thumb ${
          bigger940px ? ' h-[calc(100vh_-_150px)] flex ' : ''
        }  w-full overflow-hidden`}
      >
        <div className={`${bigger940px ? '  object-cover ' : 'w-[auto] h-full'} overflow-hidden `}>
          <DatoImage
            data={image[0].responsiveImage}
            className={`${
              bigger940px ? 'min-w-full' : ' !w-auto max-w-[100%]'
            } h-full  scale-[1.0] hover:scale-[1.1] duration-1000 brightness-50 saturate-75 hover:brightness-90 hover:saturate-100`}
          />
        </div>
        <div className="flex flex-col">
          <div
            className={`${
              bigger940px ? 'h-3/5 ' : 'hidden'
            } overflow-hidden flex justify-center items-center `}
          >
            <DatoImage
              data={image[1].responsiveImage}
              className={`min-h-full hover:scale-[1.1] duration-1000 brightness-50 saturate-75 hover:brightness-90 hover:saturate-100`}
            />
          </div>
          <div
            className={`${
              bigger940px ? 'h-2/5 ' : 'hidden'
            } overflow-hidden   !object-cover  flex justify-center items-center`}
          >
            <DatoImage
              data={image[2].responsiveImage}
              className={`min-h-full hover:scale-[1.1] duration-1000 brightness-50 saturate-75 hover:brightness-90 hover:saturate-100`}
            />
          </div>
        </div>
      </div>
      <div className=" absolute left-0 right-0 bottom-10 container flex items-end pb-10 xl:pb-20 smOnly:justify-center">
        <div className="relative z-10 ">
          <Title tag="h1" variant="light" className="mb-0 ">
            {title}
          </Title>
          <Paragraph variant="hero" className="mb-14 md:mb-9">
            {subtitle}
          </Paragraph>
          <LinkButton scroll href={d.button.href} variant="secondary">
            {buttonText}
          </LinkButton>
        </div>
      </div>
    </>
  );
};

export default Hero;
