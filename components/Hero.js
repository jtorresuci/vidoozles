import { Box, Image } from '@chakra-ui/react';
import React from 'react';

const heroImg = "../hero.jpg"
const Hero = () => {
  return(
    <Image size="50%" src={heroImg}/>
  );
}

export default Hero;
