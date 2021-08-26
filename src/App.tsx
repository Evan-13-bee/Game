import React from 'react';
import './App.css';
import { Background } from './Common/components/Background/Background';
import { Footer } from './Footer/Footer';
import Header from './Header/Header';
import Main from './Main/Main';
import Nav from './Nav/Nav';
import { Skills } from './Skills/Skills';
import { Works } from './Works/Works';

function App() {
  return (
    <div className="App">
      <Nav />
      <div className={'uniteContainer'}>
      <Background />
      <Main />
      </div>
      <Skills />
      <Works />
      <Footer />
    </div>
  );
}

export default App;
