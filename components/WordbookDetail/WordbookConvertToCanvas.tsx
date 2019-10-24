import { useState, useEffect, useRef } from 'react';
import html2canvas from 'html2canvas';
import jspdf from 'jspdf';

import '../../styles/components/wordbook/wordbook-canvas.scss';
import Router from 'next/router';

const WordbookConvertToCanvas = ({ wordbook, wordsCount, backToWordbook }) => {
  const [printingWords, setPrintingWords] = useState([]);
  const wordlistRef = useRef(null);

  useEffect(() => {
    const wordbookLen = wordbook.words.length;

    // 단어갯수보다 wordsCount가 크면 단어갯수만큼을 출력한다
    if (wordsCount > wordbookLen) {
      setPrintingWords(wordbook.words);
    }
    else {
      // 그 이외에는 wordsCount만큼 wordbook.words 안에서 셔플을 통해 임의로 단어를 선택해낸다
      const words = wordbook.words.slice();
      const randomWords = [];
      let indexLimit = words.length - 1;
  
      for (let quantity = 0; quantity < wordsCount; quantity++) {
        const idx = Math.floor(Math.random() * indexLimit--);
        const pickedWord = words.splice(idx, 1)[0];
        randomWords.push(pickedWord);
      }

      setPrintingWords(randomWords);
    }
  }, []);

  const handlePdf = () => {
    const wordlist = wordlistRef.current;
    console.log(wordlist);

    html2canvas(wordlist).then(canvas => {
      const doc = new jspdf('p', 'mm');

      const imgData = canvas.toDataURL('image/png');

      const imgWidth = 210; // 이미지 가로 길이(mm) A4 기준
      const imgHeight = canvas.height * imgWidth / canvas.width;

      doc.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);

      doc.save('word-test.pdf');
    })    
  };
  
  return (
    <main className="canvas-container">
      <div>
        <button type="button" onClick={handlePdf}>Create a file</button>
        <button type="button" onClick={_ => Router.push(`/wordbook/${wordbook._id}`)}>Close Pdf</button>
      </div>
      <table className="wordbook-table" ref={wordlistRef}>
        <thead>
          <tr>
            <th className="wordbook-table__subject" colSpan={4}>{wordbook.subject}</th>
          </tr>
        </thead>
        <tbody>
          {printingWords.map((w, idx) => 
            <tr key={wordbook._id + idx} className="wordbook-table__word">
              <td className="wordbook-table__number">
               {idx + 1}
              </td>
              <td 
                className="wordbook-table__word--kanji" 
              >{w.kanji}</td>
              <td 
                className="wordbook-table__word--yomikata"
              >{w.read}</td>
              <td 
                className="wordbook-table__word--meaning"
              >{w.meaning}</td>
            </tr>
          )}
        </tbody>
      </table>
    </main>
  );
};

export default WordbookConvertToCanvas;