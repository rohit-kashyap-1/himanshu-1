
import { useEffect } from 'react';
import './App.css';
// import Aos, { init } from 'aos';
// import { useEffect } from 'react';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';


function App() {

  // useEffect(() => {
  //   Aos.init({
  //     duration : 2000
  //   });
  // }, []); 

  

  


  return (
    <div className="App">
      <Header/>
      <Main/>
      
    </div>
  );
}

export default App;

