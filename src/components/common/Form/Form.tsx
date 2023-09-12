import { useState } from 'react';
import { useForm } from 'react-hook-form';
import useFormPersist from 'react-hook-form-persist';

import Button from '@/components/button/Button';
import FormInput from '@/components/common/FormInput';
import FormNotification from '@/components/common/FormNotification';
import Loader from '@/components/common/Loader';

// import sendToTlg from 'services/api/sendToTlg';
import FormInputs from '@/components/common/Form/Form.props';
import fieldsParams from '@/components/common/Form/fieldsParams';

import Paragraph from '@/components/typography/Paragraph';
import d from '@/data/form.json';

const Form = ({ orderName, price }: any) => {
  const [isSending, setIsSending] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [finalMessage, setFinalMessage] = useState<string | null>(null);

  const STORAGE_KEY = 'orderForm';

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

  const onSubmitHandler = async (data: FormInputs) => {
    try {
      setIsSending(true);

      const sendData = { ...data, orderName, price };
      console.log(sendData);
      //   const result = await sendToTlg(data);
      //   if (result.ok) {
      //     setIsSending(false);
      //     setFinalMessage('Незабаром наш менеджер звʼяжеться з вами');
      //     reset();
      //     sessionStorage.removeItem(STORAGE_KEY);
      //   }
    } catch (error) {
      setIsSending(false);
      setError(true);
      setFinalMessage('Щось пішло не так');
    }
  };

  return !error && !finalMessage ? (
    <div className="relative">
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        {d.fields.map((field, ind) => (
          <>
            <Paragraph variantFontSize="text">{field.label}</Paragraph>
            <FormInput
              key={ind}
              data={field}
              reg={register}
              errors={errors}
              options={fieldsParams[field.name as keyof typeof fieldsParams]}
            />
          </>
        ))}
        <Button type="submit">{d.button.text}</Button>
      </form>
      {isSending && <Loader />}
    </div>
  ) : error ? (
    <FormNotification forOrdering forError subText={finalMessage} />
  ) : (
    <FormNotification forOrdering subText={finalMessage} />
  );
};

export default Form;
