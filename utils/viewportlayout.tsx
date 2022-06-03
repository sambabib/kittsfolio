import { useState, useEffect, createContext } from 'react';
import type { ReactElement } from 'react';

export const viewportContext = createContext({});

const ViewportLayout = ({ children }: any): ReactElement => {
  const [width, setWidth] = useState<number>(0);

  const handleWindowResize = (): void => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {

    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  return (
    <viewportContext.Provider value={{ width }}>
      {children}
    </viewportContext.Provider>
  );
};

export default ViewportLayout;
