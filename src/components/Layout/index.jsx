import PropTypes from 'prop-types';
import React from 'react';

import Logo from '../../assets/img/GitHubLogo.png';

function Layout({ children }) {
  return (
    <div className="l-wrapper">
      <header className="l-header">
        <div className="c-breadcrumb">
          <img className="c-breadcrumb__logo" src={Logo} alt="GitHub Logo" />
        </div>
      </header>
      <main className="l-main">
        {children}
      </main>
      <footer className="l-footer" />
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
