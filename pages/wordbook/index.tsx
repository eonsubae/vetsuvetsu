import React from 'react';
import Head from 'next/head';

import WordbookList from '../../components/Wordbook/WordbookList';
import '../../styles/components/wordbook/wordbook.scss';

const Wordbook: React.FC = () => {
  return (
    <div className="wordbook-list-container">
      <Head>
        <title>Vetsu X 2 - wordbook</title>
      </Head>
      <WordbookList />
    </div>
  );
};

export default Wordbook;