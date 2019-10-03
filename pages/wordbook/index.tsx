import React from 'react';

import BaseLayout from '../../components/_App/BaseLayout';
import WordbookList from '../../components/Wordbook/WordbookList';
import '../../styles/components/wordbook/wordbook.scss';

const Wordbook: React.FC = () => {
  return (
    <BaseLayout>
      <div className="wordbook-list-container">
        <WordbookList />
      </div>
    </BaseLayout>
  );
};

export default Wordbook;