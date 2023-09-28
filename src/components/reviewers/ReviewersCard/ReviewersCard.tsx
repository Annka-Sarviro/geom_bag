import Paragraph from '@/components/typography/Paragraph/Paragraph';
import Link from 'next/link';
import { ReviewersCardProps } from './ReviewersCard.props';

const ReviewersCard = ({ item }: ReviewersCardProps) => {
  return (
    <Link
      target={item.link ? 'blank' : ''}
      rel={item.link ? 'noopener noreferrer nofollow' : ''}
      href={item.link || '/#reviewers'}
      className="w-full h-[348px] md:h-[460px] block "
    >
      <div className=" max-w-[280px] md:max-w-[320px] mx-[auto] p-6 flex flex-col h-full">
        <Paragraph
          variant="dark"
          variantFontSize="text"
          className="underline underline-offset-4 mb-4"
        >
          {item.product.name}
        </Paragraph>
        <div className=" flex flex-col justify-between h-full">
          <Paragraph variant="dark" variantFontSize="reviewers" className="line-clamp-[10] ">
            {item.text}
          </Paragraph>
          <Paragraph variant="dark" variantFontSize="text" className="!text-sm mt-auto">
            {item.name}
          </Paragraph>
        </div>
      </div>
    </Link>
  );
};

export default ReviewersCard;
