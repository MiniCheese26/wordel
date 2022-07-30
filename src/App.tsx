import Game from 'lib/Game/Game';

const App = () => {
  return (
    <div className="h-full flex flex-col bg-white text-whiteFg dark:bg-dark dark:text-darkFg">
      <nav>
        Nav
      </nav>
      <main className="flex flex-col flex-1 max-w-[500px] m-auto w-full">
        <Game/>
      </main>
    </div>
  );
};

export default App;
