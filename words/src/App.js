import React from 'react';

import styles from './App.module.scss';

import Table from './components/Table/Table';
import Card from './components/Card/Card';




function App() {
    return (
        <div className={styles.app}>
            {/* <Table/> */}
            <Card/>
          
        </div>
    );
}

export default App;
