import ReviewersList from '@/components/reviewers/ReviewersList';
import { ReviewersProps } from './Reviewers.props';

import Title from '@/components/typography/Title/Title';
import d from '@/data/reviewers.json';

const Reviewers = ({ data }: ReviewersProps) => {
  return (
    <div className="container reviewers">
      <Title tag="h2">{d.title}</Title>
      <ReviewersList data={data} />
    </div>
  );
};

export default Reviewers;
