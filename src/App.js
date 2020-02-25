import React from 'react';
import './General.css';

import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

function App() {
  return (
      <div className={"appWrapper"}>
          <Header />
          <Nav />
          <Main />
          <Footer />
      </div>
  );
}

export default App;
