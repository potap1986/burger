import React from 'react';
import AppHeader from '../app-header/app-header';
import styles from './app.module.css';

const App = () => {

  return (
    <div className={styles.screen + " pb-10"}>
      <AppHeader />
      <main>
      </main>
    </div>
  );
}

export default App;