import Paragraph from '@/components/typography/Paragraph';
import Title from '@/components/typography/Title';
import d from '@/data/form.json';
import FormNotificationProps from './FormNotification.props';

function FormNotification(props: FormNotificationProps) {
  const { subText, forError } = props;
  return (
    <div className="before:w-[106px] before:h-[130px]  text-center">
      <Title tag="h3" className="max-w-[242px] mx-auto mb-6 ">
        {forError ? d.messages.oops : d.messages.ok}
      </Title>
      <Paragraph
        variantFontSize="text"
        className={`${forError ? 'text-red-400' : 'text-[#222222]'} max-w-[242px] mx-auto `}
      >
        {subText}
      </Paragraph>
    </div>
  );
}

export default FormNotification;
