import axios from "axios";

import baseUrl from "../../utils/baseUrl";
import '../../styles/components/wordbook/wordbook-detail.scss';

const WordbookDetail = ({ wordbook }) => {
  // 한자, 요미카타, 의미 전체를 보이게/안보이게 할 수 있는 토글 버튼을 만든다
  // 각각의 토글 버튼 아래에 한자, 요미카타, 의미를 리스팅한다
  // 토글버튼을 누르면 해당 토글버튼 아래의 리스트들은 보이지 않게끔 기능을 만든다
  // 단어 한개만 클릭할 시 상단 토글버튼과 상관없이 볼 수 있게/볼 수 없게끔 개별 단어의 토글 기능을 만든다
  return (
    <main className="wordbook-detail">
      <section className="wordbook-detail__subject">
        <article>
          <h1>{wordbook.subject}</h1>
        </article>
        <article className="wordbook-detail__toggleBtn">
          <div className="wordbook-detail__toggleBtn__kanji">
            <input type="checkbox" className="checkbox-switch__input" id="checkbox-switch-kanji" />
            <label htmlFor="checkbox-switch-kanji" className="checkbox-switch__label">
              <span className="checkbox-switch__btn"></span>
            </label>
          </div>
          <div className="wordbook-detail__toggleBtn__yomikata">
            <input type="checkbox" className="checkbox-switch__input" id="checkbox-switch-yomikata" />
            <label htmlFor="checkbox-switch-yomikata" className="checkbox-switch__label">
              <span className="checkbox-switch__btn"></span>
            </label>
          </div>
          <div className="wordbook-detail__toggleBtn__meaning">
            <input type="checkbox" className="checkbox-switch__input" id="checkbox-switch-meaning" />
            <label htmlFor="checkbox-switch-meaning" className="checkbox-switch__label">
              <span className="checkbox-switch__btn"></span>
            </label>
          </div>
        </article>
        <article className="word-list-container">
          {wordbook.words.map(w => 
            <div className="wordbook-detail__word">
              <span className="wordbook-detail__word--kanji">{w.kanji}</span>
              <span className="wordbook-detail__word--yomikata">{w.read}</span>
              <span className="wordbook-detail__word--meaning">{w.meaning}</span>
            </div>
          )}
        </article>
      </section>
    </main>
  );
};

WordbookDetail.getInitialProps = async (ctx: any) => {
  const wordbookId = ctx.query.wbid;
  const response = await axios.get(`${baseUrl}/api/wordbook/${wordbookId}`);
  const wordbook = response.data;

  return { wordbook };
};

export default WordbookDetail;