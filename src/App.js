import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import { RouterProvider } from 'react-router-dom';
import Router from './Utilities/Router/Router';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div>
      <Header></Header>
      <div className="main-div">
        <RouterProvider router={Router}></RouterProvider>
      </div>
      <ToastContainer /> 
    </div>
  );
}

export default App;
