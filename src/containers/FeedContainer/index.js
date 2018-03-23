import React, { Component } from 'react';
import { Feed, Search } from 'components';
import { connect } from 'react-redux';
import firebase from 'firebase';

import config from 'store/firebaseStore';

import { fetchNews, fetchNewsByQuery } from 'actions/news';
import { pageNext } from 'actions/pagination';

import PropTypes from 'prop-types';

import styles from './styles.scss';

class FeedContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchQuery: '',
    };

    firebase.initializeApp(config);
    this.props.getNews(1);
  }

  fetchNews = page =>
    this.state.searchQuery.length > 0
      ? this.props.getNewsByQuery(page, this.state.searchQuery)
      : this.props.getNews(page);

  goSearch = query => this.setState({ searchQuery: query }, () => this.fetchNews(1));

  render = () => (
    <div className={styles.container__feed}>
      <Search timeout={1000} callback={this.goSearch} />
      <Feed
        news={this.props.news}
        isFetching={this.props.isFetching}
        isEnd={this.props.isEnd}
        loadMore={() => this.props.goNext().then(() => this.fetchNews(this.props.page))}
      />
    </div>
  );
}

FeedContainer.propTypes = {
  news: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  getNews: PropTypes.func.isRequired,
  getNewsByQuery: PropTypes.func.isRequired,
  goNext: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  isEnd: PropTypes.bool.isRequired,
};

const mapDispatchToProps = dispatch => ({
  getNews: page => {
    dispatch(fetchNews(page));
  },
  getNewsByQuery: (page, query) => {
    dispatch(fetchNewsByQuery(page, query));
  },
  goNext: () => dispatch(pageNext()),
});

const mapStateToProps = state => ({
  news: state.app.news.items,
  isFetching: state.app.news.isFetching,
  isEnd: state.app.news.isEnd,
  page: state.app.pagination.page,
});

export default connect(mapStateToProps, mapDispatchToProps)(FeedContainer);
