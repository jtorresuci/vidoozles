import React from "react";
import {
  Box,
  Center,
  Flex,
  Button,
  Text,
  Image,
  Grid,
  Heading,
} from "@chakra-ui/react";
import {
  FaDiscord,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
const sidePadding = "10%";

const Roadmap = ({ reverse, image, heading, text }) => {
  const reverseSection = reverse ? "row-reverse" : "row";
  const redirect = () => {
    const url = "https://discord.gg/h4fpPpHjvw";
    window.open(url, "_blank");
  };


  return (
    <Grid p="10"
        backgroundColor={"brand.900"}
        flexDirection={["column", reverseSection]}

        pl={["0", sidePadding]}
        pr={["0", sidePadding]}
        gap={4}
        //   pl={sidePadding}
        //   pr={sidePadding}
        pb="5"
        templateColumns={[
          "repeat(1, 1fr)",
          "repeat(1, 1fr)",
          "repeat(2, 1fr)",
        ]}
         w="100%">
          
        
        
          <Box 
                    borderRadius="40px"
                    className="color-change-2x"          
                    >

          <Heading textAlign={"left"} className="focus-in-expand-fwd" p="2rem" fontFamily={"BodoAmat"} fontSize={["14", "40pt"]} >{heading && heading}</Heading>
          <Text textAlign={"justified"} className="text-focus-in" p="2rem" fontFamily={"BodoAmat"} fontSize={["12pt", "20pt"]}>{text && text}</Text>
        
          </Box>
          <Image
          borderRadius="30px"
          src={image}

          size={["100%", "50%"]}
          p={["2", "0"]}

          placeholder="blur"
          // className="fade-in-fwd"
        />

      </Grid>
  );
};

export default Roadmap;
