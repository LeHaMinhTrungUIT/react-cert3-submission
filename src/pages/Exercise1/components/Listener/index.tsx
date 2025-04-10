import React from "react";
import { useGetStorageItem } from "../../../../hooks/localStorage";

const ListenerComponent = () => {
  const storageList = useGetStorageItem();

  return (
    <div>
      <h2>Listener Component</h2>
      {storageList.map((item) => (
        <div key={item.key}>
          <span>Key: {item.key}</span> <span>Value: {item.value}</span>
        </div>
      ))}
    </div>
  );
};

export default ListenerComponent;
