'use client';

import { ProductCardProp } from '@/app/page.props';
import { useEffect, useState } from 'react';
import { scroller } from 'react-scroll';

import AllProductsList from '@/components/allProducts/AllProductsList';
import Filter from '@/components/allProducts/Filter';
import Button from '@/components/button/Button/Button';
import IconButton from '@/components/button/IconButton';
import SearchInput from '@/components/common/SearchInput';
import Paragraph from '@/components/typography/Paragraph/Paragraph';
import Title from '@/components/typography/Title';
import d from '@/data/all_products.json';
import { useRouter } from 'next/navigation';
import Close from '../../../public/svg/close.svg';

const AllProducts = ({
  data,
  filter,
  groupFilter,
  searchId,
  isModalOpen,
}: {
  data: ProductCardProp[];
  filter: string;
  groupFilter: string;
  searchId: string;
  isModalOpen: boolean;
}) => {
  const [pageCount, setPageCount] = useState(1);
  const [disabled, setDisabled] = useState(false);
  const [cardData, setCardData] = useState<ProductCardProp[]>([]);

  const [filteredData, setFilteredData] = useState<ProductCardProp[]>([]);

  const cardQuantity = 8;
  const allPageCount = data.length / cardQuantity;
  const router = useRouter();
  console.log('isModalOpen', isModalOpen);
  useEffect(() => {
    if (searchId) {
      scroller.scrollTo('all_products', {
        duration: 800,
        offset: -50,
        smooth: 'easeInOutQuart',
      });
    }
  }, [searchId]);

  useEffect(() => {
    groupFilter === 'all' || !groupFilter
      ? setFilteredData(data)
      : setFilteredData(data.filter((item: ProductCardProp) => item.category === groupFilter));
  }, [data, groupFilter]);

  useEffect(() => {
    !searchId
      ? setFilteredData(data)
      : setFilteredData(data.filter((item: ProductCardProp) => item.article === searchId));
  }, [data, searchId]);

  useEffect(() => {
    if (filter) {
      const filtered = filteredData.filter(
        (item: ProductCardProp) =>
          item.name.toLowerCase().includes(filter.toLowerCase().trim()) ||
          item.article.toLowerCase().includes(filter.toLowerCase().trim())
      );

      filtered.length > 0
        ? setCardData(filtered.slice(0, cardQuantity * pageCount))
        : setCardData([]);
    } else {
      setCardData(filteredData.slice(0, cardQuantity * pageCount));
    }
  }, [filteredData, pageCount, filter]);

  useEffect(() => {
    if (cardData.length < cardQuantity) {
      setDisabled(true);
    } else allPageCount > pageCount ? setDisabled(false) : setDisabled(true);
  }, [data, pageCount, allPageCount, cardData]);

  const handleClick = () => {
    setPageCount(pageCount + 1);
  };

  const handleResetSearch = () => {
    router.push('/', { scroll: false });
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
        groupFilter={groupFilter}
      />

      <SearchInput />

      {cardData.length === 0 || !data ? (
        <div className="flex justify-center items-center  mt-4">
          {filter?.length > 0 ? (
            <>
              <Paragraph variant="dark" centered>
                {d.nullSearch.start} &quot;{filter}&quot; {d.nullSearch.end}
                {d.errorText}
              </Paragraph>
              <IconButton label={d.button.resetsearch} onClick={handleResetSearch} className="ml-4">
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
          {(filter || searchId) && (
            <div className="relative">
              <div className="flex justify-center items-center  mt-4 absolute inset-x-0 bottom-[-30px]">
                <Paragraph variant="dark" centered>
                  {d.searchText} <span>&quot;</span>
                  {searchId ? searchId : filter} <span>&quot;</span>
                </Paragraph>
                <IconButton
                  label={d.button.resetsearch}
                  onClick={handleResetSearch}
                  className="ml-4"
                >
                  <Close className="h-8 w-8 fill-accent" />
                </IconButton>
              </div>
            </div>
          )}
          <AllProductsList data={cardData} isModalOpen={isModalOpen} />
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
