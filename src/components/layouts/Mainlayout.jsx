import React from 'react';

import Footer from '../common/footer/Footer';
import Header from '../common/header/MainHeader';
// import Sidebar from '../common/header/Sidebar';
// import ProgressLoader from '../common/header/ProgressLoader ';

const MainLayout = ({ children }) => {
  return (
   <>
    {/* <ProgressLoader /> */}
    <Header />
    {/* <Sidebar /> */}
      <main>{children}</main>
      {/* <Footer /> */}
    </>
  );
};

export default MainLayout;
