import React, { useState } from 'react';
import './TranslationButton.css';

const TranslationButton = () => {
    const [bangla, setBangla] = useState(false);
    const [english, setEnglish] = useState(true);

    function setButtonStatusBangla(){
        setBangla(true);
        setEnglish(false);
    }
    function setButtonStatusEnglish(){
        setEnglish(true);
        setBangla(false);
    }
    // console.log(bangla);
    return (
        <div className='translate-button'>
            <button className={`english-button ${english && 'active'}`} onClick={setButtonStatusEnglish}>English</button>
            <button className={`bangla-button ${bangla && 'active'}`} onClick={setButtonStatusBangla}>বাংলা</button>
        </div>
    );
};

export default TranslationButton;