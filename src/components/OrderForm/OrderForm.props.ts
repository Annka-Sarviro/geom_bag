import { ProductCardProp } from '@/app/page.props';

export interface OrderFormProps {
  item: ProductCardProp;
  setIsModalOpen: (isModalOpen: boolean) => void;
}
