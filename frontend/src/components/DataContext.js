// DataContext.js
import React, { createContext, useContext, useState } from 'react';

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [inputValue, setInputValue] = useState('');

  const setInput = (value) => {
    setInputValue(value);
  };

  return (
    <DataContext.Provider value={{ inputValue, setInput }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);

  if (!context) {
    throw new Error("useData must be used within a DataProvider");
  }

  return context;
};

