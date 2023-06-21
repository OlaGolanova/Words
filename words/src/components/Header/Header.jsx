import React from 'react';

import SearchPanel from '../SearchPanel/SearchPanel';
import ButtonTraining from '../ButtonTraining/ButtonTraining';

import styles from './Header.module.scss';

  
export default  function Header(){
   
    
    return (
        <header>
            <div className = { styles.header }>
                <SearchPanel/>
                <ButtonTraining/>
            </div>

        </header>
    );
};

