import React from 'react';

import PropTypes from 'prop-types';

import { AppLayout } from 'components';

import { FeedPage, AboutPage } from 'pages';

import { connect } from 'react-redux';

import { Route } from 'react-router-dom';

import { ConnectedRouter } from 'react-router-redux';

import './styles.scss';

const fixUrl = url => (process.env.NODE_ENV === 'production' ? `/news-app${url}` : url);

const AppContainer = ({ history }) => (
  <ConnectedRouter history={history}>
    <AppLayout>
      <Route exact path={fixUrl('/')} component={FeedPage} />
      <Route path={fixUrl('/about')} component={AboutPage} />
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
