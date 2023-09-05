import Paragraph from '@/components/typography/Paragraph/Paragraph';
import Title from '@/components/typography/Title/Title';

const Return = ({ data }: any) => {
  return (
    <div className="container">
      <Title tag="h2">{data.title}</Title>
      <Paragraph variantFontSize="text" variant="dark">
        {data.description}
      </Paragraph>
    </div>
  );
};

export default Return;
