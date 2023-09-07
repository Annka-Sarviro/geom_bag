// MyContext.tsx
'use client';
import React, { createContext, useContext, useState } from 'react';

type FilterContextType = {
  searchfilter: string;
  setSearchfilter: any;
};

const FilterContext = createContext<FilterContextType | undefined>(undefined);

export const FilterContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [searchfilter, setSearchfilter] = useState('');

  return (
    <FilterContext.Provider value={{ searchfilter, setSearchfilter }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  const context = useContext(FilterContext);
  if (context === undefined) {
    throw new Error('error');
  }
  return context;
};
