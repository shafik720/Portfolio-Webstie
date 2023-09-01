import React, { useContext, useState } from 'react';
import './TranslationButton.css';
import { ModalContext } from '../Context Api/ModalContext';

const TranslationButton = () => {
    const {bangla, english, setButtonStatusBangla, setButtonStatusEnglish} = useContext(ModalContext)
    // console.log(bangla);
    return (
        <div className='translate-button'>
            <button className={`english-button ${english && 'active'}`} onClick={setButtonStatusEnglish}>English</button>
            <button className={`bangla-button ${bangla && 'active'}`} onClick={setButtonStatusBangla}>বাংলা</button>
        </div>
    );
};

export default TranslationButton;