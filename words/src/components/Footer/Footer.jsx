import React from 'react';

import  './Footer.scss';



export default function Footer(){
    return (
        <footer className = "footer" >
            <a 
                href="https://telegram.me/musicola"  
                target="_blank" 
                rel="noreferrer">©OlaGolanova {new Date().getFullYear()}г</a>
        </footer>
    );
};

  