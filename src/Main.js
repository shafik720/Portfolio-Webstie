import React from 'react';
import Header from './Components/Header/Header';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Modal from './Utilities/Context Api/Modal';
import Submenu from './Utilities/Context Api/Submenu/Submenu';

const Main = () => {
    return (
        <div className="main-div">
            <Header></Header>
            <Outlet></Outlet>
            <ToastContainer />
            <Modal></Modal>
            <Submenu></Submenu>
        </div>
    );
};

export default Main;