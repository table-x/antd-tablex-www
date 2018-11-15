import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { Layout as AntdLayout } from 'antd';
import Header from '../Header';

const {
  Header: AntdHeader,
  Content: AntdContent
} = AntdLayout;

const Layout = ({ children, router, lang, title }) => {

  const headerStyles = {
    background: '#FFF',
    boxShadow: '0 2px 8px #f0f1f2',
    zIndex: 10
  };

  return (
    <AntdLayout>
      <Head>
        <title>{title}</title>
      </Head>
      <AntdHeader style={headerStyles}>
        <Header router={router} lang={lang} />
      </AntdHeader>
      <AntdContent style={{ background: '#FFF' }}>
        { children }
      </AntdContent>
    </AntdLayout>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  router: PropTypes.object.isRequired,
  lang: PropTypes.string.isRequired,
  title: PropTypes.string
};

Layout.defaultProps = {
  title: 'TableX'
};

export default Layout;
