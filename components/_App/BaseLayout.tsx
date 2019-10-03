import React, { Fragment } from 'react';
import Head from 'next/head';

import HeadContent from './HeadContent';
import Header from './Header';
import '../../styles/base/base.scss';

const BaseLayout: React.FC = ( Component: any ) => {
  return (
    <Fragment>
      <Head>
        <HeadContent />
      </Head>
      <Fragment>
        <Header />
        {Component.children}
      </Fragment>
    </Fragment>
  );
};

export default BaseLayout;
