import WordbookListHeader from './WordbookListHeader';
import WordbookListDetail from './WordbookListDetail';
import WordbookListPaginator from './WordbookListPaginator';
import '../../styles/components/wordbook/wordbook-list.scss';

const WordbookList = ({ wordbooks, totalPage }) => {
  
  return (
    <main className="wordbook-list">
      <WordbookListHeader />
      <section className="list-container">
        {wordbooks.map(wordbook => 
          <WordbookListDetail key={wordbook._id} wordbook={wordbook} />
        )}
      </section>
      <WordbookListPaginator totalPage={totalPage} />
    </main>
  );
};

export default WordbookList;