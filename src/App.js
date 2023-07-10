import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Banner from './Components/Banner/Banner';
import About from './Components/About/About';
import Skills from './Components/Skills/Skills';
import Projects from './Components/Projects/Projects';
import LearningHistory from './Components/LearningHistory/LearningHistory';
import Home from './Pages/Home/Home';
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
