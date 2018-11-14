import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'next/router';
import { Row, Col } from 'antd';
import AA from 'antd-tablex/README.md';
import { Layout, Doc } from '../../components';
import './docs.less';

const DocsPage = ({ router }) => {
  const { asPath } = router;
  let lang = 'enUS';
  if (asPath.includes('zhCN')) {
    lang = 'zhCN';
  }

  return (
    <Layout router={router} lang={lang}>
      <Row className="docs-page-el">
        <Col span={4}>dd</Col>
        <Col span={20}>
          <Doc html={AA} />
        </Col>
      </Row>
    </Layout>
  );
};

DocsPage.propTypes = {
  router: PropTypes.object.isRequired
};

export default withRouter(DocsPage);
