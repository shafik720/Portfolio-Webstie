import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Banner from './Components/Banner/Banner';
import About from './Components/About/About';
import Skills from './Components/Skills/Skills';
import Projects from './Components/Projects/Projects';

function App() {
  return (
    <div>
      <Header></Header>
      <div className="main-div">
        <Banner></Banner>
        <About></About>
        <Skills></Skills>
        <Projects></Projects>
      </div>

    </div>
  );
}

export default App;
