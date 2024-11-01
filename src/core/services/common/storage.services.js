const setItem = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  };
  
  const getItem = (key) => {
    if (localStorage.getItem(key)) return JSON.parse(localStorage.getItem(key));
    throw error;
  };
  
  const getItemGeneric = (key) => {
    if (localStorage.getItem(key)) return localStorage.getItem(key);
    throw error;
  };
  
  const setItemGeneric = (key, value) => {
    localStorage.setItem(key, value);
  };
  
  const removeItem = (key) => {
    if (getItem(key) === false) throw error;
    localStorage.removeItem(key);
  };
  
  const clearStorage = () => {
    localStorage.clear();
  };
  
  export {
    setItem,
    getItem,
    removeItem,
    clearStorage,
    setItemGeneric,
    getItemGeneric,
  };
  