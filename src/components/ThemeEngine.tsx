import { useEffect } from 'react';

export const useThemeEngine = (era: string) => {
  useEffect(() => {
    document.documentElement.setAttribute('data-era', era);
  }, [era]);
};
