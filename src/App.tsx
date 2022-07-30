import Game from 'lib/Game/Game';
import {useEffect, useState} from 'react';
import {IconMoon, IconSun} from '@tabler/icons';

const App = () => {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    setTheme((prev) => prev === 'dark' ? 'light' : 'dark');
  };

  useEffect(() => {
    if (theme === 'dark') {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [theme]);

  return (
    <div className="h-full flex flex-col bg-white text-whiteFg dark:bg-dark dark:text-darkFg">
      <nav className="flex justify-end p-2">
        <div
          className="hover:cursor-pointer hover:bg-whiteHighlight active:bg-whiteHighlightActive hover:dark:bg-darkHighlight active:dark:bg-darkHighlightActive rounded-lg p-1"
          onClick={toggleTheme}>
          {theme === 'dark' ? <IconSun size={30} /> : <IconMoon size={30} />}
        </div>
      </nav>
      <main className="flex flex-col flex-1 max-w-[500px] m-auto w-full">
        <Game />
      </main>
    </div>
  );
};

export default App;
