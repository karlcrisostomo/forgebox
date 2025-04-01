import { ChangeEvent, memo, useCallback, useEffect, useState } from "react";
import { ISearchBoxProps } from "./SearchBox.types";
import { Input } from "@chakra-ui/react";
import styles from "./styles.module.scss";

const SearchBox = <TData extends Record<string, unknown>>({
  data,
  filterKey,
  onSelect,
  selectedValue,
  placeholder = "Search...",
}: ISearchBoxProps<TData>) => {
  const [filteredData, setFilteredData] = useState<TData[]>(data ?? []);
  const [inputValue, setInputValue] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (data) {
      setFilteredData(data);
    }
  }, [data]);

  const handleInputChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const query = e.target.value;
      setInputValue(query);
      setIsOpen(true);

      if (!query) {
        setFilteredData(data ?? []);
        return;
      }

      const filtered = data?.filter((item) =>
        String(item[filterKey]).toLowerCase().includes(query.toLowerCase()),
      );
      setFilteredData(filtered ?? []);
    },
    [data, filterKey],
  );
  const handleSelect = (item: TData) => {
    onSelect?.(item);
    // Don't clear input value, show the selected font name
    setInputValue(String(item[filterKey]));
    setIsOpen(false);
  };

  useEffect(() => {
    if (selectedValue) {
      setInputValue(selectedValue);
    }
  }, [selectedValue]);

  return (
    <div className={styles.searchBoxContainer}>
      <div className={styles.inputWrapper}>
        <Input
          placeholder={placeholder}
          onChange={handleInputChange}
          value={inputValue}
          type="text"
          onClick={() => setIsOpen(true)}
        />
        {selectedValue && (
          <div
            className={styles.selectedFont}
            style={{ fontFamily: selectedValue }}
          >
            {selectedValue}
          </div>
        )}
      </div>

      {isOpen && filteredData.length > 0 && (
        <div className={styles.dropdown}>
          {filteredData.map((item) => (
            <li
              key={String(item[filterKey])}
              onClick={() => handleSelect(item)}
              className={styles.dropdownItem}
              style={{ fontFamily: String(item[filterKey]) }}
            >
              {String(item[filterKey])}
            </li>
          ))}
        </div>
      )}
    </div>
  );
};
SearchBox.displayName = "SearchBox";

export default memo(SearchBox) as typeof SearchBox;
