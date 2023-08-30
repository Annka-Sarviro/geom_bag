import Paragraph from '@/components/typography/Paragraph';

const MaterialsCardMobile = ({ data }: any) => {
  return (
    <ul className="flex flex-col gap-y-6 py-7 materialsMobile px-2.5">
      {data.map((item: any, ind: number) => {
        return (
          <li key={ind}>
            <Paragraph variantFontSize="text" variant="white">
              <span className="font-bold">{item.name}</span> {item.text}
            </Paragraph>
          </li>
        );
      })}
    </ul>
  );
};

export default MaterialsCardMobile;
