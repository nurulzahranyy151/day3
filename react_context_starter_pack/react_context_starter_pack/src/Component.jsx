import { useEffect } from 'react';

export default function Component() {
  const lightModeMediaQuery = window.matchMedia('(prefers-color-scheme: light)');
  const mode = lightModeMediaQuery.matches ? 'light' : 'dark';

  useEffect(() => {
    const root = document.getElementById('root');

    if (mode === 'light') {
      root.classList.add('light-mode');
      root.classList.remove('dark-mode');
    } else {
      root.classList.add('dark-mode');
      root.classList.remove('light-mode');
    }
  }, [mode]);

  const handleChangeTheme = () => {
  };

  return (
    <div className="card">
      <h1>Hands-on React Context</h1>
      <p>Current Theme: {mode}</p>
      <button onClick={handleChangeTheme}>
        Change Theme
      </button>
    </div>
  )
}
