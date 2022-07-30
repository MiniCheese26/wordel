import Words from 'lib/Game/Words';
import Keyboard from 'lib/Keyboard/Keyboard';
import {LETTERS} from 'lib/constants';
import useStateRef from 'react-usestateref';
import {useRef} from 'react';

const Game = () => {
  const [words, setWords, wordsRef] = useStateRef<string[]>([]);
  const currentLine = useRef(0);

  const onKeyDown = (letter: string) => {
    console.debug(letter);
    if (letter === 'enter') {
      if (wordsRef.current[currentLine.current] && wordsRef.current[currentLine.current].length < LETTERS) {
        return;
      }

      currentLine.current += 1;
    } else if (letter === 'backspace') {
      setWords((prev) => {
        const copy = [...prev];

        if (copy[currentLine.current]) {
          copy[currentLine.current] = copy[currentLine.current].slice(0, -1);
        }

        return copy;
      });
    } else {
      setWords((prev) => {
        const copy = [...prev];

        if (prev[currentLine.current] && prev[currentLine.current].length + 1 > LETTERS) {
          return copy;
        }

        if (copy[currentLine.current]) {
          copy[currentLine.current] += letter;
        } else {
          copy[currentLine.current] = letter;
        }

        return copy;
      });
    }
  };

  return (
    <>
      <div className="flex justify-center items-center flex-[5]">
        <Words words={words} />
      </div>
      <div className="flex items-center justify-center flex-1">
        <Keyboard onKeyDown={onKeyDown} />
      </div>
    </>
  );
};

export default Game;
