import React from 'react';
import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import styles from './app.module.css';

const App = () => {

  return (
    <div className={styles.screen + " pb-10"}>
      <AppHeader />
      <main>
        <BurgerIngredients />
      </main>
    </div>
  );
}

export default App;