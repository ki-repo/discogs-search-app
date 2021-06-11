import { QueryCache } from 'react-query';

const asyncLocalStorage = {
  setItem: (key: string, value: any) => {
    return Promise.resolve().then(() => {
      localStorage.setItem(key, value);
    });
  },
  getItem: (key: string) => {
    return Promise.resolve().then(function () {
      return localStorage.getItem(key);
    });
  },
};

// Persist to wherever using the super-secret object
const writeToStorage = async (queryKey: string, data: any) => {
  let storageData = await asyncLocalStorage.getItem('queries');

  storageData = {
    ...JSON.parse(storageData ?? '{}'),
    [queryKey]: data,
  };
  asyncLocalStorage.setItem('queries', JSON.stringify(storageData));
};

// Hydrate from localStorage

const readFromStorage = async () => {
  const storageData = await asyncLocalStorage.getItem('queries');

  if (storageData !== null) {
    const queriesWithData = JSON.parse(storageData);

    for (const queryKey in queriesWithData) {
      const data = queriesWithData[queryKey];
      const queryKeyParsed = JSON.parse(queryKey);
    //   queryCache.setQueryData(queryKeyParsed, data);
    }
  }
};

export { readFromStorage, writeToStorage };
