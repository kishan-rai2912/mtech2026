import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import Header from './Header';
import Footer from './Footer';
import Main from './Main';

import {BrowserRouter ,Routes, Route} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/header" element={<Header/>}></Route>
        <Route path="/" element={<App/>}></Route>
        <Route path='/footer' element={<Footer/>}></Route>
        <Route path='/main' element={<Main/>}></Route>
      </Routes>
    </BrowserRouter>
    {/* <Header/> */}
    {/* <First/> */}
    {/* <App /> */}
    {/* <Class1/> */}
    {/* <C2f/> */}
    
    {/* <Footer/> */}
  </React.StrictMode>
);


