import { useState, useEffect, useRef } from 'react';
import { MdEdit } from 'react-icons/md';

import '../../styles/components/editor/editor-small.scss';

type SmallElement = {
  type: string,
  value: string
};

const EditorSmall = (el: SmallElement) => {
  const [useEdit, setUseEdit] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (useEdit && inputRef.current) {
      inputRef.current.focus();
    }
  }, [useEdit]);

  return (
    <div className="editor-small">
      <div className="editor-small__content">
        <span className="editor-small__content--type">{el.type}</span>&nbsp;
        <span className="editor-small__content--value">{el.value}</span>
        <span className="editor-small__content--edit" onClick={() => setUseEdit(!useEdit)}>
          <MdEdit size="2rem" />
        </span>
      </div>
      <input 
        className="editor-small__input"
        type="text" 
        disabled={!useEdit}
        ref={inputRef}
      />
    </div>
  )
};

export default EditorSmall;