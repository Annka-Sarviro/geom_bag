import { ProductCardProp } from '@/app/page.props';

export interface FullProductCardMobileProps {
  data: ProductCardProp;
  setIsCardOpen: (isCardOpen: boolean) => void;
  setIsFormOpen: (isFormOpen: boolean) => void;
}
