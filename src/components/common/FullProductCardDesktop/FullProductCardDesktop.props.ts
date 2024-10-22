import { ProductCardProp } from '@/app/page.props';
import { ResponsiveImageType } from 'react-datocms';

export interface FullProductCardDesktopProps {
  data: ProductCardProp;
}

export interface SliderProp {
  responsiveImage: ResponsiveImageType;
}
