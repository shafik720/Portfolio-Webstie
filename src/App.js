import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Banner from './Components/Banner/Banner';
import About from './Components/About/About';
import Skills from './Components/Skills/Skills';
import Projects from './Components/Projects/Projects';
import LearningHistory from './Components/LearningHistory/LearningHistory';

function App() {
  return (
    <div>
      <Header></Header>
      <div className="main-div">
        <Banner></Banner>
        <About></About>
        <Skills></Skills>
        <LearningHistory></LearningHistory>
        <Projects></Projects>
      </div>

    </div>
  );
}

export default App;
