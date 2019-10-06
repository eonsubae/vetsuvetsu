import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { RootState } from '../../contexts/index';
import { complete, incomplete } from '../../contexts/editor';

import '../../styles/components/editor/editor.scss';
import EditorRow from '../../components/Editor/EditorRow';

const Editor: React.FC = () => {
  const lastRowDone = useSelector((state: RootState) => state.editor.lastRowDone);
  const dispatch = useDispatch();

  console.log(lastRowDone);

  const onComplete = () => {
    dispatch(complete());
  }

  const onIncomplete = () => {
    dispatch(incomplete());
  }

  return (
    <main className="editor">
      <section className="editor-container">
        <form className="editor__form" action="http://localhost:3000/api/editor" method="post">
          <label className="editor__form--subject" htmlFor="subject">Subject:&nbsp;&nbsp;
            <input className="editor__form--subject-input" type="text" name="subject" id="subject" />
          </label>
          <div className="editor__form--row-container">
            <EditorRow
              onComplete={onComplete}
              onIncomplete={onIncomplete}
            />
          </div>
        </form>
      </section>
    </main>
  );
};

export default Editor;