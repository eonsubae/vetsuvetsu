import formatKr from '../../utils/date';
import '../../styles/components/wordbook/wordbook-list-detail.scss';

const WordbookListDetail = ({ wordbook }) => {
  return (
    <article className="wordbook-list__wordbook">
      <div className="wordbook-list__wordbook--subject">{wordbook.subject} </div>
      <div className="wordbook-list__wordbook--user">{wordbook.user.name}</div>
      <div className="wordbook-list__wordbook--createdAt">{formatKr(wordbook.createdAt)}</div>
    </article>
  );
};

export default WordbookListDetail;