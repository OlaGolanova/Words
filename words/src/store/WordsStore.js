
import { observable, action } from 'mobx';

const WordsStore = () => {
    const words = observable([]);

    const addWord = action((word) => {
        words.push(word);
    });

    const removeWord = action((index) => {
        words.splice(index, 1);
    });

    return {
        words,
        addWord,
        removeWord,
    };
};

export default WordsStore;