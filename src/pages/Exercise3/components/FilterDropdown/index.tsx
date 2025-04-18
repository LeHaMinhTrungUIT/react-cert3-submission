import React, { useEffect, useState } from "react";
import "./style.scss";

interface IFilterDropdownProps {
  data: any[];
  placeholder?: string;
  fieldPath: string;
  valueChange: (value: string) => void;
}
const FilterDropdown = ({
  data,
  placeholder = "Search",
  fieldPath,
  valueChange,
}: IFilterDropdownProps) => {
  const [filteredOptions, setFilteredOptions] = useState<string[]>([]);
  const [searchValue, setSearchValue] = useState<string>("");
  const [isVisibleOptions, setIsVisibleOptions] = useState<boolean>(false);
  const getValueByPath = (obj: any, path: string) => {
    return path.split(".").reduce((acc, key) => acc?.[key], obj) ?? "";
  };

  const onChangeSearchText = (value: string) => {
    setSearchValue(value);
    setIsVisibleOptions(value ? true : false);
    setFilteredOptions(
      data
        .map((d) => getValueByPath(d, fieldPath))
        .filter((d: any) => d.toLowerCase().includes(value.toLowerCase()))
    );
  };

  const renderOptionText = (text: string) => {
    if (!searchValue) return <p>{text}</p>;
    if (!text) return <></>;

    const regex = new RegExp(`(${searchValue})`, "gi");
    const parts = text.split(regex);

    return (
      <p>
        {parts.map((part, index) =>
          part.toLowerCase() === searchValue.toLowerCase() ? (
            <b key={index}>{part}</b>
          ) : (
            part
          )
        )}
      </p>
    );
  };

  const onSelectOption = (value: string) => {
    onChangeSearchText(value);
    valueChange(value);
    setIsVisibleOptions(false);
  };

  const onFocusSearch = () => {
    searchValue && setIsVisibleOptions(true);
  };

  useEffect(() => {
    data.length > 0 &&
      setFilteredOptions(
        data.map((d) => getValueByPath(d, fieldPath)).filter((d) => d)
      );
  }, [data, fieldPath]);

  return (
    <div className="filter-dropdown">
      <input
        className="text-input"
        placeholder={placeholder}
        onChange={(e) => onChangeSearchText(e.target.value)}
        onFocus={onFocusSearch}
        value={searchValue}
      />
      {isVisibleOptions && (
        <div className="options-container">
          {filteredOptions.length > 0 ? (
            filteredOptions.map((opt: string, index: number) => (
              <div
                onClick={() => onSelectOption(opt)}
                className="option"
                key={`${opt}-${index}`}
              >
                {renderOptionText(opt)}
              </div>
            ))
          ) : (
            <p>No result found!</p>
          )}
        </div>
      )}
    </div>
  );
};

export default FilterDropdown;
