import './App.css';
import { registerMicroApps, start } from 'qiankun';
import { useEffect } from 'react';

const getAppConfig = async () => {
  const isLocal = window.location.hostname === 'localhost';
  if(isLocal){
    const curApp = location.pathname.slice('/')?.[0]??'';
    return await (await fetch(`//${window.location.host}/${curApp}/app_config.json`)).json();
  }
  return await (await fetch('//static.ppspace.top/app_config.json')).json();
}

function App() {

useEffect(() => {
  const initApp = async () => {
    const config = getAppConfig();
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
