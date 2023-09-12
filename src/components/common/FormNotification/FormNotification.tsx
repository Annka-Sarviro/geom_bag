import d from '@/data/form.json';
import FormNotificationProps from './FormNotification.props';

function FormNotification(props: FormNotificationProps) {
  const { subText, forError } = props;
  return (
    <div className="before:w-[106px] before:h-[130px] before:bg-[url('/assets/images/notification/notification-bg.png')] before:content='' before:absolute before:bottom-[14px] before:left-[3%] bg-no-repeat text-center">
      <h2 className="max-w-[242px] mx-auto mb-6 text-[32px] leading-[1.12] text-purple-80 font-cormorant">
        {forError ? d.messages.oops : d.messages.ok}
      </h2>
      <p
        className={`${
          forError ? 'text-red-400' : 'text-[#222222]'
        } max-w-[242px] mx-auto leading-[24px]`}
      >
        {subText}
      </p>
    </div>
  );
}

export default FormNotification;
