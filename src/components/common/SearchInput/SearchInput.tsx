import { useState } from 'react';

import data from '@/data/header.json';
import SearchSvg from '.././../../../public/svg/search.svg';

const SearchInput = () => {
  const [searchParams, setSearchParams] = useState();
  const query = searchParams;

  const [searchBags, setSearchBags] = useState(query ?? '');

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchBags(e.currentTarget.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(searchBags);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="flex items-center">
        <SearchSvg className="w-[30px] h-[30px] mr-4 " />
        <input
          type="search"
          name="query"
          autoFocus
          placeholder={data.search}
          onChange={handleSearchChange}
          className="py-[6px] px-6 md:py-2 w-[290px] md:w-360px border border-dark placeholder:text-base md:placeholder:text-xl placeholder:text-gray_light"
        />
      </form>
    </>
  );
};

export default SearchInput;
