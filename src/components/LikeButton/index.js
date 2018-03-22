import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';

class LikeButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      liked: false,
    };
  }

  likeEvent = (liked = this.state.liked) => (liked ? this.props.likeEvent() : this.props.dislikeEvent());

  toggleLike = () =>
    this.setState({ liked: !this.state.liked }, () => {
      this.likeEvent();
    });

  render = (liked = this.state.liked) => (
    <button onClick={this.toggleLike} className={liked ? `${styles.heart} ${styles.heart__animate}` : styles.heart} />
  );
}

LikeButton.propTypes = {
  likeEvent: PropTypes.func,
  dislikeEvent: PropTypes.func,
};

LikeButton.defaultProps = {
  likeEvent: () => console.log('like'),
  dislikeEvent: () => console.log('dislike'),
};

export default LikeButton;
