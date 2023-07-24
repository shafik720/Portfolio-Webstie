import { createContext, useState } from "react";


const ModalContext = createContext();

const ModalProvider = ({ children }) => {
    const [isOpen, setIsopen] = useState(false);
    const [content, setContent] = useState(null);

    const openModal = (modalContent) => {
        setContent(modalContent);
        setIsopen(true);
    }

    const closeModal = () => {
        setContent(null);
        setIsopen(false);
    }
    return (
        <ModalContext.Provider value={{ isOpen, openModal, closeModal, content }}>
            {children}
        </ModalContext.Provider>
    )
}

export {ModalContext, ModalProvider} ; 