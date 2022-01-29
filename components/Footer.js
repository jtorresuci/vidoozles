import { Box, Flex, Image, VStack, Heading, Link } from '@chakra-ui/react';

import React from 'react';
import Socials from './Socials';
const logoImg = "../logo.png"


const Footer = () => {
  return(
      <Flex
    p="1rem"
    className="color-change-2x"          

      justifyContent={"space-between"}
      flexDirection={"row"}
      background="white"
      textColor={"black"}
      alignItems={"center"}
    >
<Box></Box>
<VStack><Heading fontFamily={"BodoAmat"}>Contract Address</Heading><Link href={"https://polygonscan.com/address/0xebdc89700ce1104897f7c8e385120f95494091e9"} is External fontFamily={"BodoAmat"}>0xebdc89700CE1104897f7C8E385120f95494091e9</Link></VStack>
        <Box></Box>
        </Flex>

  );
};

export default Footer;
