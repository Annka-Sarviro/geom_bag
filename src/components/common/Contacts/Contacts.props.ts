export interface ContactsProps {
  telegram: string;
  tel: string;
  email: string;
  viber: string;
  instagram: string;
  address: string;
  id: number;
  telegramTitle: string;
  viberTitle: string;
  instagramTitle: string;
}

export interface ContactsListProps {
  contacts: ContactsProps;
  closeNavbar?: any;
  full?: boolean;
}
