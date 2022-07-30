import {IconBackspace} from '@tabler/icons';
import React, {useEffect} from 'react';

type Props = {
  letter: string,
  onKeyDown: (letter: string) => void,
}

const Letter = ({ letter, onKeyDown }: Props) => {
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

  const onClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
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

    return () => {
      window.removeEventListener('keydown', onKeyDownHandler);
    };
  });

  return (
    <button onClick={onClickHandler}
            className={`flex justify-center items-center font-bold uppercase select-none ${override
              ? 'flex-[2]'
              : 'flex-1'} text-sm md:text-md h-14 rounded-md bg-whiteHighlight hover:bg-whiteHighlightDim active:bg-whiteHighlightActive dark:bg-darkHighlight hover:dark:bg-darkHighlightDim active:dark:bg-darkHighlightActive hover:cursor-pointer`}>
      {override || letter}
    </button>
  );
};

export default Letter;
