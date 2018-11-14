import React from 'react';
import PropTypes from 'prop-types';
import Router, { withRouter } from 'next/router';
import { Row, Col, Button } from 'antd';
import Layout from '../../components/Layout';
import './home.less';

const HomePage = ({ router }) => {
  const { asPath } = router;
  let lang = 'enUS';
  if (asPath.includes('zhCN')) {
    lang = 'zhCN';
  }
  const imgSrc = `/static/exam-${lang}.png`;
  const goTo = (path) => {
    switch(lang) {
      case 'enUS':
        return Router.push(`${path}`);
      default:
        return Router.push(`${path}/${lang}`);
    }
  };

  return (
    <Layout router={router} lang={lang}>
      <Row className="home-page-el">
        <Col span={2} />
        <Col span={6}>
          <div className="home-page-content">
            <div className="home-page-title">Antd TableX</div>
            <div className="home-page-button">
              <Button onClick={() => (goTo('/example'))}>
                { lang === 'enUS' ? 'Trial now' : '立刻试用' }
              </Button>
            </div>
            <div className="home-page-button">
              <Button type="primary" onClick={() => (goTo('/docs'))}>
                { lang === 'enUS' ? 'Document' : '使用文档' }
              </Button>
            </div>
          </div>
        </Col>
        <Col span={14}>
          <div className="home-page-show-img">
            <img src={imgSrc} alt="" width="100%" />
          </div>
        </Col>
        <Col span={2} />
      </Row>
    </Layout>
  );
};

HomePage.propTypes = {
  router: PropTypes.object.isRequired
};

export default withRouter(HomePage);
