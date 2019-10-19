import React from 'react';
import NextApp, { AppContext } from "next/app";
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import BaseLayout from '../components/_App/BaseLayout';
import rootReducer from '../contexts/index';

const store = createStore(rootReducer);

interface Props {
  pageProps: any;
}

class MyApp extends NextApp<Props> {
  // Only uncomment this method if you have blocking data requirements for
  // every single page in your application. This disables the ability to
  // perform automatic static optimization, causing every page in your app to
  // be server-side rendered.

  static async getInitialProps({ Component, ctx }: AppContext) {
    const componentGetInitialProps = Component.getInitialProps || (() => Promise.resolve());

    const [pageProps] = await Promise.all([
      componentGetInitialProps(ctx),
    ]);

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Provider store={store}>
        <BaseLayout>
          <Component {...pageProps} />
        </BaseLayout>
      </Provider>
    );
  }
}

export default MyApp;