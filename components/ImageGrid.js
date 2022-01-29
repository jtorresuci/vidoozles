import React from 'react';
import { Center, Grid, Image } from '@chakra-ui/react';
const width = "600px";
const height = "600px";
const img1 = "../4.png";
const img2 = "../2.png";

const ImageGrid = () => {
  return (<Center>
    <Grid

      //   pl={sidePadding}
      //   pr={sidePadding}
      pb="5"
      gap="5"
      templateColumns={[
        "repeat(1, 1fr)",
        "repeat(1, 1fr)",
        "repeat(2, 1fr)",
      ]}
    >
      <Image                     borderRadius="40px"
           size={["100%", "50%"]}
           src={img1}></Image>
      <Image                     borderRadius="40px"
          size={["100%", "50%"]}
          src={img2}></Image>
    </Grid>
  </Center>);
};

export default ImageGrid;
