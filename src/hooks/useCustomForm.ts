// import { BaseSyntheticEvent, useState } from 'react';
// import {
//   useForm,
//   UseFormReturn,
//   FieldErrors,
//   FieldValues,
//   SubmitHandler,
// } from 'react-hook-form';

// export type FormInputs = Record<string, object>;

// type UseCustomFormProps = {
//   onSubmit: SubmitHandler<FormInputs>;
// };

// type UseCustomFormResult = {
//   isError: boolean;
//   isSuccess: boolean;
//   isLoading: boolean;
//   disabled: boolean;
//   handleSubmit: (
//     event: BaseSyntheticEvent<object> | undefined,
//   ) => Promise<void>;
//   register: UseFormReturn<FormInputs>['register'];
//   watch: UseFormReturn<FormInputs>['watch'];
//   setValue: UseFormReturn<FormInputs>['setValue'];
//   errors: FieldErrors<FieldValues>;
// };

// export const useCustomForm = ({
//   onSubmit,
// }: UseCustomFormProps): UseCustomFormResult => {
//   const [isError, setIsError] = useState(false);
//   const [isSuccess, setIsSuccess] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const [disabled, setDisabled] = useState(false);

//   const {
//     register,
//     handleSubmit,
//     watch,
//     setValue,
//     reset,
//     formState: { errors },
//   } = useForm<FormInputs>();

//   const submitForm = async (data: FormInputs) => {
//     setIsLoading(true);
//     try {
//       await onSubmit(data);
//       reset();
//       setDisabled(true);
//       setIsSuccess(true);
//     } catch (error) {
//       console.error(error);
//       setIsError(true);
//       setIsSuccess(false);
//       setDisabled(false);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return {
//     isError,
//     isSuccess,
//     isLoading,
//     disabled,
//     handleSubmit: handleSubmit(submitForm),
//     register,
//     watch,
//     setValue,
//     errors,
//   };
// };
