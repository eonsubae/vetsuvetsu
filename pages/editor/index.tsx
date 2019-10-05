import { NextPage } from 'next';

import '../../styles/components/editor/editor.scss';
import EditorRow from '../../components/Editor/EditorRow';

const Editor: NextPage = () => {
  return (
    <main className="editor">
      <section className="editor-container">
        <form>
          <EditorRow />
        </form>
      </section>
    </main>
  );
};

export default Editor;