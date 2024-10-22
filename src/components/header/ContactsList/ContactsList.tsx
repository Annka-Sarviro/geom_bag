import Contacts from '@/components/common/Contacts/Contacts';
import { ContactsListProps } from '@/components/common/Contacts/Contacts.props';
import SearchInput from '@/components/common/SearchInput/SearchInput';

const ContactsList = ({ contacts }: ContactsListProps) => {
  return (
    <div className="flex items-center md:justify-between md:mb-10 xl:mb-6 smOnly:flex-col">
      <Contacts contacts={contacts} />
      <SearchInput />
    </div>
  );
};

export default ContactsList;
