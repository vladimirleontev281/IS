import React from 'react';
import styles from './App.module.css';
import Switcher from './components/Switcher/Switcher';

function App() {
  return <div className={styles.container}>
    <div>
      <p>{'<Switcher />'}</p>
      <Switcher />
    </div>
    <div>
      <p>{'<Switcher value={false} />'}</p>
      <Switcher value={false} />
    </div>
    <div>
      <p>{`<Switcher yesText={'must contain'} noText={'must not contain'} />`}</p>
      <Switcher yesText={'must contain'} noText={'must not contain'} />
    </div>
  </div>;
}
export default App;
