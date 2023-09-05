import FooterContact from '@/components/footer/FooterContact/FooterContact';
import FooterNav from '@/components/footer/FooterNav';

import { ContactsListProps } from '@/components/common/Contacts/Contacts.props';
import Logo from '../Logo/Logo';

import data from '@/data/footer.json';

const Footer = ({ contacts }: ContactsListProps) => {
  return (
    <footer className="py-8 md:py-[60px] text-dark" id="contacts">
      <div className="container flex items-center flex-col gap-y-6 xl:flex-row xl:justify-between">
        <Logo />
        <FooterNav data={data} />
        <FooterContact contacts={contacts} data={data} />
      </div>
    </footer>
  );
};

export default Footer;
