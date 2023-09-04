import Paragraph from '@/components/typography/Paragraph/Paragraph';

export const ReviewersCard = ({ item }: any) => {
  return (
    <li className="p-6 w-[280px] md:w-[320px] h-[348px] md:h-[460px]  flex flex-col">
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
    </li>
  );
};
