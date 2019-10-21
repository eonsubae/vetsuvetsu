import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Router from 'next/router';
import Head from 'next/head';
import axios from 'axios';
import cookie from 'js-cookie';

import { RootState } from '../../contexts/index';
import { complete, incomplete } from '../../contexts/editor';

import '../../styles/components/editor/editor.scss';
import EditorRow from '../../components/Editor/EditorRow';
import baseUrl from '../../utils/baseUrl';

type WordGroup = {
  kanji: string;
  read: string;
  meaning: string;
};

const Editor: React.FC = () => {
  const [rowCount, setRowCount] = useState(1);
  const titleRef = useRef<any>();
  const isAuth = useSelector((state: RootState) => state.auth.isAuthenticated);
  const lastRowDone = useSelector((state: RootState) => state.editor.lastRowDone);
  const dispatch = useDispatch();

  const onComplete = () => {
    dispatch(complete());
  }

  const onIncomplete = () => {
    dispatch(incomplete());
  }

  const [rowEditors, setRowEditors] = useState(
    [
      <EditorRow 
        key={rowCount}
        onComplete={onComplete}
      />
    ]
  );

  useEffect(() => {
    if (!isAuth) {
      alert('Login is required');
      Router.push('/login');
    }
    titleRef.current.focus();
  }, []);

  useEffect(() => {
    if (lastRowDone) {
      setRowCount(prevState => prevState + 1);
      onIncomplete();
    }
  }, [lastRowDone]);

  useEffect(() => {
    if (rowCount > 1) {
      addEditorRow();
    }
  }, [rowCount]);

  const addEditorRow = () => {
      setRowEditors(
        prevState =>
        prevState.concat(
          <EditorRow 
            key={`editRow-${rowCount}`} 
            onComplete={onComplete} 
          />)
      )
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    const { subject, content } = event.target;
    let group: WordGroup = { kanji: "", read: "", meaning: "" };
    const words: WordGroup[] = [];

    // 3개 단위로 단어를 그룹화한다
    // 그룹화 형식은 { kanji : 한자, read : 요미카타, meaning : 의미}으로 한다
    content.forEach((ele, i) => {
      const count = i + 1;
      const groupCount = count % 3;
      
      if (groupCount === 1) {
        group.kanji = ele.value;
      } else if (groupCount === 2) {
        group.read = ele.value;
      } else if (groupCount === 0) {
        group.meaning = ele.value;
        // 그룹화가 끝나면 하나의 배열에 넣는다
        words.push(group);
        group = { kanji: "", read: "", meaning: "" };
      };
    });

    // Wordbook 모델에 전송할 subject, words, userId를 오브젝트에 넣는다
    const url = `${baseUrl}/api/user`;
    const token = cookie.get('token');
    const headers = { headers: { authorization: token } };
    const user = await axios.get(url, headers);
    const userId = user.data._id;
    const wordbook = {
      subject : subject.value,
      words,
      userId
    };

    // Wordbook을 생성하는 api를 호출한다
    const wordbookUrl = `${baseUrl}/api/wordbook`;
    const payload = wordbook;
    const newWordbook = await axios.post(wordbookUrl, payload);

    if (newWordbook.status === 200) {
      Router.push('/wordbook');
    } else if (newWordbook.status === 400) {
      new Error(`Error occured : ${newWordbook.status}, ${newWordbook.statusText}`);
    }
  }

  return (
    <main className="editor">
      <Head>
        <title>Vetsu X 2 - editor</title>
      </Head>
      <section className="editor-container">
        <form className="editor__form" onSubmit={handleSubmit}>
          <label className="editor__form--subject" htmlFor="subject">Subject:&nbsp;&nbsp;
            <input
              className="editor__form--subject-input" 
              type="text"
              name="subject" 
              id="subject"
              ref={titleRef}
            />
          </label>
          <div className="editor__form--row-container">
            {rowEditors}
          </div>
          <button className="editor__form--submit-btn" type="submit">
            Create a wordbook
          </button>
        </form>
      </section>
    </main>
  );
};

export default Editor;