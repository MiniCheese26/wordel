import {LETTERS} from 'lib/constants';

export enum LetterStatus {
  Exact,
  InWord,
  Invalid,
  Unsubmitted,
}

type Props = {
  letter: string,
  status: LetterStatus,
}

const height = (LETTERS * 55) / LETTERS;

const Letter = ({ letter, status }: Props) => {
  let backgroundColour: string;
  let borderColour: string;

  switch (status) {
    case LetterStatus.Exact:
      backgroundColour = 'bg-green';
      borderColour = 'border-green';
      break;
    case LetterStatus.InWord:
      backgroundColour = 'bg-yellow';
      borderColour = 'border-yellow';
      break;
    case LetterStatus.Invalid:
      backgroundColour = 'bg-darker';
      borderColour = 'border-darker';
      break;
    default:
      backgroundColour = 'transparent';
      borderColour = letter
        ? 'border-whiteHighlightBorder dark:border-darkHighlightBorder'
        : 'border-whiteHighlightActive dark:border-darkHighlightActive';
      break;
  }

  let textColour: string;

  switch (status) {
    case LetterStatus.Invalid:
    case LetterStatus.Exact:
    case LetterStatus.InWord:
      textColour = 'text-darkFg';
      break;
    default:
      textColour = 'text-whiteFg dark:text-darkFg';
      break;
  }

  return (
    <div
      className={`flex flex-1 justify-center items-center font-bold text-2xl uppercase select-none border-2 ${textColour} ${borderColour} ${backgroundColour}`}
      style={{ height: `${height}px` }}>
      {letter}
    </div>
  );
};

export default Letter;
