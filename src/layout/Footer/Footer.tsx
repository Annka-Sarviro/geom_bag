import Contacts from '@/components/common/Contacts';

import { ContactsListProps } from '@/components/common/Contacts/Contacts.props';

const Footer = ({ contacts }: ContactsListProps) => {
  return (
    <footer className="py-8 md:py-[60px] text-dark">
      <div className="container">
        <Contacts contacts={contacts} full />
      </div>
    </footer>
  );
};

export default Footer;
