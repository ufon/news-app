import React from 'react';

import PropTypes from 'prop-types';

import { AppHeader, AppFooter } from 'components';

const AppLayout = ({ children }) => (
  <div>
    <AppHeader />
    {children}
    <AppFooter />
  </div>
);

AppLayout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default AppLayout;
