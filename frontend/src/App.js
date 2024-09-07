import './App.css';
import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './pages/Main';
import Meating from './pages/Meating';
import Forum from './pages/Forum'
import Contacts from './pages/Contacts';
import ModalBox from './components/ModalBox';
import Login from './components/Login';
import Registration from './components/Registration';

function App() {

  const[page, setPage] = useState('Main')
  const[modalBox, setModalBox] = useState('none')

  const pages = {
    Main: <Main/>,
    Meating: <Meating/>,
    Forum: <Forum/>,
    Contacts: <Contacts/>
  }
  const modalBoxes = {
    Login: <ModalBox setModalBox = { setModalBox }><Login/></ModalBox>,
    Registration: <ModalBox setModalBox = { setModalBox }><Registration/></ModalBox>,
  }


  return (
    <div className="App">
      <Header setPage={ setPage } setModalBox = { setModalBox }/>
      {pages[page]}
      {modalBoxes[modalBox]}
      <Footer/>
    </div>
  );
}

export default App;
