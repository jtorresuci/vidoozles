import Head from 'next/head'
import Image from 'next/image'
import React, { useState } from 'react';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Mint from '../components/Mint';
import Navbar from '../components/Navbar';
import About from '../components/About';


let Web3 = require('web3');

export default function Home() {

  return (
    <div id="main">
      <Head>
      <title>Vidoozles</title>
      </Head>
      <Navbar/>
      <Hero/>
      <Mint/>

      <About/>
      <Footer/>
    </div>
  )
}
