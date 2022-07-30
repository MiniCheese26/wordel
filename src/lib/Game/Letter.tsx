type Props = {
  letter: string,
}

const Letter = ({ letter }: Props) => {
  return (
    <div className="flex flex-1 justify-center items-center font-bold text-lg h-14 uppercase select-none border-2 border-whiteHighlightBorder dark:border-darkHighlightBorder">
      {letter}
    </div>
  );
};

export default Letter;
