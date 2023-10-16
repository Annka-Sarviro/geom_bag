'use client';
import React, { createContext, useContext, useState } from 'react';

type FilterContextType = {
  searchfilter: string;
  setSearchfilter: (value: string) => void;
};

type GroupContextType = {
  groupFilter: string;
  setGroupFilter: (value: string) => void;
};

const FilterContext = createContext<FilterContextType | undefined>(undefined);
const GroupContext = createContext<GroupContextType | undefined>(undefined);

export const FilterContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [searchfilter, setSearchfilter] = useState('');

  return (
    <FilterContext.Provider value={{ searchfilter, setSearchfilter }}>
      {children}
    </FilterContext.Provider>
  );
};

export const GroupFilterContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [groupFilter, setGroupFilter] = useState('all');

  return (
    <GroupContext.Provider value={{ groupFilter, setGroupFilter }}>
      {children}
    </GroupContext.Provider>
  );
};

export const useFilterContext = () => {
  const context = useContext(FilterContext);
  if (context === undefined) {
    throw new Error('error');
  }
  return context;
};

export const useGroupContext = () => {
  const context = useContext(GroupContext);
  if (context === undefined) {
    throw new Error('error');
  }
  return context;
};
