import { createContext, useContext, useEffect } from 'react';

const AppContext = createContext();

const AppProvider = ({ children }) => {
  useEffect(() => {
    console.log('fetch data here');
  }, []);

  return (
    <AppContext.Provider value={{ name: 'John', role: 'student' }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
