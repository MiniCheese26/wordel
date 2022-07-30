import {IconBackspace} from '@tabler/icons';
import {useEffect, useRef} from 'react';

type Props = {
  letter: string,
  onKeyDown: (letter: string) => void,
}

const Letter = ({ letter, onKeyDown }: Props) => {
  const letterRef = useRef<HTMLDivElement | null>(null);

  let override;

  if (letter === '[') {
    override = 'ENTER';
  } else if (letter === ']') {
    override = <IconBackspace size={30} />;
  }

  const onKeyDownHandler = (e: KeyboardEvent) => {
    if (e.key === letter) {
      onKeyDown(letter);
    }
  };

  const onClickHandler = () => {
    let parsedLetter = letter;

    if (parsedLetter === '[') {
      parsedLetter = 'enter';
    } else if (parsedLetter === ']') {
      parsedLetter = 'backspace';
    }

    onKeyDown(parsedLetter);
  };

  useEffect(() => {
    window.addEventListener('keydown', onKeyDownHandler);

    if (letterRef.current) {
      letterRef.current?.addEventListener('click', onClickHandler);
    }

    return () => {
      window.removeEventListener('keydown', onKeyDownHandler);

      if (letterRef.current) {
        letterRef.current?.removeEventListener('click', onClickHandler);
      }
    };
  });

  return (
    <div ref={letterRef} className={`flex justify-center items-center font-semibold uppercase select-none ${override
      ? 'flex-[2]'
      : 'flex-1'} text-sm md:text-md h-14 rounded-md bg-whiteHighlight hover:bg-whiteHighlightDim dark:bg-darkHighlight hover:dark:bg-darkHighlightDim hover:cursor-pointer`}>
      {override || letter}
    </div>
  );
};

export default Letter;
