import { useState, useEffect, useRef } from 'react';
import html2canvas from 'html2canvas';
import jspdf from 'jspdf';

import '../../styles/components/wordbook/wordbook-canvas.scss';
import Router from 'next/router';

const WordbookConvertToCanvas = ({ wordbook, wordsCount, backToWordbook }) => {
  const [printingWords, setPrintingWords] = useState([]);
  const [isSeeAll, setIsSeeAll] = useState(false);
  const wordlistRef = useRef(null);

  useEffect(() => {
    const wordbookLen = wordbook.words.length;

    // 단어갯수보다 wordsCount가 크면 단어갯수만큼을 출력한다
    if (wordsCount > wordbookLen) {
      setPrintingWords(wordbook.words);
    }
    else {
      // 그 이외에는 wordsCount만큼 wordbook.words 안에서 셔플을 통해 임의로 단어를 선택해낸다
      shuffleWords();
    }
  }, []);

  const shuffleWords = () => {
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

  const handlePdf = () => {
    const wordlist = wordlistRef.current;

    html2canvas(wordlist).then(canvas => {
      const doc = new jspdf('p', 'mm');

      const imgData = canvas.toDataURL('image/png');

      const imgWidth = 210; // 이미지 가로 길이(mm) A4 기준
      const imgHeight = canvas.height * imgWidth / canvas.width;

      doc.addImage(imgData, 'PNG', -2, 0, imgWidth, imgHeight);

      if (isSeeAll) {
        doc.save(wordbook.subject.replace(/ /g, '_') + '-answer.pdf');
      } else {
        doc.save(wordbook.subject.replace(/ /g, '_') + '-test.pdf');
      }
    })    
  };

  const handleOnlyKanji = () => {
    setIsSeeAll(false);
  };

  const handleSeeAll = () => {
    setIsSeeAll(true);
  };
  
  return (
    <main className="canvas-container">
      <div className="canvas-btn-container">
        <button type="button" onClick={shuffleWords}>Shuffle</button>
        <button type="button" onClick={handleOnlyKanji}>Only Kanji</button>
        <button type="button" onClick={handleSeeAll}>See All</button>
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
          <tr className="wordbook-table__word">
            <td className="wordbook-table__word--number"></td>
            <td className="wordbook-table__word--kanji">漢字</td>
            <td className="wordbook-table__word--yomikata">読み方</td>
            <td className="wordbook-table__word--meaning">意味</td>
          </tr>
          {printingWords.map((w, idx) => 
            <tr key={wordbook._id + idx} className="wordbook-table__word">
              <td className="wordbook-table__word--number">
               {idx + 1}
              </td>
              <td 
                className="wordbook-table__word--kanji" 
              >{w.kanji}</td>
              <td 
                className="wordbook-table__word--yomikata"
              >
                <span 
                  style={isSeeAll ? 
                        { visibility: 'visible' } : 
                        { visibility: 'hidden'}}
                >{w.read}</span></td>
              <td 
                className="wordbook-table__word--meaning"
              >
                <span style={isSeeAll ? 
                  { visibility: 'visible' } : 
                  { visibility: 'hidden'}}
                >{w.meaning}</span></td>
            </tr>
          )}
        </tbody>
      </table>
    </main>
  );
};

export default WordbookConvertToCanvas;