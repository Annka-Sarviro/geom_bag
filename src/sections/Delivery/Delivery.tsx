import Paragraph from '@/components/typography/Paragraph/Paragraph';
import Title from '@/components/typography/Title/Title';
import { DeliveryProps } from './Delivery.props';

const Delivery = ({ data }: DeliveryProps) => {
  return (
    <div className="container">
      <Title tag="h2">{data.title}</Title>
      <Paragraph variantFontSize="text" variant="dark" className="whitespace-pre-wrap">
        {data.description}
      </Paragraph>
    </div>
  );
};

export default Delivery;
