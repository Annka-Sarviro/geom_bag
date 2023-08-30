import d from '@/data/advantages.json';

import Paragraph from '@/components/typography/Paragraph/';
import Title from '@/components/typography/Title/';

const Advantages = ({ data }: any) => {
  return (
    <div className="container ">
      <div className=" flex flex-col gap-y-3 md:gap-y-8 xl:gap-y-14 md:w-[360px] md:ml-auto xl:w-[616px]">
        <Title className="hidden">{d.title}</Title>
        <Paragraph variant="dark" variantFontSize="text" className="smOnly:text-white md:pl-6">
          <span className="font-bold">{d.text1.bold}</span>
          {d.text1.regular}
        </Paragraph>
        <Paragraph variant="dark" variantFontSize="text" className="smOnly:text-white md:pl-6">
          <span className="font-bold">{d.text2.bold}</span>
          {d.text2.regular}
        </Paragraph>
        <Paragraph variant="dark" variantFontSize="text" className="smOnly:text-white md:pl-6">
          <span className="font-bold">{d.text3.bold}</span>
          {d.text3.regular}
        </Paragraph>
      </div>
    </div>
  );
};

export default Advantages;
