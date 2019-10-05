import React from 'react';

import WordbookListHeader from './WordbookListHeader';
import '../../styles/components/wordbook/wordbook-list.scss';

const WordbookList: React.FC = () => {
  return (
    <section className="wordbook-list">
      <WordbookListHeader />
    </section>
  );
};

export default WordbookList;