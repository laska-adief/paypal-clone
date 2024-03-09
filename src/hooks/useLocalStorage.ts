const useLocalStorage = (key: string) => {
  const setItemStorage = (value: unknown) => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.log(error);
    }
  };

  return { setItemStorage };
};
export default useLocalStorage;
