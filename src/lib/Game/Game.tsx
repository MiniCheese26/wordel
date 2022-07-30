import Words from 'lib/Game/Words';
import Keyboard from 'lib/Keyboard/Keyboard';

const Game = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center flex-[5]">
        <Words />
      </div>
      <div className="flex items-center justify-center flex-1">
        <Keyboard />
      </div>
    </>
  )
}

export default Game;
