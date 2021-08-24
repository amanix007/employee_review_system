import React from 'react';
import './assets/styles/styles.scss';
import Header from 'header/Header';
import Footer from 'footer/Footer';
import Routes from './Routes/Routes';

function App() {
  return (
    <main className="App">
      <Header />
      <Routes />
      <Footer />
    </main>
  );
}

export default App;
