import Word from 'lib/Game/Word';
import {LETTERS, WORDS} from 'lib/constants';

type Props = {
  words: string[],
  linesSubmitted: number[],
}

const maxWidth = LETTERS * 65;

const Words = ({ words, linesSubmitted }: Props) => {
  console.debug('linesSubmitted', linesSubmitted);
  return (
    <div className={`flex flex-col flex-1 gap-2 justify-center items-center mx-2`}
         style={{ maxWidth: `${maxWidth}px` }}>
      {[...Array(WORDS).keys()].map((index) => (
        <Word key={`${words[index]}-${index}`} word={words[index] ?? ''} lineIndex={index}
              submitted={linesSubmitted.includes(index)} />
      ))}
    </div>
  );
};

export default Words;
