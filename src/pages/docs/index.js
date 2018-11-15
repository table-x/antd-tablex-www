import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'next/router';
import { Row, Col, Menu } from 'antd';
import docEnAPI from 'antd-tablex/docs/All-props.md';
import docZhAPI from 'antd-tablex/docs/All-props.zhCN.md';
import { Layout, Doc } from '../../components';
import './docs.less';

const {
  SubMenu: MenuSub,
  Item: MenuItem
} = Menu;

const DocsPage = ({ router }) => {
  const { asPath } = router;
  let lang = 'enUS';
  let docHtml = docEnAPI;
  if (asPath.includes('zhCN')) {
    lang = 'zhCN';
    docHtml = docZhAPI;
  }

  return (
    <Layout router={router} lang={lang}>
      <Row className="docs-page-el">
        <Col span={4}>
          <Menu
            mode="inline"
            defaultOpenKeys={['sub1']}
            defaultSelectedKeys={['1']}
          >
            <MenuSub title="API" key="sub1">
              <MenuItem key="1">All API</MenuItem>
            </MenuSub>
          </Menu>
        </Col>
        <Col span={19} className="docs-page-el-col">
          <div className="docs-mark-down">
            <Doc html={docHtml} />
          </div>
        </Col>
      </Row>
    </Layout>
  );
};

DocsPage.propTypes = {
  router: PropTypes.object.isRequired
};

export default withRouter(DocsPage);
