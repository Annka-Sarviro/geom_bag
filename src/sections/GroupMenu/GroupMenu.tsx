import Title from '@/components/typography/Title/Title';
import d from '@/data/groupMenu.json';

import GroupMenuCard from '@/components/groupMenu/GroupMenuCard';

const GroupMenu = ({ data }: any) => {
  return (
    <div>
      <Title tag="h2" className="hidden">
        {d.title}
      </Title>
      <ul className="grid xl:grid-cols-3 md:grid-cols-3 grid-cols-1">
        {data.image.map((item: any, ind: number) => {
          return (
            <GroupMenuCard item={item} key={ind} title={d.group[ind].name} id={d.group[ind].id} />
          );
        })}
      </ul>
    </div>
  );
};

export default GroupMenu;
