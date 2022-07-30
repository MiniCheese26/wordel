import Game from 'lib/Game/Game';

const App = () => {
  return (
    <div className="h-screen w-screen flex flex-col bg-dark text-white">
      <nav>
        Nav
      </nav>
      <main className="flex flex-col flex-1">
        <Game/>
      </main>
    </div>
  );
};

export default App;
