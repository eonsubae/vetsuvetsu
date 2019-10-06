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
    const keyCode = event.keyCode;
    let trimmedText;

    if (keyCode !== 32) {
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
    const val = event.target.value;
    if (val === " ") return;
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
      <label>
        <input 
          type="hidden"
          value={el.type}
        />
      </label>
      <label htmlFor="content">
        <input 
          id={`content-`}
          className="editor-small__input"
          type="text" 
          value={editedText}
          disabled={!useEdit}
          ref={inputRef}
          onChange={handleTextChange}
          onKeyDown={handleKeyDown}
        />
      </label>
    </div>
  )
};

export default EditorSmall;