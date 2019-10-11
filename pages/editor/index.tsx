import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Router from 'next/router';

import { RootState } from '../../contexts/index';
import { complete, incomplete } from '../../contexts/editor';

import '../../styles/components/editor/editor.scss';
import EditorRow from '../../components/Editor/EditorRow';

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
    console.log('subject : ', subject.value);
    content.forEach(c => console.log(c));
  }

  return (
    <main className="editor">
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