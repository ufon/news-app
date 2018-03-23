import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-firebase';
import { LazyImage, LikeButton } from 'components';
import moment from 'moment/min/moment-with-locales';
import styles from './styles.scss';

const momentFormat = date => {
  moment.locale('ru');
  return moment(date).fromNow();
};

const Card = ({ article, likeCount, likeEvent, dislikeEvent, uuid, viewEvent, viewCount }) => (
  <div className={styles.card}>
    <div className={styles.card__image}>
      <LazyImage srcLoaded={article.urlToImage ? article.urlToImage : ''} />
    </div>
    <div className={styles.card__content}>
      <LikeButton
        likeEvent={() => likeEvent(likeCount)}
        dislikeEvent={() => dislikeEvent(likeCount)}
        likeCount={likeCount || 0}
        liked={localStorage.getItem(uuid) || false}
      />
      <h1 className={styles.card__title}>
        <a onClick={() => viewEvent(viewCount)} target="_blank" href={article.url}>
          {article.title}
        </a>
      </h1>
      <p className={styles.card__description}>{article.description}</p>
    </div>
    <div className={styles.card__footer}>
      <span className={styles.card__time}>{momentFormat(article.publishedAt)}</span>
      <span className={styles.card__count}>{viewCount || 0} просмотров</span>
    </div>
  </div>
);

Card.propTypes = {
  article: PropTypes.object.isRequired,
  uuid: PropTypes.string.isRequired,
  likeCount: PropTypes.oneOfType([PropTypes.oneOf([null, undefined]), PropTypes.number]),
  viewCount: PropTypes.oneOfType([PropTypes.oneOf([null, undefined]), PropTypes.number]),
  likeEvent: PropTypes.func.isRequired,
  dislikeEvent: PropTypes.func.isRequired,
  viewEvent: PropTypes.func.isRequired,
};

Card.defaultProps = {
  likeCount: 0,
  viewCount: 0,
};

const mapFirebaseToProps = (props, ref) => ({
  likeCount: `${props.uuid}/likes`,
  viewCount: `${props.uuid}/views`,
  viewEvent: views => ref(`${props.uuid}/views`).set(views + 1),
  likeEvent: likes =>
    ref(`${props.uuid}/likes`)
      .set(likes + 1)
      .then(() => localStorage.setItem(props.uuid, true)),
  dislikeEvent: likes =>
    ref(`${props.uuid}/likes`)
      .set(likes - 1)
      .then(() => localStorage.removeItem(props.uuid)),
});

const mergeProps = (ownProps, firebaseProps) => Object.assign({}, ownProps, firebaseProps);

export default connect(mapFirebaseToProps, mergeProps)(Card);
