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

  switch (status) {
    case LetterStatus.Exact:
      backgroundColour = 'bg-green';
      break;
    case LetterStatus.InWord:
      backgroundColour = 'bg-yellow';
      break;
    case LetterStatus.Invalid:
      backgroundColour = 'bg-darker';
      break;
    default:
      backgroundColour = 'transparent';
      break;
  }

  let borderColour: string;

  switch (status) {
    case LetterStatus.Exact:
      borderColour = 'border-green';
      break;
    case LetterStatus.InWord:
      borderColour = 'border-yellow';
      break;
    case LetterStatus.Invalid:
      borderColour = 'border-darker';
      break;
    default:
      borderColour = letter
        ? 'border-whiteHighlightBorder dark:border-darkHighlightBorder'
        : 'border-whiteHighlightActive dark:border-darkHighlightActive';
      break;
  }

  return (
    <div
      className={`flex flex-1 justify-center items-center font-bold text-2xl uppercase select-none border-2 text-darkFg ${borderColour} ${backgroundColour}`}
      style={{ height: `${height}px` }}>
      {letter}
    </div>
  );
};

export default Letter;
