import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Main from './Components/Main';
import 'bootstrap/dist/css/bootstrap.min.css';
import Data from './data.json';
import SelectedBeast from './Components/SelectedBeast';
import {useState} from 'react'



function App() {
const [viewImg, setViewImg] = useState(null)
  return (
    <div className="App">
      <Header/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Main imageData={Data} selectedImg={setViewImg}/>
      {viewImg && <SelectedBeast imageData={viewImg} selectedImg={setViewImg} />}
      <Footer/>
    </div>
  );
}

export default App;
