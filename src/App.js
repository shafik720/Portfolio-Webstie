import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Banner from './Components/Banner/Banner';

function App() {
  return (
    <div>
      <Header></Header>
      <div className="main-div">
        <Banner></Banner>
      </div>

    </div>
  );
}

export default App;
