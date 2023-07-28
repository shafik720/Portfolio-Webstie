import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import { RouterProvider } from 'react-router-dom';
import Router from './Utilities/Router/Router';
import { ToastContainer } from 'react-toastify';
import Modal from './Utilities/Context Api/Modal';
import catOne from '../src/assets/img/cat 1.png';
import catTwo from '../src/assets/img/cat 2.png';

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
        <div>
          <img className="sub-menu-front" src={catOne} alt="" />
        </div>
        <div>
          <img  className="sub-menu-active" src={catTwo} alt="" />
        </div>
        <div className="sub-menu-items">
          <a href="">Home</a>
          <a href="">Blogs</a>
        </div>
        <div className='horizontal'/>
      </div>

    </div>
  );
}

export default App;
