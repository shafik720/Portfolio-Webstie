import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Banner from './Components/Banner/Banner';
import About from './Components/About/About';

function App() {
  return (
    <div>
      <Header></Header>
      <div className="main-div">
        <Banner></Banner>
        <About></About>
      </div>

    </div>
  );
}

export default App;
