import Link from 'next/link';
import formatKr from '../../utils/date';
import '../../styles/components/wordbook/wordbook-list-detail.scss';

const WordbookListDetail = ({ wordbook }) => {
  return (
    <article className="wordbook-list__wordbook">
      <Link href={`/wordbook/${wordbook._id}`}>
        <div className="wordbook-list__wordbook--subject">
          <a>
            {wordbook.subject}
          </a>
        </div>
      </Link>
      <div className="wordbook-list__wordbook--user">{wordbook.user.name}</div>
      <div className="wordbook-list__wordbook--createdAt">{formatKr(wordbook.createdAt)}</div>
    </article>
  );
};

export default WordbookListDetail;