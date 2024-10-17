export interface FiltersProps {
  name: string;
  id: string;
}

export interface FilterProps {
  filters: FiltersProps[];
  setPageCount: (pageCount: number) => void;
  setDisabled: (disabled: boolean) => void;
  groupFilter: string;
}
