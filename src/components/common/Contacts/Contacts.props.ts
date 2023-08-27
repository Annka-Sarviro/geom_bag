export interface ContactsProps {
  telegram: string;
  tel: string;
  email: string;
  viber: string;
  instagram: string;
  address: string;
  id: number;
}

export interface ContactsListProps {
  contacts: ContactsProps;
  full?: boolean;
}
