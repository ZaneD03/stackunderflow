import { createContext, useContext, useLayoutEffect, useState } from 'react';

const ThemeContext = createContext();
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    try { return localStorage.getItem('fm-theme') === 'dark' ? 'dark' : 'light'; }
    catch { return 'light'; }
  });
  useLayoutEffect(() => {
    document.documentElement.setAttribute('data-bs-theme', theme);
    document.documentElement.style.colorScheme = theme;
    try { localStorage.setItem('fm-theme', theme); } catch { /* Storage may be unavailable. */ }
  }, [theme]);
  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
}
export const useTheme = () => useContext(ThemeContext);
