import styles from './App.module.scss';

import Words from './components/Words/Words';
import Card from './components/Card/Card';




function App() {
    return (
        <div className={styles.app}>
            <Words/>
            <Card/>
          
        </div>
    );
}

export default App;
