import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import { RouterProvider } from 'react-router-dom';
import Router from './Utilities/Router/Router';
import { ToastContainer } from 'react-toastify';
import Modal from './Utilities/Context Api/Modal';

function App() {
  return (
    <div>
      <Header></Header>
      <div className="main-div">
        <RouterProvider router={Router}></RouterProvider>
      </div>
      <ToastContainer /> 
      <Modal></Modal>
      <div className="sub-menu">
        <span>Menu Here</span>
      </div>
    </div>
  );
}

export default App;
