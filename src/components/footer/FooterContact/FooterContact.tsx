import Contacts from '@/components/common/Contacts/Contacts';
import Title from '@/components/typography/Title/Title';

const FooterContact = ({ data, contacts }: any) => {
  return (
    <div className="md:col-span-2  ">
      <Title tag="h2">{data.title.contact}</Title>
      <Contacts contacts={contacts} full />
    </div>
  );
};

export default FooterContact;
