import Word from 'lib/Game/Word';
import {LETTERS, WORDS} from 'lib/constants';

type Props = {
  words: string[],
}

const maxWidth = LETTERS * 65;

const Words = ({ words }: Props) => {
  return (
    <div className={`flex flex-col flex-1 gap-2 justify-center items-center mx-2`}
         style={{ maxWidth: `${maxWidth}px` }}>
      {[...Array(WORDS).keys()].map((index) => (
        <Word key={`${words[index] ?? ''}-${index}`} word={words[index] ?? ''} lineIndex={index} />
      ))}
    </div>
  );
};

export default Words;
