import React from 'react';
import PropTypes from 'prop-types';
import Header from 'src/components/layout/Header/Header';
import './MainLayout.scss';

const MainLayout = ({ children }) => (
  <>
    <Header />
    <div className="main-content">{children}</div>
  </>
);

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainLayout;
