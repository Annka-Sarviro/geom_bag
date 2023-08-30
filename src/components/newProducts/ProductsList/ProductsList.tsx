import ProductCard from '@/components/common/ProductCard/ProductCard';

const ProductsList = ({ data }: any) => {
  return (
    <ul className="flex">
      {data.map((item: any) => (
        <ProductCard item={item} key={item.id} />
      ))}
    </ul>
  );
};

export default ProductsList;
