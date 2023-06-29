import React from 'react';

import './App.scss';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Table from './components/Table/Table';
import Card from './components/Card/Card';




export default function App() {

    return (
        <>
            <Header />
            <div className = "app">
                <Table />
                <Card/>
            </div>
            <Footer />
        </>
       
    );
};

 