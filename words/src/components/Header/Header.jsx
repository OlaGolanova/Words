import React from 'react';

import SearchPanel from '../SearchPanel/SearchPanel';
import Button from '../Button/Button';

import styles from './Header.module.scss';

const Header = () => {
    return (
        <header>
            <div className={styles.header}>
                Здесь можно будет найти слово из таблицы или выбрать категорию
                <SearchPanel/>
                <Button/>
            </div>

        </header>
    );
};

  
export default Header;