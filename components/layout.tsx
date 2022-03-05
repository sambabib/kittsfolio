import type { ReactElement, ReactNode, ReactChild } from 'react';

// components
import Navbar from './navbar';

interface Children {
  children: ReactNode | ReactChild;
}

const Layout = ({ children }: Children): ReactElement => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
};

export default Layout;
