import { useCallback, useEffect, useState } from "react";
import { getAllStorageItem } from "../utils/localStorage";

type LocalStorageItem = {
  key: string;
  value: string;
};

export const useGetStorageItem = () => {
  const [storageItemList, setStorageItemList] = useState<LocalStorageItem[]>(
    []
  );

  const getAllStorageByEvent = useCallback((e: StorageEvent) => {
    setStorageItemList(getAllStorageItem());
  }, []);

  useEffect(() => {
    window.addEventListener("storage", getAllStorageByEvent);
    setStorageItemList(getAllStorageItem());

    return () => {
      window.removeEventListener("storage", getAllStorageByEvent);
    };
  }, [getAllStorageByEvent]);

  return storageItemList;
};
