import React from 'react';
import './style/index.css'

// project components 
import Header from './components/header/Header'
import Navbar from './components/navbar/Navbar'
// 
//project 

import Carousel from './components/carousel/Carousel';
import Services from './components/services/services';
import OurProduct from './components/OurProduct/OurProduct';
import ReduxCount from './components/reduxCount/ReduxCount';
function App() {
  return (
    <div className="App">
      <Header />
      <Navbar/>
      <Carousel/>
      <Services/>
      <OurProduct/>
      {/* <ReduxCount/>  */}
    </div>
  );
}

export default App;
