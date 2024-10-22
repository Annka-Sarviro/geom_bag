import { ProductCardProp } from '@/app/page.props';

export interface AllProductsListProps {
  data: ProductCardProp[];
  isModalOpen: boolean;

  orderModal: boolean;
  item: ProductCardProp;
}
