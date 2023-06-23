import React from 'react';

import SearchPanel from '../SearchPanel/SearchPanel';
import ButtonTraining from '../ButtonTraining/ButtonTraining';

import logo from '../../utils/logo1.png';

import styles from './Header.module.scss';

  
export default  function Header(){
   
    
    return (
        <header>
            <div className = { styles.header }>
                <SearchPanel/>
                <ButtonTraining/>
            </div>
            <img src={logo} className = { styles.logo } alt="logo" />
        </header>
    );
};

