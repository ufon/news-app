import React from 'react';

import PropTypes from 'prop-types';

import { AppLayout } from 'components';

import { FeedPage, AboutPage } from 'pages';

import { connect } from 'react-redux';

import { Route } from 'react-router-dom';

import { ConnectedRouter } from 'react-router-redux';

import './styles.scss';

const AppContainer = ({ history }) => (
  <ConnectedRouter history={history}>
    <AppLayout>
      <Route exact path="/" component={FeedPage} />
      <Route path="/about" component={AboutPage} />
    </AppLayout>
  </ConnectedRouter>
);

AppContainer.propTypes = {
  history: PropTypes.any.isRequired,
};

const mapStateToProps = state => ({
  location: state.router.location,
});

export default connect(mapStateToProps)(AppContainer);
