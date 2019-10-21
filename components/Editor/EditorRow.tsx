import React, { useState, useEffect, useRef } from 'react';
import { MdClear } from 'react-icons/md';

import '../../styles/components/editor/editor-row.scss';
import EditorSmall from './EditorSmall';

type Element = {
  type: string;
  value: any;
};

type EditRowProps = {
  onComplete: () => void;
  row?: any;
}

const EditorRow = ({ onComplete, row }: EditRowProps) => {
  const [inputText, setInputText] = useState("");
  const [elements, setElements] = useState<Element[]>([]);
  const [isComplete, setIsComplete] = useState(false);
  const rowContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (row) {
      handleSavedWord();
    }
  }, []);

  const handleSavedWord = () => {
    const ele = [];
    Object.entries(row).forEach(arr => {
      let type;
      if (ele.length === 0) type = "漢字";
      else if (ele.length === 1) type = "読み方";
      else type = "意味"
  
      const element: Element = {
        type: type,
        value: arr[1]
      };
      ele.push(element);
  
      if (ele.length === 3) {
        setElements(prevState => prevState.concat(ele));
        setIsComplete(true);
      }
    });
  }

  const handleKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
    event.preventDefault();
    const keyCode = event.keyCode;
    let trimmedText;
    const isFinishedInput = (keyCode === 20) ? true : false;

    // 스페이스를 입력할때까지 리턴한다
    if (!isFinishedInput) {
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

  const handleRowRemove = (event: React.MouseEvent<HTMLButtonElement>) => {
    const row: HTMLElement | null = event.currentTarget.parentElement;
    const rowCount: number = row.parentElement.childNodes.length;

    if (rowCount === 1) return;
    row.remove();
  }

  return (
    <div className="editor-row" ref={rowContainerRef}>
      {elements.map((el, idx) => 
        <EditorSmall 
          key={idx}
          type={el.type}
          value={el.value}
        />
      )}
      {row ? null :
        (
          <input 
            autoFocus
            className="editor-row__input"
            type="text" 
            onKeyUp={handleKeyUp}
            onChange={handleTextInput}
            value={inputText}
            disabled={isComplete}
          />
        )
      }
      <button disabled={!isComplete} className="editor-row__btn" type="button" onClick={handleRowRemove}>
        <MdClear className="editor-row__btn--icon" />
      </button>
    </div>
  );
};

export default EditorRow;