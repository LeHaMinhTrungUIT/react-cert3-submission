import React from "react";
import FilterDropdown from "../FilterDropdown";

const Example1 = ({ data }: any) => {
  const onSelect = (value: string) => {
    alert(`You selected ${value}`);
  };
  return (
    <div>
      <h3>Example 1</h3>
      <p>Search with key is name</p>
      <br/>
      <FilterDropdown
        data={data}
        fieldPath="name"
        valueChange={onSelect}
        placeholder="Search name"
      />
    </div>
  );
};

export default Example1;
