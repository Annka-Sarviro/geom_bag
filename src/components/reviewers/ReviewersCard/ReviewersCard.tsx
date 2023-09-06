import Paragraph from '@/components/typography/Paragraph/Paragraph';

const ReviewersCard = ({ item }: any) => {
  return (
    <div className="w-full h-[348px] md:h-[460px]  flex flex-col">
      <div className=" max-w-[280px] md:max-w-[320px] mx-[auto] p-6 ">
        <Paragraph
          variant="dark"
          variantFontSize="text"
          className="underline underline-offset-4 mb-4"
        >
          {item.product.name}
        </Paragraph>
        <Paragraph variant="dark" variantFontSize="reviewers" className="line-clamp-[11] mb-4">
          {item.text}
        </Paragraph>
        <Paragraph variant="dark" variantFontSize="text" className="!text-sm mt-auto">
          {item.name}
        </Paragraph>
      </div>
    </div>
  );
};

export default ReviewersCard;
