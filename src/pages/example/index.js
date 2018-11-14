import React, { Component } from 'react';
import PropTypes from 'prop-types';
import qs from 'qs';
import moment from 'moment';
import { withRouter } from 'next/router';
import { Card } from 'antd';
import Tablex from 'antd-tablex';
import fetch from '../../fetch';
import Layout from '../../components/Layout';
import searchOptions from './configs';

class ExampleList extends Component {

  static propTypes = {
    router: PropTypes.object.isRequired
  };

  static async getInitialProps() {
    const res = await fetch({
      method: 'GET',
      url: '/users/list'
    });
    return { res };
  }

  state = {
    users: [],
    loading: false,
    paginationTotal: undefined
  };

  columns = [
    {
      title: 'id',
      dataIndex: 'userId'
    },
    {
      title: 'name',
      dataIndex: 'name'
    },
    {
      title: 'mobile',
      dataIndex: 'mobile'
    },
    {
      title: 'createdAt',
      dataIndex: 'createdAt',
      render: (value) => (moment(value).format('YYYY-MM-DD HH:mm:ss'))
    },
    {
      title: 'email',
      dataIndex: 'email'
    },
    {
      title: 'city',
      dataIndex: 'city'
    },
    {
      title: 'amount',
      dataIndex: 'amount'
    },
    {
      title: 'permission',
      dataIndex: 'permission'
    }
  ];

  constructor(props) {
    super(props);
    this.onChangeTable = this.onChangeTable.bind(this);
    this.onChangeOptions = this.onChangeOptions.bind(this);
  }

  componentWillMount() {
    const { res } = this.props;
    const { data, total } = res.result;
    this.setState({ users: data, paginationTotal: total, searchOptions });
  }

  onChangeTable(searchQuery, pagination, filters, sorter, extra) { //eslint-disable-line
    const { current, pageSize } = pagination;
    const limit = pageSize;
    const offset = (current - 1) * pageSize;
    // here you can do something with filters, sorter, extra to create params
    const params = {
      searchQuery: qs.stringify(searchQuery),
      limit,
      offset
    };
    this.setState({ loading: true });
    fetch({
      method: 'GET',
      url: '/users/list',
      params
    })
      .then((res) => {
        const { data, total } = res.result;
        this.setState({ users: data, paginationTotal: total, loading: false });
      })
      .catch(() => {
        this.setState({ loading: false });
      });
  }

  onChangeOptions() {}

  render() {
    const { router } = this.props;
    const { users, loading, paginationTotal, searchOptions } = this.state;
    const { asPath } = router;
    let lang = 'enUS';
    if (asPath.includes('zhCN')) {
      lang = 'zhCN';
    }
    const tableProps = {
      name: "Example",
      columns: this.columns,
      dataSource: users,
      showPagination: true,
      paginationTotal,
      showSearch: true,
      searchOptions,
      loading,
      onChange: this.onChangeTable,
      locale: lang
    };

    return (
      <Layout router={router} lang={lang}>
        <Card>
          <Tablex
            {...tableProps}
          />
        </Card>
      </Layout>
    );
  }
}

export default withRouter(ExampleList);
