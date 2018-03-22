import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      focus: false,
      search: '',
    };

    this.timerId = null;
  }

  onFocus = () => this.setState({ focus: true });

  onBlur = () => {
    if (this.state.search.length === 0) this.setState({ focus: false });
  };

  searchUpdate = e => {
    this.setState({ search: e.target.value }, () => {
      clearTimeout(this.timerId);
      this.timerId = setTimeout(() => {
        this.props.callback(this.state.search);
      }, this.props.timeout);
    });
  };

  render = (focus = this.state.focus) => (
    <div className={styles.container__search}>
      <label className={focus ? `${styles.search} ${styles.search__active}` : styles.search} htmlFor="search">
        <input
          onChange={this.searchUpdate}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          placeholder="Поиск..."
          id="search"
          type="text"
        />
      </label>
    </div>
  );
}

Search.propTypes = {
  callback: PropTypes.func,
  timeout: PropTypes.number,
};

Search.defaultProps = {
  callback: query => console.log(query),
  timeout: 1000,
};

export default Search;
