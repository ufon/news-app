import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';

class LazyImage extends Component {
  constructor(props) {
    super(props);
    this.LazyImage = null;
  }

  componentDidMount() {
    const hdLoaderImg = new Image();
    hdLoaderImg.src = this.props.srcLoaded;
    hdLoaderImg.onload = () => {
      this.LazyImage.setAttribute('style', `background-image: url('${this.props.srcLoaded}')`);
      this.LazyImage.classList.add(styles.fadein);
    };
  }

  render() {
    return (
      <div className={styles.container}>
        <div
          className={styles.loaded}
          ref={imageLoadedElem => {
            this.LazyImage = imageLoadedElem;
          }}
        />
      </div>
    );
  }
}

LazyImage.propTypes = {
  srcLoaded: PropTypes.string.isRequired,
};

export default LazyImage;
