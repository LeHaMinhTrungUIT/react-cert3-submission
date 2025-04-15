export const setValue = (key: string, value: string) => {
  const oldValue = getValue(key);
  localStorage.setItem(key, value);

  const event = new StorageEvent("storage", {
    key,
    oldValue,
    newValue: value,
    storageArea: localStorage,
    url: window.location.href,
  });
  window.dispatchEvent(event);
};

export const getValue = (key: string) =>
  key in localStorage ? localStorage.getItem(key) : "";

export const getAllStorageItem = () => {
  let storageList = [];
  for (let index = 0; index < localStorage.length; index++) {
    let key = localStorage.key(index);
    if (key !== null) {
      const value = getValue(key);
      if (value !== null) {
        storageList.push({ key, value });
      }
    }
  }
  return storageList;
};
