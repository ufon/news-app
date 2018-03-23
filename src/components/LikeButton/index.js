import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';

class LikeButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      liked: this.props.liked,
    };
  }

  likeEvent = (liked = this.state.liked) => (liked ? this.props.likeEvent() : this.props.dislikeEvent());

  toggleLike = () =>
    this.setState({ liked: !this.state.liked }, () => {
      this.likeEvent();
    });

  render = (liked = this.state.liked) => (
    <button onClick={this.toggleLike} className={liked ? `${styles.heart} ${styles.heart__animate}` : styles.heart}>
      <span className={styles.counter}>{this.props.likeCount}</span>
    </button>
  );
}

LikeButton.propTypes = {
  likeEvent: PropTypes.func,
  dislikeEvent: PropTypes.func,
  likeCount: PropTypes.number,
  liked: PropTypes.bool,
};

LikeButton.defaultProps = {
  likeEvent: () => console.log('like'),
  dislikeEvent: () => console.log('dislike'),
  likeCount: 0,
  liked: false,
};

export default LikeButton;
