import React from 'react';
import PropTypes from 'prop-types';
import { LazyImage, LikeButton } from 'components';
import moment from 'moment/min/moment-with-locales';
import styles from './styles.scss';

const momentFormat = date => {
  moment.locale('ru');
  return moment(date).fromNow(); // an hour ago
};

const Card = ({ article }) => (
  <div className={styles.card}>
    <div className={styles.card__image}>
      <LazyImage srcLoaded={article.urlToImage} />
    </div>
    <div className={styles.card__content}>
      <LikeButton />
      <h1 className={styles.card__title}>
        <a href={article.url}>{article.title}</a>
      </h1>
      <p className={styles.card__description}>{article.description}</p>
      <p>{momentFormat(article.publishedAt)}</p>
    </div>
  </div>
);

Card.propTypes = {
  article: PropTypes.object.isRequired,
};

export default Card;
