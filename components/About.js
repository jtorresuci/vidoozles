import { Box, Image, Center, Heading, VStack } from '@chakra-ui/react';
import React from 'react';
const logoImg = "../logo.png"

const About = () => {
  return <Box p="5rem">
    <Center>
      <VStack>
      <Image src={logoImg}/>
      <Heading pl="1rem" pr="1rem" fontFamily={"BodoAmat"}>
About Vidoozles
</Heading>

<Box pl="1rem" pr="1rem" fontSize={["12pt", "20pt"]} fontFamily={"BodoAmat"}>
  Vidoozles are the results of 10,007 abductions and experimentation done by Visitor #7915 on the Doodles. Each Vidoozles is a unique blend of a Visitor and a Doodle.
</Box>
<Heading pt="5rem" fontFamily={"BodoAmat"}>
Roadmap!</Heading>

<Box pl="1rem" pr="1rem" fontSize={["12pt", "20pt"]} fontFamily={"BodoAmat"}>
There isn`&apos;`t one. In true Doodle style. Holding a Vidoozle will allow you to participate in voting on what to do with the Vidoozle Community Treasury. This treasury will be seeded with 4200 MATIC after the public sale ends! Holders will be able to vote for experiences and campaigns that benefit the holders! </Box>
      </VStack>
   
    </Center>
  </Box>;
};

export default About;
