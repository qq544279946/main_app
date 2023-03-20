import './App.css';
import { registerMicroApps, start } from 'qiankun';
import { useEffect } from 'react';

const getAppConfig = async () => {
  const isLocal = window.location.hostname === 'localhost';
  if (isLocal) {
    const curApp = window.location.pathname.slice('/')?.[0] ?? '';
    return await (await fetch(`//${window.location.host}/${curApp}/app_config.json`)).json();
  }
  const res =  await (await fetch('https://static.ppspace.top/app_config.json')).json();
  console.log(res);
  return res;
}

function App() {

  useEffect(() => {
    const initApp = async () => {
      const config = await getAppConfig();
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
