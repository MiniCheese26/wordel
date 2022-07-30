import Letter, {LetterStatus} from 'lib/Game/Letter';
import {LETTERS, TARGET_WORD} from 'lib/constants';

type Props = {
  word: string,
  lineIndex: number,
  submitted: boolean,
}

const Word = ({ word, lineIndex, submitted }: Props) => {
  const getStatus = (letter: string, index: number) => {
    if (submitted) {
      if (TARGET_WORD[index] === letter) {
        return LetterStatus.Exact;
      } else if (TARGET_WORD.includes(letter)) {
        return LetterStatus.InWord;
      } else {
        return LetterStatus.Invalid;
      }
    } else {
      return LetterStatus.Unsubmitted;
    }
  }

  return (
    <div className="flex gap-2 justify-center w-full">
      {[...Array(LETTERS).keys()].map((index) => (
        <Letter key={`${word}-${word[index]}-${index}-${lineIndex}`} letter={word[index]} status={getStatus(word[index] ?? '', index)} />
      ))}
    </div>
  );
};

export default Word;
