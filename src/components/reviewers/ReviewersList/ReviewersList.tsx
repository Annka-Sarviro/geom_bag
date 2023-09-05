import { ReviewersCard } from '../ReviewersCard';

export const ReviewersList = ({ data }: any) => {
  return (
    <ul className="md:flex  md:justify-center md:gap-x-2">
      {data.map((item: any, ind: number) => (
        <ReviewersCard item={item} key={ind} />
      ))}
    </ul>
  );
};
