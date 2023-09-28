import Contacts from '@/components/common/Contacts/Contacts';
import { ContactsListProps } from '@/components/common/Contacts/Contacts.props';
import Title from '@/components/typography/Title/Title';

import data from '@/data/footer.json';

const FooterContact = ({ contacts }: ContactsListProps) => {
  return (
    <div className="md:col-span-2  ">
      <Title tag="h2">{data.title.contact}</Title>
      <Contacts contacts={contacts} full />
    </div>
  );
};

export default FooterContact;
