import React from 'react';
import { IoIosMore } from 'react-icons/io';

import '../../styles/components/wordbook/wordbook-list.scss';

const WordbookListHeader: React.FC = () => {
  return (
    <header className="wordbook-list__header">
      <div className="wordbook-list__header--title">
        <h2 className="wordbook-list__header--title-text">All Tasks</h2>
      </div>
    </header>
  );
};

export default WordbookListHeader;