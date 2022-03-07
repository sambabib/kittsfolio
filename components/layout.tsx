import type { ReactElement, ReactNode, ReactChild } from 'react';

// components
import Navbar from './navbar';
import Cursor from './cursor';

interface Children {
  children: ReactNode | ReactChild;
}

const Layout = ({ children }: Children): ReactElement => {
  return (
    <>
      <Navbar />
      <Cursor />
      <main>{children}</main>
    </>
  );
};

export default Layout;
