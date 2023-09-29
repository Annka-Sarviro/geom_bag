'use client';

import { useFilterContext, useGroupContext } from '@/app/context';
import { ProductCardProp } from '@/app/page.props';
import { useEffect, useState } from 'react';

import AllProductsList from '@/components/allProducts/AllProductsList';
import Filter from '@/components/allProducts/Filter';
import Button from '@/components/button/Button/Button';
import IconButton from '@/components/button/IconButton';
import SearchInput from '@/components/common/SearchInput/SearchInput';
import Paragraph from '@/components/typography/Paragraph/Paragraph';
import Title from '@/components/typography/Title';
import d from '@/data/all_products.json';
import Close from '../../../public/svg/close.svg';
import { AllProductsProps } from './AllProducts.props';

const AllProducts = ({ data }: AllProductsProps) => {
  const [pageCount, setPageCount] = useState(1);
  const [disabled, setDisabled] = useState(false);
  const [cardData, setCardData] = useState<ProductCardProp[]>([]);
  const { searchfilter, setSearchfilter } = useFilterContext();
  const { groupFilter, setGroupFilter } = useGroupContext();
  const [filteredData, setFilteredData] = useState<ProductCardProp[]>([]);

  const cardQuantity = 8;
  const allPageCount = data.length / cardQuantity;

  useEffect(() => {
    groupFilter === 'all'
      ? setFilteredData(data)
      : setFilteredData(data.filter((item: ProductCardProp) => item.category === groupFilter));
  }, [data, groupFilter]);

  useEffect(() => {
    if (searchfilter) {
      const filtered = filteredData.filter(
        (item: ProductCardProp) =>
          item.name.toLowerCase().includes(searchfilter.toLowerCase().trim()) ||
          item.article.toLowerCase().includes(searchfilter.toLowerCase().trim())
      );

      filtered.length > 0
        ? setCardData(filtered.slice(0, cardQuantity * pageCount))
        : setCardData([]);
    } else {
      setCardData(filteredData.slice(0, cardQuantity * pageCount));
    }
  }, [filteredData, pageCount, searchfilter]);

  useEffect(() => {
    if (cardData.length < cardQuantity) {
      setDisabled(true);
    } else allPageCount > pageCount ? setDisabled(false) : setDisabled(true);
  }, [data, pageCount, allPageCount, cardData]);

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
        setPageCount={setPageCount}
        setDisabled={setDisabled}
        setSearchfilter={setSearchfilter}
      />

      <SearchInput />

      {cardData.length === 0 || !data ? (
        <div className="flex justify-center items-center  mt-4">
          {searchfilter.length > 0 ? (
            <>
              <Paragraph variant="dark" centered>
                {d.nullSearch.start} &quot;{searchfilter}&quot; {d.nullSearch.end}
                {d.errorText}
              </Paragraph>
              <IconButton
                label={d.button.resetsearch}
                onClick={() => setSearchfilter('')}
                className="ml-4"
              >
                <Close className="h-8 w-8 fill-accent" />
              </IconButton>
            </>
          ) : (
            <Paragraph centered variant="dark">
              {d.nodata}
            </Paragraph>
          )}
        </div>
      ) : (
        <>
          {searchfilter && (
            <div className="relative">
              <div className="flex justify-center items-center  mt-4 absolute inset-x-0 bottom-[-30px]">
                <Paragraph variant="dark" centered>
                  {d.searchText} <span>&quot;</span>
                  {searchfilter} <span>&quot;</span>
                </Paragraph>
                <IconButton
                  label={d.button.resetsearch}
                  onClick={() => setSearchfilter('')}
                  className="ml-4"
                >
                  <Close className="h-8 w-8 fill-accent" />
                </IconButton>
              </div>
            </div>
          )}
          <AllProductsList data={cardData} />
          {!disabled && (
            <Button
              variant="secondary"
              disabled={disabled}
              className="mx-auto"
              onClick={handleClick}
            >
              {d.button.loadmore}
            </Button>
          )}
        </>
      )}
    </div>
  );
};

export default AllProducts;
