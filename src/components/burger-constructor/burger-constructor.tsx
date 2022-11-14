import { Tab, Counter} from '@ya.praktikum/react-developer-burger-ui-components'
import React from 'react';
import styles from './burger-constructor.module.css';

const BurgerConstuctor = () => {
  const [current, setCurrent] = React.useState('one')
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

export default BurgerConstuctor;
