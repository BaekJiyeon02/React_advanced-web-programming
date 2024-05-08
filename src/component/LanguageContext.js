import React, { createContext, useContext, useState } from 'react';
import data from '../data.json';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [langData, setLangData] = useState("KoMenu");
  const [koLang, setKoLang] = useState(data[0].KoMenu);
  const [engLang, setEngLang] = useState(data[0].EngMenu);

  const switchLanguage = (language) => {
    setLangData(language);
  };

  return (
    <LanguageContext.Provider value={{ langData, switchLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
