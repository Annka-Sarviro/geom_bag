'use client';

import { ProductCardProp } from '@/app/page.props';
import { useEffect, useState } from 'react';

import AllProductsList from '@/components/allProducts/AllProductsList';
import Filter from '@/components/allProducts/Filter';
import Button from '@/components/button/Button/Button';
import IconButton from '@/components/button/IconButton';
import SearchInput from '@/components/common/SearchInput';
import Paragraph from '@/components/typography/Paragraph/Paragraph';
import Title from '@/components/typography/Title';
import d from '@/data/all_products.json';
import { routes } from '@/utils/routs';
import { useRouter } from 'next/navigation';
import Close from '../../../public/svg/close.svg';

const AllProducts = ({
  data,
  filter,
  groupFilter,
  searchId,
  isModalOpen,
  orderModal,
}: {
  data: ProductCardProp[];
  filter: string;
  groupFilter: string;
  searchId: string;
  isModalOpen: boolean;
  orderModal: boolean;
}) => {
  const [pageCount, setPageCount] = useState(1);
  const [disabled, setDisabled] = useState(false);
  const [cardData, setCardData] = useState<ProductCardProp[]>([]);
  const [filteredData, setFilteredData] = useState<ProductCardProp[]>([]);
  const getItem = (id: string) => {
    const search = data.filter(el => el.article.toLocaleLowerCase() === id?.toLowerCase());
    return search[0];
  };
  const item = getItem(searchId);
  const cardQuantity = 8;
  const allPageCount = data.length / cardQuantity;
  const router = useRouter();

  useEffect(() => {
    if (groupFilter) {
      const element = document.getElementById('all_products');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [groupFilter]);

  useEffect(() => {
    if (searchId && !isModalOpen) {
      const element = document.getElementById('all_products');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [searchId, isModalOpen]);

  useEffect(() => {
    if (filter) {
      const element = document.getElementById('all_products');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [filter, isModalOpen]);

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
  }, [filteredData, pageCount, filter, searchId]);

  useEffect(() => {
    groupFilter === 'all' || !groupFilter
      ? setFilteredData(data)
      : setFilteredData(data.filter((item: ProductCardProp) => item.category === groupFilter));
  }, [data, groupFilter]);

  useEffect(() => {
    if (cardData.length < cardQuantity) {
      setDisabled(true);
    } else allPageCount > pageCount ? setDisabled(false) : setDisabled(true);
  }, [data, pageCount, allPageCount, cardData]);

  useEffect(() => {
    if (searchId) {
      const filteredData = data.filter((item: ProductCardProp) => item.article === searchId);

      if (JSON.stringify(filteredData) !== JSON.stringify(cardData)) {
        setCardData(filteredData);
      }
    }
  }, [data, searchId, cardData]);

  const handleClick = () => {
    setPageCount(pageCount + 1);
  };

  const handleResetSearch = () => {
    router.push(routes.HOME, { scroll: false });
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
              <div className="flex justify-center items-center  mt-4 absolute inset-x-0 bottom-[-46px] md:bottom-[-30px]">
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
          <AllProductsList
            data={cardData}
            isModalOpen={isModalOpen}
            orderModal={orderModal}
            item={item}
          />
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
