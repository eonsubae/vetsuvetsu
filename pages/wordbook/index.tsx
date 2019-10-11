import React from 'react';
import { NextPage, NextPageContext } from 'next';
import Head from 'next/head';
import axios from 'axios';

import WordbookList from '../../components/Wordbook/WordbookList';
import '../../styles/components/wordbook/wordbook.scss';
import baseUrl from '../../utils/baseUrl';

type Props = {
  wordbooks?: any;
};

const Wordbook: NextPage<Props> = ({ wordbooks }) => {

  return (
    <div className="wordbook-list-container">
      <Head>
        <title>Vetsu X 2 - wordbook</title>
      </Head>
      <WordbookList wordbooks={wordbooks} />
    </div>
  );
};

Wordbook.getInitialProps = async ({ req }: NextPageContext) => {
  const url = `${baseUrl}/api/wordbook`;
  const response = await axios.get(url);
  const data = response.data;

  return { wordbooks: data };
}

export default Wordbook;