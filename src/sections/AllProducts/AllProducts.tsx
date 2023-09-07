'use client';

import d from '@/data/all_products.json';

import AllProductsList from '@/components/allProducts/AllProductsList';
import Filter from '@/components/allProducts/Filter';
import Button from '@/components/button/Button/Button';
import SearchInput from '@/components/common/SearchInput/SearchInput';
import Paragraph from '@/components/typography/Paragraph/Paragraph';
import Title from '@/components/typography/Title';
import { useEffect, useState } from 'react';

const AllProducts = ({ data }: any) => {
  const [pageCount, setPageCount] = useState(1);
  const [disabled, setDisabled] = useState(false);
  const [cardData, setCardData] = useState([]);
  const [filter, setFilter] = useState('all');
  // const [filteredData, setFiltered] = useState();
  const [nameFilter, setNameFilter] = useState('');
  const cardQuantity = 8;

  useEffect(() => {
    data.length <= cardData.length ? setDisabled(true) : setDisabled(false);
  }, [cardData, data]);

  useEffect(() => {
    if (nameFilter) {
      const filtered = data.filter(
        (item: any) =>
          item.name.toLowerCase().includes(nameFilter.toLowerCase().trim()) ||
          item.article.toLowerCase().includes(nameFilter.toLowerCase().trim())
      );

      filtered ? setCardData(filtered.slice(0, cardQuantity * pageCount)) : setCardData([]);
    } else if (filter === 'all') {
      setCardData(data.slice(0, cardQuantity * pageCount));
    } else {
      setCardData(
        data.filter((item: any) => item.category === filter).slice(0, cardQuantity * pageCount)
      );
    }
  }, [data, cardQuantity, pageCount, filter, nameFilter]);

  const handleClick = () => {
    setPageCount(pageCount + 1);
  };

  return (
    <div className="container">
      <Title tag="h2" variant="dark">
        {d.title}
      </Title>
      <Filter
        filters={d.filter}
        setFilter={setFilter}
        setPageCount={setPageCount}
        setDisabled={setDisabled}
      />
      <SearchInput setNameFilter={setNameFilter} />
      {cardData.length === 0 || !data ? (
        <Paragraph variant="dark">{d.errorText} </Paragraph>
      ) : (
        <>
          <AllProductsList data={cardData} />
          <Button variant="secondary" disabled={disabled} className="mx-auto" onClick={handleClick}>
            {d.button.text}
          </Button>
        </>
      )}
    </div>
  );
};

export default AllProducts;
