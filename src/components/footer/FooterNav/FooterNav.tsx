import Title from '@/components/typography/Title/Title';
import Link from 'next/link';

const FooterNav = ({ data }: any) => {
  return (
    <div>
      <Title>{data.title.menu}</Title>
      <ul className="grid grid-cols-2  gap-y-[13px] md:gap-x-24 ">
        {data.links.map((item: any, ind: number) => {
          return (
            <li key={ind} className="hover:text-accent duration-500">
              <Link href={item.link} scroll={item.scroll}>
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FooterNav;
