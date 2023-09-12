import { ContactsProps } from '@/components/common/Contacts/Contacts.props';
import { ItemProps } from '@/layout/Header/Header.props';

export interface NavigationProps {
  contacts: ContactsProps;
  list: ItemProps[];
  isOpen: boolean;
  setNavbarOpen?: any;
}
