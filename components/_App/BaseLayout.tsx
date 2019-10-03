import React, { Fragment } from 'react';
import Head from 'next/head';

import HeadContent from './HeadContent';

const BaseLayout = ( Component: any ) => {
  return (
    <Fragment>
      <Head>
        <HeadContent />
      </Head>
      <div>
        {Component.children}
      </div>
    </Fragment>
  );
};

export default BaseLayout;
