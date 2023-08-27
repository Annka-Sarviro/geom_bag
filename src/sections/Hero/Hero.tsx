'use client';

// import IconButton from '@/components/button/IconButton';
import LinkButton from '@/components/button/LinkButton';
import Paragraph from '@/components/typography/Paragraph/';
import Title from '@/components/typography/Title';

// import Icon from '../../../public/svg/close.svg';

const Hero = () => {
  // const handleClick = () => {
  //   return console.log('click');
  // };

  return (
    <div className="container bg-gray">
      <Title tag="h1" variant="light">
        GEOM BAGS
      </Title>
      <Paragraph variant="hero">perfect line for your style</Paragraph>
      <LinkButton scroll disabled href="new_product" variant="simple">
        New
      </LinkButton>
      {/* <IconButton label="кнопка закриття">
        <Icon className="w-[40px] h-[40px]" onClick={handleClick} />
      </IconButton> */}
    </div>
  );
};

export default Hero;
