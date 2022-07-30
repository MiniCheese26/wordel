import Letter from 'lib/Keyboard/Letter';
import {useEffect} from 'react';

const ALPHABET = [
  'qwertyuiop',
  'asdfghjkl',
  '[zxcvbnm]'
];

type Props = {
  onKeyDown: (letter: string) => void,
}

const Keyboard = ({ onKeyDown }: Props) => {
  const onSpecialKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Backspace' || e.key === 'Enter') {
      onKeyDown(e.key.toLowerCase());
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', onSpecialKeyDown);

    return () => {
      window.removeEventListener('keydown', onSpecialKeyDown);
    };
  });

  return (
    <div className="flex flex-col gap-2 mb-2 mx-2 flex-1">
      {ALPHABET.map((letters, index) => (
        <div key={index} className="flex gap-1 md:gap-2 justify-center">
          {[...letters].map((letter) => (
            <Letter key={letter} letter={letter} onKeyDown={onKeyDown} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Keyboard;
