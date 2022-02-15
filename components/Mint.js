// import { Button } from "@chakra-ui/react";
import Head from "next/head";
// import Image from "next/image";
import { useEffect, useState } from "react";
import { Image, Box, Grid, Flex, Center, VStack, Button, Text, Link } from '@chakra-ui/react';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const { ethers, Contract } = require("ethers");
let abi = [{"inputs":[{"internalType":"string","name":"_name","type":"string"},{"internalType":"string","name":"_symbol","type":"string"},{"internalType":"string","name":"_initBaseURI","type":"string"},{"internalType":"uint256","name":"_startMintDate","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseExtension","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"cost","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxMintAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_mintAmount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bool","name":"_state","type":"bool"}],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"removeWhitelistUser","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_newBaseExtension","type":"string"}],"name":"setBaseExtension","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_newBaseURI","type":"string"}],"name":"setBaseURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newCost","type":"uint256"}],"name":"setCost","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_startMintDate","type":"uint256"}],"name":"setStartMintDate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newmaxMintAmount","type":"uint256"}],"name":"setmaxMintAmount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"startMintDate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"walletOfOwner","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"whitelistUser","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"whitelisted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"payable","type":"function"}]
    let contractAddress = "0xebdc89700CE1104897f7C8E385120f95494091e9"
    const sidePadding = "10%";


// async function connectWallet() {
//   const provider = new ethers.providers.Web3Provider(window.ethereum);
//   await provider.send("eth_requestAccounts", []);
//   const signer = provider.getSigner();

//   setSignerAddress(await signer.getAddress());
//   console.log(signerAddress);
// }

const Mint = () => {
  const [signerAddress, setSignerAddress] = useState(null);
  const [hasMetamask, setMetamask] = useState(null);
  const [contractObj, setContractObj] = useState(null);
  const [supplyText, setSupplyText] = useState("?");
  const [signerObj, setsignerObj] = useState(null);
  const [providerEth, setProviderEth] = useState(null);
  const [sliderValue, setSliderValue] = useState(5)
  const [connectedStatus, setConnectedStatus] = useState(false)
  const [mintButtonDisabled, setmintButtonDisabled] = useState(true)

  


  const updateInputValue = (e) => {
    setSliderValue(e.target.value)
  }

  useEffect(() => {
    try
    {
      setMetamask(window.ethereum.isMetaMask);
    }
    catch(e)
    {
      alert("Please install Metamask.")
    }

    // console.log(hasMetamask)
  }, [hasMetamask]);

  async function connectWallet() {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner();

    setsignerObj(signer)
    setProviderEth(provider)
    setSignerAddress(await signer.getAddress());

    await initializeWallet(signer);

    const c = new ethers.Contract(contractAddress, abi, signer);
    // console.log(c)
    setContractObj(c);
    const supply = await c.totalSupply();
    setSupplyText(Number(supply));
    setConnectedStatus(true)
    setmintButtonDisabled(false)
    
  }

  async function initializeWallet(signer) {
    // console.log(signerAddress);
    // console.log(hasMetamask);
  }

  async function handleMint() {
    // console.log("Mint")

    let aPrice = 2 * sliderValue
    let quantity = sliderValue
    let _price = ethers.utils.parseEther(aPrice.toString());

    const mintWithSigner = contractObj.connect(signerObj);
    const totalPrice = { value: _price.toString() }

    // console.log(mintWithSigner)

    try {
      // console.log(signerAddress)

      const totalPrice = { value: _price.toString() }
      // console.log(options)
      // console.log(options)
      // console.log(amount)
      let tx = await mintWithSigner.functions.mint(signerAddress, quantity, totalPrice);
      // console.log(tx)
      let receipt = await tx.wait();
      // console.log(receipt);
      alert("Success")
      // console.log("Success")
    }
    catch (e) {
      // console.log(e.data.message)
      if(e.code==4001)
      {
        alert("MetaMask Tx Signature: User denied transaction signature.")
      }
      if(e.code==-32603)
      {
        let balanceOfSignerReadable = ethers.utils.formatEther( await signerObj.getBalance())
        let totalPriceReadable = aPrice
        if(totalPriceReadable > balanceOfSignerReadable )
        {
          alert("Not enough funds.")
        }

      }
      // let balanceOfSignerReadable = ethers.utils.formatEther( await signerObj.getBalance())


      // console.log(ethers.utils.formatEther( await signerObj.getBalance()))
      // alert(e)
      // signer.getB
      // console.log("fail")
      // alert(e.data.message)
      // console.log(e)
    }
  }


return(
    <Box  pl={["0", sidePadding]}
    pr={["0", sidePadding]} pt="5rem">
    <Grid

      templateColumns={["repeat(1, 1fr)", "repeat(1, 1fr)", "repeat(2, 1fr)"]}
      m="auto"

      alignItems={"center"}
    >
      {" "}
      <Flex flexDir={"column"} alignItems={"center"}>
        <Image
          src="../gif.gif"
          borderRadius="30px"
        />
        <Text fontWeight={"bold"} p="1rem" fontSize={"1.35rem"}> Total minted: {supplyText} / 10007</Text>
      </Flex>
      <Box>
        <Center>
          <VStack p="2rem" >
            {
        //Check if message failed
        hasMetamask ? (
          <div></div>
        ) : (
          <Box> Please install Metamask or another web3 provider. <Link isExternal="true" href="https://metamask.io/">https://metamask.io/</Link> </Box>
        )
      }
            <Button borderRadius={"20px"} color="white" isDisabled={!hasMetamask} className="color-change-2x" onClick={connectWallet}>
              <Center fontFamily={"BodoAmat"}>
              Connect to Web3

              </Center>
            </Button>
            <Flex
            flexDir={"row"} 
            p="1rem"
            >
              <MdKeyboardArrowLeft color="black"/>

            {" "}
            <div className="slidecontainer">
              <input
                type="range"
                min="1"
                max="20"
                disabled={mintButtonDisabled}
                value={sliderValue}
                onChange={updateInputValue}
                className="slider"
              />
            </div>
            <MdKeyboardArrowRight color="black"/>

            </Flex>

            <Button                 disabled={mintButtonDisabled}
 borderRadius={"20px"} color="white" className="color-change-2x" onClick={handleMint}>
              <Center fontFamily={"BodoAmat"}>
                Mint {sliderValue}
                </Center>
            </Button>
          </VStack>
        </Center>
      </Box>
    </Grid>
    <div id="footer"></div>
  </Box>
);
};

export default Mint;
//this is the code logic  