import { ProductCardProp } from '@/app/page.props';
import ProductCard from '@/components/common/ProductCard/';
import { AllProductsListProps } from './AllProductsList.props';

const AllProductsList = ({ data }: AllProductsListProps) => {
  return (
    <ul className="smOnly:flex smOnly:flex-col sm:justify-center md:grid md:grid-cols-2 xl:grid-cols-4 md:gap-8 justify-center mt-5 md:mt-10 mb-10 md:mb-14">
      {data.map((item: ProductCardProp, ind: number) => {
        return <ProductCard key={ind} item={item} />;
      })}
    </ul>
  );
};

export default AllProductsList;
