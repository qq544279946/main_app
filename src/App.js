import './App.css';
import { registerMicroApps, start } from 'qiankun';
import { useEffect } from 'react';

function App() {

useEffect(() => {
  const initApp = async () => {
    const config = await (await fetch('//static.ppspace.top/app_config.json')).json();
    registerMicroApps(config);
    start();
  }

  initApp();
}, []);
  return (
    <div id="app-container">
    </div>
  );
}

export default App;
