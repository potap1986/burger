import { Logo,  BurgerIcon, ProfileIcon, ListIcon} from '@ya.praktikum/react-developer-burger-ui-components'
import React from 'react';
import styles from './app-header.module.css';

const AppHeader = () => {
  return (
      <header className={"pt-4 pb-4 " + styles.header}>
        <div className={styles.wrapper +" container"}>
          <nav className={'text text_type_main-default  ' + styles.menu}>
            <a href="constructor" className={'p-5 mr-2 ' + styles.button + ' ' + styles.active}>
              <BurgerIcon type="primary" />
              <span className="ml-2">Конструктор</span>
            </a>
            <a href="list" className={'p-5 mr-2 text_color_inactive ' + styles.button}>
              <ListIcon  type="secondary" />
              <span className="ml-2">Лента заказов</span>
            </a>
          </nav>
          <div className={styles.logo}>
            <Logo />
          </div>
          <nav className={'text text_type_main-default ' + styles.usermenu}>
            <a className={'p-5 ml-2  text_color_inactive ' + styles.button} href="account">
                <ProfileIcon  type="secondary" />
                <span className="ml-2">Личный кабинет</span>
            </a>
          </nav>
        </div>
      </header>
  );
}

export default AppHeader;
