import Letter from 'lib/Game/Letter';

type Props = {
  word: string,
  lineIndex: number,
}

const Word = ({ word, lineIndex }: Props) => {
  return (
    <div className="flex gap-2 justify-center w-full">
      {[...Array(5).keys()].map((index) => (
        <Letter key={`${word}-${word[index] ?? ''}-${index}-${lineIndex}`} letter={word[index] ?? ''} />
      ))}
    </div>
  );
};

export default Word;
