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
      <li>
        <a
          href={`tel:${contacts.tel}`}
          className="flex gap-x-3  hover:text-accent hover:fill-accent duration-300"
          target="blank"
          rel="noopener noreferrer nofollow"
        >
          <PhoneImg width={30} height={30} className="h-[30px] w-[30px] fill-inherit" />
          <Paragraph className="text-inherit">{contacts.tel}</Paragraph>
        </a>
      </li>
      <li>
        <a
          href={contacts.telegram}
          className="flex gap-x-3 hover:text-accent hover:fill-accent duration-300"
          target="blank"
          rel="noopener noreferrer nofollow"
        >
          <TelegramImg width={30} height={30} className="h-[30px] w-[30px] fill-inherit" />
          <Paragraph className="text-inherit">{contacts.telegram}</Paragraph>
        </a>
      </li>
      <li className={` ${!full ? 'hidden' : ''}`}>
        <a
          href={`viber://chat?number=%2B${contacts.viber}`}
          className="flex gap-x-3 hover:text-accent hover:fill-accent duration-300"
          target="blank"
          rel="noopener noreferrer nofollow"
        >
          <ViberImg width={30} height={30} className="h-[30px] w-[30px] fill-inherit" />
          <Paragraph className="text-inherit">{contacts.viber}</Paragraph>
        </a>
      </li>
      <li className={` ${!full ? 'hidden' : ''}`}>
        <a
          href={contacts.instagram}
          target="blank"
          rel="noopener noreferrer nofollow"
          className="flex gap-x-3 hover:text-accent hover:fill-accent duration-300"
        >
          <InstagramImg width={30} height={30} className="h-[30px] w-[30px] fill-inherit" />
          <Paragraph className="text-inherit">{contacts.instagram}</Paragraph>
        </a>
      </li>
    </ul>
  );
};

export default Contacts;
