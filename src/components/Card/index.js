import React from 'react';

import styles from './styles.scss';

const Card = () => (
  <div className={styles.card}>
    <div className={styles.card__image}>
      <img
        src="https://images.unsplash.com/photo-1434493651957-4ec11beae249?q=80&fm=jpg&s=2a7fe1a34895ea3ef01079b58482287f"
        alt=""
      />
    </div>
    <div className={styles.card__content}>
      <button className={styles.card__button}>
        <i>share</i>
      </button>
      <p className={styles.card__title}>An example of a blog title</p>
      <p className={styles.card__description}>Juan Antonio Beato Quiñones</p>
    </div>
  </div>
);

export default Card;
