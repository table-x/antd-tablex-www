import React from 'react';
import PropTypes from 'prop-types';
import { Layout as AntdLayout } from 'antd';
import Header from '../Header';

const {
  Header: AntdHeader,
  Content: AntdContent
} = AntdLayout;

const Layout = ({ children, router, lang }) => {

  const headerStyles = {
    background: '#FFF',
    boxShadow: '0 2px 8px #f0f1f2',
    zIndex: 10
  };

  return (
    <AntdLayout>
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
  lang: PropTypes.string.isRequired
};

export default Layout;
