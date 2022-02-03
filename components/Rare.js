import { Box, Grid, List,
    ListItem,
    ListIcon,
    OrderedList,
    Heading,    
    UnorderedList, } from '@chakra-ui/react';
import React from 'react';

// const jsonData= require('../final.json'); 



const sidePadding = "10%"

const Rare = () => {
  return <Grid p="10"
  backgroundColor={"brand.900"}
  flexDirection={["column"]}

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
       {jsonData}
       </Grid>
       ;
};

export default Rare;
