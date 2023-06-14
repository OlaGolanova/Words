import React from 'react';

import styles from './SearchPanel.module.scss';

const SearchPanel = () => {
    return (
        <form action="">           
            <input
                className={styles.searchPanel}
                type="text"
                placeholder="Введите слово"
            />
        </form>
    );
};

export default SearchPanel;