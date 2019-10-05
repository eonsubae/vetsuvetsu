import React from 'react';

import WordbookList from '../../components/Wordbook/WordbookList';
import '../../styles/components/wordbook/wordbook.scss';

const Wordbook: React.FC = () => {
  return (
    <div className="wordbook-list-container">
      <WordbookList />
    </div>
  );
};

export default Wordbook;