import { useContext } from "react";
import { ModalContext } from "./ModalContext";
import './Modal.css';


const Modal = () => {
    const { isOpen, closeModal, content } = useContext(ModalContext);

    console.log(content);
    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <div className="title">
                    <h2>{content.title}</h2>
                    <hr />
                </div>
                <div dangerouslySetInnerHTML={{ __html: content.desc }}></div>
                <button className="modal-close" onClick={closeModal}>
                    Close
                </button>
            </div>
            {/* <div className="modal">
                <div className="modal-content">
                    {content}</div>
            </div> */}
        </div>
    )
}

export default Modal; 