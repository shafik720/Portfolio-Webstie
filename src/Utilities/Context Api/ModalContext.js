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
    return (
        <ModalContext.Provider value={{ isOpen, openModal, closeModal, content, isBlog, changeNavbar }}>
            {children}
        </ModalContext.Provider>
    )
}

export {ModalContext, ModalProvider} ; 