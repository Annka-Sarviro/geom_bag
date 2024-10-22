import { useState } from 'react';
import { useForm } from 'react-hook-form';
import useFormPersist from 'react-hook-form-persist';

import Button from '@/components/button/Button';
import FormInput from '@/components/common/FormInput';
import FormNotification from '@/components/common/FormNotification';

import fieldsParams from '@/components/common/Form/fieldsParams';
import sendToTlg from '@/services/api/sendToTlg';

import { FormProps } from '@/components/common/Form/Form.props';
import Paragraph from '@/components/typography/Paragraph';
import d from '@/data/form.json';
import { routes } from '@/utils/routs';
import { useRouter } from 'next/navigation';

const Form = ({ orderName, price, setIsNotificationOpen }: FormProps) => {
  const [isSending, setIsSending] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [finalMessage, setFinalMessage] = useState<string | null>(null);

  const STORAGE_KEY = 'orderForm';
  const router = useRouter();
  const {
    formState: { errors },
    handleSubmit,
    register,
    reset,
    watch,
    setValue,
  } = useForm({
    mode: 'all',
  });

  const isBrowser = typeof window != 'undefined';
  useFormPersist(STORAGE_KEY, {
    watch,
    setValue,
    storage: isBrowser ? window.sessionStorage : undefined,
  });

  const onSubmitHandler = async (data: any) => {
    try {
      setIsSending(true);

      const sendData = { ...data, orderName, price };

      const result = await sendToTlg(sendData);
      if (result.ok) {
        setIsSending(false);
        setFinalMessage(d.messages.sent);
        setIsNotificationOpen(true);
        setTimeout(() => {
          router.push(routes.HOME, {
            scroll: false,
          });
        }, 4000);
        reset();
        sessionStorage.removeItem(STORAGE_KEY);
      }
    } catch (error) {
      setIsSending(false);
      setError(true);
      setIsNotificationOpen(true);
      setFinalMessage(d.messages.error);
    }
  };

  return !error && !finalMessage ? (
    <div className="relative">
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        {d.fields.map((field, ind) => (
          <div key={ind} className="mb-2 ">
            <Paragraph variantFontSize="text">{field.label}</Paragraph>
            <FormInput
              key={ind}
              data={field}
              reg={register}
              errors={errors}
              options={fieldsParams[field.name as keyof typeof fieldsParams]}
            />
          </div>
        ))}
        <Button type="submit" className="mx-auto mt-4" disabled={isSending ? true : false}>
          {isSending ? d.button.sending : d.button.text}
        </Button>
      </form>
    </div>
  ) : error ? (
    <FormNotification forError subText={finalMessage} />
  ) : (
    <FormNotification subText={finalMessage} />
  );
};

export default Form;
