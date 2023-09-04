import { ReviewersList } from '@/components/reviewers/ReviewersList';

import Title from '@/components/typography/Title/Title';
import d from '@/data/reviewers.json';

export const Reviewers = ({ data }: any) => {
  return (
    <div className="container">
      <Title tag="h2">{d.title}</Title>
      <ReviewersList data={data} />
    </div>
  );
};
