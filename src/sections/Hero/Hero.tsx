'use client';

import Paragraph from '@/components/typography/Paragraph/';
import Title from '@/components/typography/Title';

// import heroData from '@/data/hero.json';
import { HeroProps } from './Hero.props';

const Hero = (data: HeroProps) => {
  const { title, description, buttonText, image, name, subtitle } = data;
  // const handleClick = () => {
  //   return console.log('click');
  // };

  return (
    <div className="container  ">
      <Title tag="h1" variant="light">
        {title}
      </Title>
      <Paragraph variant="hero">{subtitle}</Paragraph>
      {/* <LinkButton scroll disabled href={heroData.button.href} variant="simple">
        {buttonText}
      </LinkButton> */}
    </div>
  );
};

export default Hero;
