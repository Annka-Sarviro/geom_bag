import { Image as DatoImage } from 'react-datocms';

import Form from '../common/Form';
import Paragraph from '../typography/Paragraph';
import Title from '../typography/Title';

import d from '@/data/form.json';

const OrderForm = ({ item }: any) => {
  return (
    <div>
      <div>
        <Title tag="h2">{d.title}</Title>
        <DatoImage data={item?.image[0].responsiveImage} />
        <Paragraph variantFontSize="text"> {item.name}</Paragraph>
        <Paragraph>
          {item.price} {d.price}
        </Paragraph>
      </div>
      <Form orderName={item.name} price={item.price} />
    </div>
  );
};

export default OrderForm;
