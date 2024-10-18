'use client';

import { useState } from 'react';

import IconButton from '@/components/button/IconButton';
import data from '@/data/header.json';
import { useRouter } from 'next/navigation';
import { scroller } from 'react-scroll';
import SearchSvg from '.././../../../public/svg/search.svg';

const SearchInput = () => {
  const router = useRouter();
  const [searchBags, setSearchBags] = useState('');

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchBags(e.currentTarget.value.trim());
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const burgerMenu = document.getElementById('mobile_menu_overlay');
    if (burgerMenu && burgerMenu.classList.contains('open')) {
      burgerMenu.classList.remove('open');
      document.body.classList.remove('no-scroll');
    }

    router.push(`/?filter=${searchBags}`);
    scroller.scrollTo('all_products', {
      duration: 800,
      offset: -50,
      smooth: 'easeInOutQuart',
    });
    setSearchBags('');
  };

  return (
    <>
      <form
        id="search_form"
        onSubmit={handleSubmit}
        className="flex items-center gap-x-4 justify-center relative"
      >
        <IconButton
          label={data.buttons.searchButton.label}
          onClick={handleSubmit}
          disabled={searchBags ? false : true}
        >
          <SearchSvg width={30} height={30} className="w-[30px] h-[30px] " />
        </IconButton>

        <input
          id="input_search"
          type="search"
          name="query"
          placeholder={data.search}
          value={searchBags}
          onChange={handleSearchChange}
          className="py-[6px] px-6 md:py-2 w-[290px] md:w-[250px] xl:w-[360px] text-base  border border-dark placeholder:!text-sm md:placeholder:text-xl placeholder:text-gray_light"
        />
      </form>
    </>
  );
};

export default SearchInput;
