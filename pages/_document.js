import Document, { Head, Main, NextScript } from 'next/document';
import '../asserts/styles.less';

export default class MyDocument extends Document {
  render () {
    return (
      <html>
        <Head>
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <meta charSet='utf-8' />
          <meta name="description" content="Antd-based powerful search table." />
          <link rel="shortcut icon" href="/static/favicon.ico" />
          <link rel="apple-touch-icon" sizes="120x120" href="/static/apple-icon-120x120.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
