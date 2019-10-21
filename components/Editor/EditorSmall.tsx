import React, { useState, useEffect, useRef } from 'react';
import { MdEdit } from 'react-icons/md';

import '../../styles/components/editor/editor-small.scss';

type SmallElement = {
  type: string,
  value: string
};

const EditorSmall = (el: SmallElement) => {
  const [editedText, setEditedText] = useState(el.value);
  const [useEdit, setUseEdit] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (useEdit && inputRef.current) {
      inputRef.current.focus();
    }
  }, [useEdit]);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    event.preventDefault();
    const keyCode = event.keyCode;
    let trimmedText;
    const isFinishedInput = (keyCode === 20) ? true : false;

    if (!isFinishedInput) {
      return;
    }
    
    trimmedText = editedText.trim();

    if (trimmedText === "") {
      setEditedText("");
      return;
    } else {
      setUseEdit(false);
    }
  }

  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const val = event.target.value;
    setEditedText(val);
  }

  return (
    <div className="editor-small">
      <div className="editor-small__content">
        <span className="editor-small__content--type">{el.type}</span>&nbsp;
        <span className="editor-small__content--value">{editedText}</span>
        <span className="editor-small__content--edit" onClick={() => setUseEdit(true)}>
          <MdEdit size="2rem" />
        </span>
      </div>
      <label htmlFor="content">
        <input 
          className="editor-small__input"
          type="text" 
          name="content"
          value={editedText}
          disabled={!useEdit}
          ref={inputRef}
          onChange={handleTextChange}
          onKeyUp={handleKeyDown}
        />
      </label>
    </div>
  )
};

export default EditorSmall;