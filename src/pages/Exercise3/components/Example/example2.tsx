import React from "react";
import FilterDropdown from "../FilterDropdown";

const Example2 = ({ data }: any) => {
  const onSelect = (value: string) => {
    alert(`You selected ${value}`);
  };
  return (
    <div>
      <h3>Example 2</h3>
      <p>Search with key is address.city</p>
      <br />
      <FilterDropdown
        data={data}
        fieldPath="address.city"
        valueChange={onSelect}
        placeholder="Search name"
      />
    </div>
  );
};

export default Example2;
