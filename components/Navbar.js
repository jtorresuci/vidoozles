import { Box, Flex, Heading, Image, VStack } from "@chakra-ui/react";
import React from "react";
import Socials from "./Socials";
import SocialsReverse from "./SocialsReverse";

const logoImg = "../logo.png"

const Navbar = () => {
  return (
    <Flex
pb="5rem"
    className="color-change-2x"          

      justifyContent={"space-between"}
      flexDirection={"row"}
      background="white"
      textColor={"black"}
      alignItems={"center"}
    >
      <Box>

      </Box>
<VStack>       <Image w={"45%", "80%"} src={logoImg}/>
<Socials/>
</VStack>        
<Box></Box>
        
        
            
    </Flex>
  );
};

export default Navbar;
