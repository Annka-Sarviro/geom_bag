import ProductCard from '@/components/common/ProductCard/';

const AllProductsList = ({ data }: any) => {
  return (
    <ul className="smOnly:flex smOnly:flex-col sm:justify-center md:grid md:grid-cols-2 xl:grid-cols-4 md:gap-8 justify-center mt-5 md:mt-10 mb-10 md:mb-14">
      {data.map((item: any) => {
        return <ProductCard key={item.id} item={item} />;
      })}
    </ul>
  );
};

export default AllProductsList;
