import { createContext, useState } from "react";


const ModalContext = createContext();

const ModalProvider = ({ children }) => {
    const [isOpen, setIsopen] = useState(false);
    const [content, setContent] = useState(null);

    // --- for changing the navbar style when user is in blog page
    const [isBlog, setIsBlog] = useState(false); 
    const changeNavbar = (isTrue) => {
        setIsBlog(isTrue);
    }

    const openModal = (modalContent) => {
        setContent(modalContent);
        setIsopen(true);
    }

    const closeModal = () => {
        setContent(null);
        setIsopen(false);
    }

    // --- setting English-Bangla Translation button in blog page    
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

    return (
        <ModalContext.Provider value={{ isOpen, openModal, closeModal, content, isBlog, changeNavbar, bangla, english, setButtonStatusBangla, setButtonStatusEnglish }}>
            {children}
        </ModalContext.Provider>
    )
}

export {ModalContext, ModalProvider} ; 