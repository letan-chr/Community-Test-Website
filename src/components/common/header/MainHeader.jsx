import React from 'react';

import MainNavigation from './MainNavigation';
import HeaderTop from './TopHeader';

const Header = () => {
  return (
    <header className="header-three header--sticky">
      <div className="container">
        <HeaderTop />
        <MainNavigation />
      </div>
    </header>
  );
};

export default Header;