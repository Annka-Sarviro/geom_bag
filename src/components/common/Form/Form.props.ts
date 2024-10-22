export type FormInputs = Record<string, object>;

export interface FormProps {
  orderName: string;
  price: string;

  setIsNotificationOpen: (isNotificationOpen: boolean) => void;
}
