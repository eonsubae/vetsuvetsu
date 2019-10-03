import React from 'react';
import { IoIosMore } from 'react-icons/io';

import '../../styles/components/wordbook/wordbook-list.scss';

const WordbookListHeader: React.FC = () => {
  return (
    <header className="wordbook-list__header">
      <div className="wordbook-list__header--title">
        <h2 className="wordbook-list__header--title-text">All Tasks</h2>
      </div>
      <div className="wordbook-list__header--individual">
        <IoIosMore className="wordbook-list__header--individual-img" />
      </div>
    </header>
  );
};

export default WordbookListHeader;