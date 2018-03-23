import React from 'react';
import Waypoint from 'react-waypoint';
import PropTypes from 'prop-types';
import { Card, Spinner } from 'components';
import uuidv5 from 'uuid/v5';
import styles from './styles.scss';

const Feed = ({ news, loadMore, isEnd, isFetching }) => (
  <div className={styles.feed}>
    <div className={styles.feed__inner}>
      {news.map(article => (
        <Card key={uuidv5(article.title, uuidv5.URL)} uuid={uuidv5(article.title, uuidv5.URL)} article={article} />
      ))}
      <div className={styles.feed__waypoint}>
        {!isFetching && <Waypoint onEnter={loadMore} />}
        {!isEnd && <Spinner />}
      </div>
    </div>
  </div>
);

Feed.propTypes = {
  news: PropTypes.array.isRequired,
  loadMore: PropTypes.func.isRequired,
  isEnd: PropTypes.bool.isRequired,
  isFetching: PropTypes.bool.isRequired,
};

export default Feed;
