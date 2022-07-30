import Words from 'lib/Game/Words';
import Keyboard from 'lib/Keyboard/Keyboard';
import {useState} from 'react';

const Game = () => {
  const [currentLine, setCurrentLine] = useState(0);
  const [words, setWords] = useState<string[]>(['tests']);

  const onKeyDown = (letter: string) => {
    if (letter === 'enter') {
      if (words[currentLine] && words[currentLine].length < 5) {
        return;
      }

      setCurrentLine((prev) => prev + 1);
    } else if (letter === 'backspace') {
      setWords((prev) => {
        const copy = [...prev];

        if (copy[currentLine]) {
          copy[currentLine] = copy[currentLine].slice(0, -1);
        }

        return copy;
      });
    } else {
      if (words[currentLine] && words[currentLine].length + 1 > 5) {
        return;
      }

      setWords((prev) => {
        const copy = [...prev];

        if (copy[currentLine]) {
          copy[currentLine] += letter;
        } else {
          copy[currentLine] = letter;
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
