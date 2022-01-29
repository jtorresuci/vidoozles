import Head from 'next/head'
import Image from 'next/image'
import React, { useState } from 'react';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Mint from '../components/Mint';
import Navbar from '../components/Navbar';
import About from '../components/About';
import ImageWithText from '../components/ImageWithText';
import Roadmap from '../components/Roadmap';
import ImageGrid from '../components/ImageGrid';

const image1 = "../1.png"
const image3 = "../3.png"
const image2 = "../2.png"
const image4 = "../4.png"

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


      <ImageWithText
      reverse
        image={image1}
        heading="About Vidoozles"
        text="Vidoozles are the results of 10,007 abductions and experimentations done by Visitor #7915 on the Doodles. Each Vidoozles is a unique blend of a Visitor and a Doodle."
      />   <Roadmap
      reverse
        image={image3}
        heading="Roadmap"
        text="There isn`&apos;`t one. Holding a Vidoozle will allow you to participate in voting on what to do with the Vidoozle Community Treasury. This treasury will be seeded with 4200 MATIC after the public sale ends! Holders will be able to vote for experiences and campaigns that benefit the holders."
      /> 
      <ImageGrid/>
         <Footer/>
    </div>
  )
}
