import React from 'react';

import SearchPanel from '../SearchPanel/SearchPanel';
import ButtonTraining from '../ButtonTraining/ButtonTraining';

import styles from './Header.module.scss';

function Header(){
    return (
        <header>
            <div className={styles.header}>
                Здесь можно будет найти слово из таблицы или выбрать категорию
                <SearchPanel/>
                <ButtonTraining/>
            </div>

        </header>
    );
};

  
export default Header;