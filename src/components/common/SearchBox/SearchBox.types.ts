export interface ISearchBoxProps<T> {
  className?: string;
  data?: T[];
  filterKey: string;
  onSelect?: (item: T) => void;
  selectedValue?: string;
  placeholder: string;
}
