import MaterialsCardDesktop from '@/components/common/MaterialsCardDesktop';

const MaterialsList = ({ data }: any) => {
  return (
    <ul>
      {data.map((item: any, ind: number) => {
        return <MaterialsCardDesktop item={item} key={ind} />;
      })}
    </ul>
  );
};

export default MaterialsList;
