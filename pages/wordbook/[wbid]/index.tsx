import { useState, useEffect } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import axios from "axios";
import nookies from 'nookies';

import baseUrl from "../../../utils/baseUrl";
import '../../../styles/components/wordbook/wordbook-detail.scss';

const WordbookDetail = ({ wordbook, user }) => {
  const [kanjiToggle, setKanjiToggle] = useState(true);
  const [yomiToggle, setYomiToggle] = useState(true);
  const [meanToggle, setMeanToggle] = useState(true);
  const [isFixedToggleBtn, setIsFixedToggleBtn] = useState(false);
  // 단어 한개만 클릭할 시 상단 토글버튼과 상관없이 볼 수 있게/볼 수 없게끔 개별 단어의 토글 기능을 만든다

  useEffect(() => {
    window.addEventListener('scroll', handleToggleBtnPosition);
  }, []);

  const handleToggleChange = (event: any) => {
    const btn = event.target;
    const target = btn.id
    const kanji = 'checkbox-switch-kanji';
    const yomikata = 'checkbox-switch-yomikata';
    const meaning = 'checkbox-switch-meaning';

    if (event.target.checked) {
      if (target === kanji) setKanjiToggle(true); 
      if (target === yomikata) setYomiToggle(true); 
      if (target === meaning) setMeanToggle(true); 
    } else {
      if (target === kanji) setKanjiToggle(false); 
      if (target === yomikata) setYomiToggle(false); 
      if (target === meaning) setMeanToggle(false); 
    }
  };

  const handleToggleBtnPosition = () => {
    const pos = window.pageYOffset;

    if (!isFixedToggleBtn && (pos > 150)) {
      setIsFixedToggleBtn(true);
    } 
    else if (!isFixedToggleBtn && (pos < 150)) {
      setIsFixedToggleBtn(false);
    }
  };

  return (
    <main className="wordbook-detail">
      <Head>
        <title>Vetsu X 2 - {wordbook.subject}</title>
      </Head>
      <section className="wordbook-detail__container">
        <article>
          <h1 className="wordbook-detail__subject">{wordbook.subject}</h1>
        </article>
        <article 
          className="wordbook-detail__toggleBtn" 
          style={isFixedToggleBtn ? 
            { position: 'fixed', top: '-3rem' } : 
            { position: 'absolute', top: '5rem' } 
          }
        >
          <div className="wordbook-detail__toggleBtn__kanji">
            <input 
              checked={kanjiToggle}
              type="checkbox" 
              className="checkbox-switch__input" 
              id="checkbox-switch-kanji" 
              onChange={handleToggleChange} />
            <label 
              htmlFor="checkbox-switch-kanji" 
              className="checkbox-switch__label"
              style={kanjiToggle ? { backgroundColor : 'cadetblue' } : { backgroundColor : 'grey' }}
            >
              <span className="checkbox-switch__btn"></span>
            </label>
          </div>
          <div className="wordbook-detail__toggleBtn__yomikata">
            <input 
              checked={yomiToggle}
              type="checkbox" 
              className="checkbox-switch__input" 
              id="checkbox-switch-yomikata" 
              onChange={handleToggleChange} 
            />
            <label 
              htmlFor="checkbox-switch-yomikata" 
              className="checkbox-switch__label"
              style={yomiToggle ? { backgroundColor : 'cadetblue' } : { backgroundColor : 'grey' }}
            >
              <span className="checkbox-switch__btn"></span>
            </label>
          </div>
          <div className="wordbook-detail__toggleBtn__meaning">
            <input 
              checked={meanToggle}
              type="checkbox" 
              className="checkbox-switch__input" 
              id="checkbox-switch-meaning" 
              onChange={handleToggleChange} 
            />
            <label 
              htmlFor="checkbox-switch-meaning" 
              className="checkbox-switch__label"
              style={meanToggle ? { backgroundColor : 'cadetblue' } : { backgroundColor : 'grey' }}
            >
              <span className="checkbox-switch__btn"></span>
            </label>
          </div>
        </article>
        <article className="word-list-container">
          {wordbook.words.map((w, idx) => 
            <div key={wordbook._id + idx} className="wordbook-detail__word">
              <span 
                className="wordbook-detail__word--kanji" 
                style={kanjiToggle ? { visibility : "visible" } : { visibility : "hidden" }}
              >{w.kanji}</span>
              <span 
                className="wordbook-detail__word--yomikata"
                style={yomiToggle ? { visibility : "visible" } : { visibility : "hidden" }}
              >{w.read}</span>
              <span 
                className="wordbook-detail__word--meaning"
                style={meanToggle ? { visibility : "visible" } : { visibility : "hidden" }}
              >{w.meaning}</span>
            </div>
          )}
        </article>
        {(user != null && wordbook.user === user._id) ?
            (<Link href={`/editor/${wordbook._id}`}>
              <a className="wordbook-detail__update-btn">Update</a>
             </Link>) : null}
        </section>
    </main>
  );
};

WordbookDetail.getInitialProps = async (ctx: any) => {
  let user;
  const wordbookId = ctx.query.wbid;
  const token = nookies.get(ctx).token;

  if (token) {
    const userUrl = `${baseUrl}/api/user`;
    const userPayload = { headers: { Authorization : token }};
    const userResponse = await axios.get(userUrl, userPayload);
    user = userResponse.data;
  }

  const wordbookUrl = `${baseUrl}/api/wordbook/${wordbookId}`;
  const wordbookResponse = await axios.get(wordbookUrl);
  const wordbook = wordbookResponse.data;

  return { wordbook, user };
};

export default WordbookDetail;