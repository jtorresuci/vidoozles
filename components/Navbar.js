import { Box, Flex, Heading, Image } from "@chakra-ui/react";
import React from "react";
import Socials from "./Socials";
import SocialsReverse from "./SocialsReverse";

const logoImg = "../logo.png"

const Navbar = () => {
  return (
    <Flex
    p="1rem"
    className="color-change-2x"          

      justifyContent={"space-between"}
      flexDirection={"row"}
      background="white"
      textColor={"black"}
      alignItems={"center"}
    >
        <Socials/>
       <Image w={"50%", "80%"} src={logoImg}/>
        <Box>
</Box>
        
            
    </Flex>
  );
};

export default Navbar;
