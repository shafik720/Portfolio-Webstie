import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import { NavLink, Navigate, RouterProvider, useNavigate } from 'react-router-dom';
import Router from './Utilities/Router/Router';
import { ToastContainer } from 'react-toastify';
import Modal from './Utilities/Context Api/Modal';
import Submenu from './Utilities/Context Api/Submenu/Submenu';

function App() {


  return (
    <div>
      <RouterProvider router={Router}></RouterProvider>
    </div>
  );
}

export default App;
