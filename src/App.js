import React from 'react'
import './App.css';
import { BrowserRouter } from 'react-router-dom';

import { Template } from './Components/MainComponents'
import Routes from './Routes';
import Header from './Components/Partials/header';
import Footer from './Components/Partials/footer';


const Page = () => {
  return(
    <BrowserRouter>
    <Template>

    <Header /> 

    <Routes />

    <Footer />

    </Template>
    </BrowserRouter>
  )
}

export default Page;