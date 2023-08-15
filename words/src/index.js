import React from 'react';
import ReactDOM from 'react-dom/client';


import './index.scss';
import App from './App';
import { WordsContextProvider } from './components/WordsContextProvider/WordsContextProvider';




const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
    <WordsContextProvider>
        <App />
    </WordsContextProvider>
   
);


