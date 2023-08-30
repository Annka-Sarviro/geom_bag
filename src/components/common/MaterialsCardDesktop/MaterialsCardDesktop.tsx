import Paragraph from '@/components/typography/Paragraph';

const MaterialsCardDesktop = ({ item }: any) => {
  return (
    <li className={`materialsDesktop${item.imgUrl}`}>
      <Paragraph variantFontSize="text" variant="white">
        <span>{item.name}</span> {item.text}
      </Paragraph>
    </li>
  );
};

export default MaterialsCardDesktop;
