import Paragraph from '@/components/typography/Paragraph';
import { ContactsListProps } from './Contacts.props';

import InstagramImg from '../../../../public/svg/instagram.svg';
import PhoneImg from '../../../../public/svg/phone.svg';
import TelegramImg from '../../../../public/svg/telegram.svg';
import ViberImg from '../../../../public/svg/viber.svg';

const Contacts = (props: ContactsListProps) => {
  const contacts = props.contacts;
  const full = props.full;
  return (
    <ul className={`flex gap-x-12 ${full ? 'grid grid-rows-2 grid-flow-col gap-y-[13px]' : ''}`}>
      <li className="flex gap-x-3">
        <PhoneImg width={30} height={30} className="h-[30px] w-[30px]" />
        <Paragraph>{contacts.tel}</Paragraph>
      </li>
      <li className="flex gap-x-3">
        <TelegramImg width={30} height={30} className="h-[30px] w-[30px]" />
        <Paragraph>{contacts.telegram}</Paragraph>
      </li>
      <li className={`flex gap-x-3 ${!full ? 'hidden' : ''}`}>
        <ViberImg width={30} height={30} className="h-[30px] w-[30px]" />
        <Paragraph>{contacts.viber}</Paragraph>
      </li>
      <li className={`flex gap-x-3 ${!full ? 'hidden' : ''}`}>
        <InstagramImg width={30} height={30} className="h-[30px] w-[30px]" />
        <Paragraph>{contacts.instagram}</Paragraph>
      </li>
    </ul>
  );
};

export default Contacts;
