import { Image as DatoImage } from 'react-datocms';

import Form from '../common/Form';
import Paragraph from '../typography/Paragraph';
import Title from '../typography/Title';

import d from '@/data/form.json';
import { useState } from 'react';
import { OrderFormProps } from './OrderForm.props';

const OrderForm = ({ item }: OrderFormProps) => {
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  return (
    <div className="w-[80vw] md:max-w-[620px]">
      {!isNotificationOpen && (
        <div>
          <Title tag="h3" centered>
            {d.title}
          </Title>
          <div className="w-[120px] h-[120px] mx-auto">
            <DatoImage data={item?.image[0].responsiveImage} />
          </div>
          <Paragraph className="" centered>
            {item.name}
          </Paragraph>
          <Paragraph className="!text-dark" centered>
            {item.price} {d.price}
          </Paragraph>
        </div>
      )}

      <Form
        orderName={item.name}
        price={item.price}
        setIsNotificationOpen={setIsNotificationOpen}
      />
    </div>
  );
};

export default OrderForm;
