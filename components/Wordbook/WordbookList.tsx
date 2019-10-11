import React from 'react';

import WordbookListHeader from './WordbookListHeader';
import '../../styles/components/wordbook/wordbook-list.scss';

const WordbookList = ({ wordbooks }) => {
  return (
    <main className="wordbook-list">
      <WordbookListHeader />
      <section className="list-container">
        {wordbooks.map((ele, idx) => 
          <article className="wordbook-list__wordbook" key={idx}>
            <div>{ele.subject} </div>
            <div>{ele.user.name}</div>
            <div>{ele.createdAt}</div>
          </article>
        )}
      </section>
    </main>
  );
};

export default WordbookList;