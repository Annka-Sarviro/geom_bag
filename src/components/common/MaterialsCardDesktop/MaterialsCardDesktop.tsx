import Paragraph from '@/components/typography/Paragraph';
import { MaterialsCardDesktopProps } from './MaterialsCardDesktop.props';

const MaterialsCardDesktop = ({ item }: MaterialsCardDesktopProps) => {
  return (
    <li className={`materialsDesktop${item.imgUrl}  py-8 md:h-[480px]`}>
      <div className="md:max-w-3xl xl:max-w-7xl px-8 mx-auto h-[100%] flex items-center">
        <Paragraph
          variantFontSize="text"
          variant="dark"
          className="md:w-[360px] md:ml-auto xl:w-[468px] pl-6 pr-8"
        >
          <span>{item.name}</span> {item.text}
        </Paragraph>
      </div>
    </li>
  );
};

export default MaterialsCardDesktop;
