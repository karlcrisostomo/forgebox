import {
  ChangeEvent,
  memo,
  KeyboardEvent,
  useCallback,
  useEffect,
  useState,
} from "react";
import { ISearchBoxProps } from "./SearchBox.types";
import { Input } from "@chakra-ui/react";
import styles from "./styles.module.scss";
import classNames from "classnames";
import { loadGoogleFont } from "@/utils";
import { highlightSearchMatch } from "@/utils/highlightSearchMatch";

const SearchBox = <TData extends Record<string, unknown>>({
  data,
  filterKey,
  onSelect,
  selectedValue,
  className,
  placeholder = "Search...",
}: ISearchBoxProps<TData>) => {
  const [filteredData, setFilteredData] = useState<TData[]>(data ?? []);
  const [inputValue, setInputValue] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number>(-1);

  useEffect(() => {
    if (data) {
      setFilteredData(data);
    }
  }, [data]);

  useEffect(() => {
    if (data) {
      data.forEach((item) => {
        const fontFamily = String(item[filterKey]);
        loadGoogleFont(fontFamily);
      });
    }
  }, [data, filterKey]);

  const handleSelect = useCallback(
    (item: TData) => {
      onSelect?.(item);
      // Don't clear input value, show the selected font name
      setInputValue(String(item[filterKey]));
      setIsOpen(false);
    },
    [filterKey, onSelect],
  );

  const handleKeyDown = useCallback(
    (e: KeyboardEvent<HTMLInputElement>) => {
      if (!isOpen) return;

      switch (e.key) {
        case "ArrowDown":
          e.preventDefault();
          setActiveIndex((prev) =>
            prev < filteredData.length - 1 ? prev + 1 : prev,
          );
          break;
        case "ArrowUp":
          e.preventDefault();
          setActiveIndex((prev) => (prev > 0 ? prev - 1 : prev));
          break;
        case "Enter":
          e.preventDefault();
          if (activeIndex >= 0) {
            handleSelect(filteredData[activeIndex]);
          }
          break;
        case "Escape":
          setIsOpen(false);
          setActiveIndex(-1);
          break;
      }
    },
    [filteredData, handleSelect, activeIndex, isOpen],
  );

  // Reset active index when filtered data changes
  useEffect(() => {
    if (activeIndex >= 0) {
      const activeElement = document.querySelector(`.${styles.active}`);
      activeElement?.scrollIntoView({ block: "nearest" });
    }
  }, [activeIndex]);

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

  useEffect(() => {
    if (selectedValue) {
      setInputValue(selectedValue);
    }
  }, [selectedValue]);

  return (
    <div className={classNames(styles.searchBoxContainer, className)}>
      <div className={styles.inputWrapper}>
        <Input
          className={styles.searchBar}
          placeholder={placeholder}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          value={inputValue}
          type="text"
          onClick={() => setIsOpen(true)}
        />
      </div>

      {isOpen && filteredData.length > 0 && (
        <ul className={styles.dropdown}>
          {filteredData.map((item, idx) => {
            const value = String(item[filterKey]);
            return (
              <li
                key={value}
                onClick={() => handleSelect(item)}
                className={classNames(styles.dropdownItem, {})}
                style={{
                  fontFamily: value,
                  backgroundClip: activeIndex ? "red" : "blue",
                }}
                onMouseEnter={() => setActiveIndex(idx)}
              >
                {highlightSearchMatch(value, inputValue)}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};
SearchBox.displayName = "SearchBox";

export default memo(SearchBox) as typeof SearchBox;
