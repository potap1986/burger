import {CurrencyIcon, DeleteIcon, DragIcon, ConstructorElement, Button} from '@ya.praktikum/react-developer-burger-ui-components'
import React, {useEffect} from 'react';
import styles from './burger-constructor.module.css';
import { ingredients } from '../../utils/data';

const getItem = (elem, types) => {

  return (    
    elem.type !== "bun" ? 
      <li key={elem._id + types + "element"} className={styles.item + ' mb-4'}>
        <button className={styles.btn + " mr-4"}>
          <DragIcon type="primary" />
        </button>
        <ConstructorElement
        text={elem.name}
        price={elem.price}
        thumbnail={elem.image}/>
      </li> :      
      <ConstructorElement
      key={elem._id + types + "element"}
      type={types}
      isLocked={true}
      text={elem.name}
      price={elem.price}
      thumbnail={elem.image}/>
    )
}

const BurgerConstuctor = ({burger , onOrder}) => {
  const burgerArr = [];
  burger.forEach(id => {burgerArr.push(ingredients.find(item => item._id === id))})
  const bun = burgerArr.find(el => el.type === 'bun');
  const burgerInner = burgerArr.filter(el => el.type !== 'bun');
  const burgerArr1 = [bun, ...burgerInner, bun];
  const totalAmount = burgerArr.reduce((acc, ingredient) => acc + ingredient.price, 0);
  
  return (
      <section className={"pt-25 " + styles.constructor}>       
        <div className={styles.top + ' ml-10 mb-4 pl-4 pr-3'}>
          {getItem(burgerArr1[0], "top")}
        </div> 
        <ul className={styles.content + ' mb-4 custom-scroll pl-4 pr-1'}>
          {burgerArr1.map((item, id, arr) => 
            {if ((id === 0) || (id === (arr.length - 1))) 
              return
            else return (
              getItem(item, null)
            )
          })}
        </ul>
          
        <div className={styles.bottom + ' ml-10 mb-4 pl-4 pr-3'}>
          {getItem(burgerArr1[burgerArr1.length - 1], "bottom")}
        </div>
        <div className={styles.summary}>
          <span className={styles.value + " text text_type_digits-medium mr-10"}>
            {totalAmount}
            <CurrencyIcon type="primary" />
          </span>
          <Button 
            htmlType="button" 
            type="primary" 
            size="large"
            onClick={onOrder}
          >
            Оформить заказ
          </Button>
        </div>
      </section>
  );
}

export default BurgerConstuctor;
