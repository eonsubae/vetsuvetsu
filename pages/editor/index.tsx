import { NextPage } from 'next';

import '../../styles/components/editor/editor.scss';
import EditorRow from '../../components/Editor/EditorRow';

const Editor: NextPage = () => {
  return (
    <main className="editor">
      <section className="editor-container">
        <form>
          <label id="subject">주제: </label>
          <input type="text" name="subject" />
          <EditorRow />
        </form>
      </section>
    </main>
  );
};

export default Editor;