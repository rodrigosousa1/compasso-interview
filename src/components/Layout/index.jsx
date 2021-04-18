import React from 'react';
import PropTypes from 'prop-types';

function Layout({ children }) {
  return (
    <div className="l-wrapper">
      <header className="l-header" />
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
