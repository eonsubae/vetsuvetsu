import React from 'react';
import App from 'next/app';
import BaseLayout from '../components/_App/BaseLayout';

class MyApp extends App {
  // Only uncomment this method if you have blocking data requirements for
  // every single page in your application. This disables the ability to
  // perform automatic static optimization, causing every page in your app to
  // be server-side rendered.
  //
  static async getInitialProps({ Component, ctx }) {
    let appProps;

    if (Component.getInitialProps) {
      appProps = await App.getInitialProps(ctx);
    }
  
    return { ...appProps }
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <BaseLayout>
        <Component {...pageProps} />
      </BaseLayout>
    );
  }
}

export default MyApp;