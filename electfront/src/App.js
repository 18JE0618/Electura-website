import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/main';
import Reviews from './components/Slider/slide';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <>
      <Navbar></Navbar>
      <Main></Main>
      <Reviews></Reviews>
    </>
  );
}

export default App;
