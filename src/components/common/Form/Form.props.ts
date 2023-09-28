export type FormInputs = Record<string, object>;

export interface FormProps {
  orderName: string;
  price: string;

  setIsModalOpen: (isModalOpen: boolean) => void;
  setIsNotificationOpen: (isNotificationOpen: boolean) => void;
}
