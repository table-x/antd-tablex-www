import React from 'react';
import PropTypes from 'prop-types';

const Doc = ({ html }) => (
  <div
    className="markdown-body"
    dangerouslySetInnerHTML={{ __html: html }} // eslint-disable-line react/no-danger
  />
);

Doc.propTypes = {
  html: PropTypes.string.isRequired
};

export default Doc;
