import React from 'react';

import WordbookListHeader from './WordbookListHeader';
import formatKr from '../../utils/date';
import '../../styles/components/wordbook/wordbook-list.scss';

const WordbookList = ({ wordbooks }) => {
  return (
    <main className="wordbook-list">
      <WordbookListHeader />
      <section className="list-container">
        {wordbooks.map((ele, idx) => 
          <article className="wordbook-list__wordbook" key={idx}>
            <div className="wordbook-list__wordbook--subject">{ele.subject} </div>
            <div className="wordbook-list__wordbook--user">{ele.user.name}</div>
            <div className="wordbook-list__wordbook--createdAt">{formatKr(ele.createdAt)}</div>
          </article>
        )}
      </section>
    </main>
  );
};

export default WordbookList;