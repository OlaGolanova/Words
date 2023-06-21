import React from 'react';

import SearchPanel from '../SearchPanel/SearchPanel';
import ButtonTraining from '../ButtonTraining/ButtonTraining';

import logo2 from '../../utils/logo3.png';

import styles from './Header.module.scss';

  
export default  function Header(){
   
    
    return (
        <header>
            <div className = { styles.header }>
                <SearchPanel/>
                <ButtonTraining/>
            </div>
            <img src={logo2} className = { styles.logo } alt="logo" />
        </header>
    );
};

