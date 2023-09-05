import Paragraph from '@/components/typography/Paragraph/';
import Link from 'next/link';

const GroupMenuCard = ({ item, title }: any) => {
  const data = item.responsiveImage.src;

  return (
    <li
      style={{
        backgroundImage: `radial-gradient(
            122.97% 68.68% at 50% 50%,
            rgba(29, 29, 29, 0.242) 0%,
            rgba(29, 29, 29, 0.56) 58.33%,
            #1d1d1d 90%,
            #1d1d1d 90%
          ),url(${data})`,
      }}
      className={`h-[380px] md:h-[480px] bg-cover bg-center bg-no-repeat`}
    >
      <Link href={'/'} className=" h-full w-full p-4 flex items-end">
        <Paragraph variantFontSize="text" variant="white" className="">
          {title}
        </Paragraph>
      </Link>
    </li>
  );
};

export default GroupMenuCard;
