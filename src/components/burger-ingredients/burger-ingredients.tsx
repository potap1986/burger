import { Tab, Counter} from '@ya.praktikum/react-developer-burger-ui-components'
import React, {useState, useEffect} from 'react';
import styles from './burger-ingredients.module.css';

const tabs = [{id: 'bun', title: 'Булки'}, {id: 'sauce', title: 'Соусы'},{id: 'main', title: 'Начинки'}];

const BurgerIngredients = () => {
  const [current, setCurrent] = useState('bun');
  
  useEffect(() => {
    const target = document.querySelector(`#${current}`)
    target.scrollIntoView({behavior: 'smooth'});
  }, [current]);
  
  const filteredList = {};

  tabs.forEach((tab) => {
    filteredList[tab.id] = list.filter(item => item.type === tab.id);
  });
  
  return (
      <div className={"pt-10 pb-10 " + styles.header}>
        <Tab value="one" active={current === 'one'} onClick={setCurrent}>
          Булки
          <Counter count={1} size="default" extraClass="m-1" />
        </Tab>
        <Tab value="two" active={current === 'two'} onClick={setCurrent}>
          Соусы
        </Tab>
        <Tab value="three" active={current === 'three'} onClick={setCurrent}>
          Начинки
        </Tab>
      </div>
  );

}

export default BurgerIngredients;
