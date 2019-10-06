import React, { useState } from 'react';

import '../../styles/components/editor/editor-row.scss';
import EditorSmall from './EditorSmall';

type Element = {
  type: string;
  value: string;
};

type EditRowProps = {
  onComplete: () => void;
  onIncomplete: () => void;
}

const EditorRow = ({ onComplete, onIncomplete }: EditRowProps) => {
  const [inputText, setInputText] = useState("");
  const [elements, setElements] = useState<Element[]>([]);
  const [isComplete, setIsComplete] = useState(false);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const keyCode = event.keyCode;
    let trimmedText;

    // 스페이스를 입력할때까지 리턴한다
    if (keyCode !== 32) {
      return;
    }
    // 스페이스가 입력되면 이전까지 입력된 문자열을 trim한 결과를 캐싱한다
    trimmedText = inputText.trim();
    // trim한 결과 아무것도 입력되지 않았다면 input창을 초기화한다
    if (trimmedText === "") {
      setInputText("");
      return;
    }
    // 입력된 문자열이 있다면 article의 자식 Element로 한자, 요미카타, 의미를 생성한다
    let type;
    if (elements.length === 0) type = "漢字";
    else if (elements.length === 1) type = "読み方";
    else type = "意味"

    const element: Element = {
      type: type,
      value: trimmedText
    };
    setElements(prevState => prevState.concat(element));
    setInputText("");

    if (elements.length === 2) {
      setIsComplete(true);
      onComplete();
    }
  }

  const handleTextInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const val = event.target.value;
    if (val === " ") return;
    setInputText(val);
  }

  return (
    <div className="editor-row">
      {elements.map((el, idx) => 
        <EditorSmall 
          key={idx}
          type={el.type}
          value={el.value}
        />
      )}
      <input 
        className="editor-row__input"
        type="text" 
        onKeyDown={handleKeyDown}
        onChange={handleTextInput}
        value={inputText}
        disabled={isComplete}
      />
    </div>
  );
};

export default EditorRow;