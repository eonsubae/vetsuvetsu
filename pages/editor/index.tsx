import { NextPage } from 'next';

import '../../styles/components/editor/editor.scss';
import EditorRow from '../../components/Editor/EditorRow';

const Editor: NextPage = () => {
  return (
    <main className="editor">
      <section className="editor-container">
        <form className="editor__form" action="http://localhost:3000/api/editor" method="post">
          <label className="editor__form--subject" htmlFor="subject">Subject:&nbsp;&nbsp;
            <input className="editor__form--subject-input" type="text" name="subject" id="subject" />
          </label>
          <div className="editor__form--row-container">
            <EditorRow />
          </div>
        </form>
      </section>
    </main>
  );
};

export default Editor;