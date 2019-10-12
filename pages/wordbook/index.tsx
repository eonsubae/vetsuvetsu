import React from 'react';
import { NextPage, NextPageContext } from 'next';
import Head from 'next/head';
import axios from 'axios';

import WordbookList from '../../components/Wordbook/WordbookList';
import '../../styles/components/wordbook/wordbook.scss';
import baseUrl from '../../utils/baseUrl';

type Props = {
  wordbooks?: any;
  totalPage?: number;
};

const Wordbook: NextPage<Props> = ({ wordbooks, totalPage }) => {
  return (
    <div className="wordbook-list-container">
      <Head>
        <title>Vetsu X 2 - wordbook</title>
      </Head>
      <WordbookList wordbooks={wordbooks} totalPage={totalPage} />
    </div>
  );
};

Wordbook.getInitialProps = async (ctx: any) => {
  const url = `${baseUrl}/api/wordbook`;
  const page = ctx.query.page ? ctx.query.page : '1';
  const size = 10;
  const payload = { params : { page, size } };
  const response = await axios.get(url, payload);
  const data = response.data;

  return { wordbooks: data.wordbooks, totalPage: data.totalPage };
}

export default Wordbook;