const useLocalStorage = (key: string) => {
  const setItemStorage = (value: unknown) => {
    window.localStorage.setItem(key, JSON.stringify(value));
  };

  return { setItemStorage };
};
export default useLocalStorage;
