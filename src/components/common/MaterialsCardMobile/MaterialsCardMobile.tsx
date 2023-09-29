import Paragraph from '@/components/typography/Paragraph';
import { MaterialsCardProps } from '../MaterialsCardDesktop/MaterialsCardDesktop.props';
import { MaterialsCardMobileProps } from './MaterialsCardMobile.props';

const MaterialsCardMobile = ({ data }: MaterialsCardMobileProps) => {
  return (
    <ul className="flex flex-col gap-y-6 py-7 materialsMobile px-2.5">
      {data.map((item: MaterialsCardProps, ind: number) => {
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
