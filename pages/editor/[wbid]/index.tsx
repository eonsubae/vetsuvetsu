import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Router from 'next/router';
import Head from 'next/head';
import axios from 'axios';
import cookie from 'js-cookie';

import { RootState } from '../../../contexts/index';
import { complete, incomplete } from '../../../contexts/editor';
import nookies from 'nookies';

import '../../../styles/components/editor/editor.scss';
import EditorRow from '../../../components/Editor/EditorRow';
import baseUrl from "../../../utils/baseUrl";

type WordGroup = {
  kanji: string;
  read: string;
  meaning: string;
};

const EditorForUpdate = ({ wordbook, user }) => {
  const [subject, setSubject] = useState(wordbook.subject);
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
    if (wordbook.user !== user._id) {
      Router.push(`/wordbook/${wordbook._id}`);
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

    const { content, wordbook_id } = event.target;
    const wordbookId = wordbook_id.value;
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

    // Wordbook 모델에 전송할 subject, words, wordbookId를 오브젝트에 넣는다
    const wordbook = {
      subject : subject,
      words,
      wordbookId
    };

    // Wordbook을 수정하는 api를 호출한다
    const wordbookUrl = `${baseUrl}/api/wordbook`;
    const payload = wordbook;
    const updatedWordbook = await axios.put(wordbookUrl, payload);

    if (updatedWordbook.status === 200) {
      Router.push('/wordbook');
    } else if (updatedWordbook.status === 400) {
      new Error(`Error occured : ${updatedWordbook.status}, ${updatedWordbook.statusText}`);
    }
  };

  const handleChangeSubject = (event: any) => {
    const val = event.target.value;
    setSubject(val);
  };

  return (
    <main className="editor">
      <Head>
        <title>Vetsu X 2 - Update</title>
      </Head>
      <section className="editor-container">
        <form className="editor__form" onSubmit={handleSubmit}>
          <input 
            type="hidden"
            name="wordbook_id"
            value={wordbook._id}
          />
          <label className="editor__form--subject" htmlFor="subject">Subject:&nbsp;&nbsp;
            <input
              className="editor__form--subject-input" 
              type="text"
              name="subject" 
              id="subject"
              ref={titleRef}
              value={subject}
              onChange={handleChangeSubject}
            />
          </label>
          <div className="editor__form--row-container">
            {wordbook.words.map((row, idx) => {
              return (
                <EditorRow 
                  key={idx}
                  row={row}
                  onComplete={onComplete}
                />
              )
            })}
            {rowEditors}
          </div>
          <button className="editor__form--submit-btn" type="submit">
            Update a wordbook
          </button>
        </form>
      </section>
    </main>
  );
};

EditorForUpdate.getInitialProps = async (ctx: any) => {
  const wordbookId = ctx.query.wbid;
  const token = nookies.get(ctx).token;
  const userUrl = `${baseUrl}/api/user`;
  const userPayload = { headers: { Authorization : token }};
  const userResponse = await axios.get(userUrl, userPayload);
  const user = userResponse.data;

  const wordbookUrl = `${baseUrl}/api/wordbook/${wordbookId}`;
  const wordbookResponse = await axios.get(wordbookUrl);
  const wordbook = wordbookResponse.data;

  return { wordbook, user };
};

export default EditorForUpdate;