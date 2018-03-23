import React from 'react';
import Waypoint from 'react-waypoint';
import PropTypes from 'prop-types';
import { Card, Spinner } from 'components';
import styles from './styles.scss';

const hashCode = s => {
  /* eslint no-bitwise: 0 */
  let hash = 0;
  let i;
  let chr;
  if (s.length === 0) return hash;
  for (i = 0; i < s.length; i += 1) {
    chr = s.charCodeAt(i);
    hash = (hash << 5) - hash + chr;
    hash |= 0; // Convert to 32bit integer
  }
  return hash;
};

const Feed = ({ news, loadMore, isEnd, isFetching }) => (
  <div className={styles.feed}>
    <div className={styles.feed__inner}>
      {news.map(article => <Card key={hashCode(article.title)} article={article} />)}
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
