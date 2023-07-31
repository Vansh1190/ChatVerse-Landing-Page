// pages/_document.js

import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="shortcut icon" href="/4712035.png" type="image/x-icon" />
          <link rel="icon" href="/4712035.png" type="image/x-icon" />
          {/* Include any other head elements you might need */}
        </Head>
        <body className="inter">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
