import { createContext, useContext,  useState } from 'react';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');
  const [darkMode,setDarkMode] = useState(false)

  const toggleTheme = () => {
    setDarkMode(!darkMode)
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  const colorText = theme === 'light' ? 'text-dark' : 'text-white';


  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, colorText,darkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};