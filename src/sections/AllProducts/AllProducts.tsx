'use client';

import d from '@/data/all_products.json';

import AllProductsList from '@/components/allProducts/AllProductsList';
import Filter from '@/components/allProducts/Filter';
import Button from '@/components/button/Button/Button';
import SearchInput from '@/components/common/SearchInput/SearchInput';
import Title from '@/components/typography/Title';

const AllProducts = ({ data }: any) => {
  const handleClick = () => {
    return console.log('click');
  };

  return (
    <div className="container">
      <Title tag="h2" variant="dark">
        {d.title}
      </Title>
      <Filter filters={d.filter} />
      <SearchInput />
      <AllProductsList data={data} />
      <Button variant="secondary" className="mx-auto" onClick={handleClick}>
        {d.button.text}
      </Button>
    </div>
  );
};

export default AllProducts;
