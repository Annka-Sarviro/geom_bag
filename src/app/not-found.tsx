import Section from '@/components/common/Section';
import Title from '@/components/typography/Title';
import { NextPage } from 'next';

import Paragraph from '@/components/typography/Paragraph';
import d from '@/data/404.json';
import Link from 'next/link';

const NotFound: NextPage = () => {
  return (
    <Section variant="hero" className="!bg-white">
      <div className="container text-center">
        <Title tag="h2" className="!my-20">
          {d.title}
        </Title>
        <Paragraph className="mb-6">{d.subtitle}</Paragraph>
        <Link
          className="mb-[234px] mx-auto flex w-full max-w-[240px] cursor-pointer items-center justify-center rounded-sm border-2 border-solid p-[10px] text-xl border-dark bg-dark text-white duration-300 hover:bg-white focus:bg-white hover:text-dark focus:text-dark"
          href={d.button.main.link}
        >
          {d.button.main.name}
        </Link>
        <Paragraph className="mb-6">{d.text}</Paragraph>
        <Link
          className="mx-auto flex w-full max-w-[240px] cursor-pointer items-center justify-center rounded-sm border-2 border-solid p-[10px] text-xl border-whit bg-white text-dark duration-300 hover:bg-dark focus:bg-dark hover:text-white focus:text-white hover:border-dark focus:border-dark"
          href={d.button.products.link}
        >
          {d.button.products.name}
        </Link>
      </div>
    </Section>
  );
};

export default NotFound;
