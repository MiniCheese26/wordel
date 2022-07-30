import Word from 'lib/Game/Word';

type Props = {
  words: string[],
}

const Words = ({ words }: Props) => {
  return (
    <div className="flex flex-col flex-1 gap-2 justify-center items-center max-w-[350px] mx-2">
      {[...Array(6).keys()].map((index) => (
        <Word key={`${words[index] ?? ''}-${index}`} word={words[index] ?? ''} lineIndex={index} />
      ))}
    </div>
  );
};

export default Words;
