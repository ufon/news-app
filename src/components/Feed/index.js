import React, { Component } from 'react';
import Waypoint from 'react-waypoint';
import PropTypes from 'prop-types';
import { Card, Spinner } from 'components';
import styles from './styles.scss';

const Feed = ({ news, loadMore, isEnd, isFetching }) => (
  <div className={styles.feed}>
    <div className={styles.feed__inner}>
      {news.map((article, index) => <Card article={article} />)}
      <div className={styles.feed__waypoint}>
        {!isFetching && <Waypoint onEnter={loadMore} />}
        {!isEnd && <Spinner />}
      </div>
    </div>
  </div>
);

Feed.propTypes = {
  news: PropTypes.object.isRequired,
  loadMore: PropTypes.func.isRequired,
  isEnd: PropTypes.bool.isRequired,
  isFetching: PropTypes.bool.isRequired,
};

export default Feed;
