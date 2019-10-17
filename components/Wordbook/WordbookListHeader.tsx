import { useRouter } from 'next/router';

import '../../styles/components/wordbook/wordbook-list.scss';

const WordbookListHeader = () => {
  const router = useRouter();

  return (
    <header className="wordbook-list__header">
      <div className="wordbook-list__header--title">
        <h2 className="wordbook-list__header--title-text">
          { router.pathname === '/account' ? 
            "나의 단어장 목록" : 
            "전체 단어장 목록"
          }
        </h2>
      </div>
    </header>
  );
};

export default WordbookListHeader;