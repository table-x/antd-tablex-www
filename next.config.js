/* eslint-disable */
const path = require('path');
const withCss = require('@zeit/next-css');
const withLess = require('@zeit/next-less');

// fix: prevents error when .less files are required by node
if (typeof require !== 'undefined') {
  require.extensions['.css'] = (file) => {};
  require.extensions['.less'] = (file) => {};
}

const nextConfig = withCss(withLess({
  lessLoaderOptions: {
    javascriptEnabled: true,
  },
  webpack: (config, { dev, isServer }) => {
    if (dev && !isServer) {
      const eslintRule = {
        enforce: 'pre',
        test: /\.js$/,
        include: [
          path.resolve(__dirname, 'src'),
          path.resolve(__dirname, 'pages'),
          path.resolve(__dirname, 'components')
        ],
        exclude: /node_modules/,
        loader: 'eslint-loader',
      };
      config.module.rules.unshift(eslintRule);
    }
    return config;
  }
}));

module.exports = nextConfig;