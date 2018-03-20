import React, { Component } from 'react';
import Waypoint from 'react-waypoint';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchNews } from 'actions/news';

import { Card } from 'components';

import styles from './styles.scss';

class Feed extends Component {
  constructor(props) {
    super(props);

    this.props.fetchNews(1);

    this.state = {
      page: 1,
    };
  }

  loadMoreItems = () => {
    this.props.fetchNews(this.state.page);
    this.setState({ page: this.state.page + 1 });
    console.log(this.state.page);
  };

  renderItems = () => this.props.news.map((article, index) => <Card meta={article} />);

  renderWaypoint = () => {
    if (!this.props.isFetching) return <Waypoint onEnter={this.loadMoreItems} />;
  };

  render() {
    return (
      <div className={styles.feed}>
        <div className={styles.feed__inner}>
          {this.renderItems()}
          <div className="feed__waypoint">
            {this.renderWaypoint()}
            Loading more items…
          </div>
        </div>
      </div>
    );
  }
}

Feed.propTypes = {
  news: PropTypes.object.isRequired,
  isFetching: PropTypes.bool.isRequired,
  fetchNews: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  fetchNews: page => {
    dispatch(fetchNews(page));
  },
});

const mapStateToProps = state => ({
  news: state.app.news.items,
  isFetching: state.app.news.isFetching,
});

export default connect(mapStateToProps, mapDispatchToProps)(Feed);
