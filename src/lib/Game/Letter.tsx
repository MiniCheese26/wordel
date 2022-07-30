import {LETTERS} from 'lib/constants';

type Props = {
  letter: string,
}

const height = (LETTERS * 55) / LETTERS;

const Letter = ({ letter }: Props) => {

  return (
    <div
      className="flex flex-1 justify-center items-center font-bold text-lg uppercase select-none border-2 border-whiteHighlightBorder dark:border-darkHighlightBorder"
      style={{ height: `${height}px` }}>
      {letter}
    </div>
  );
};

export default Letter;
