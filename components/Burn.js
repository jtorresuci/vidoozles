import React from "react";

// import { Button } from "@chakra-ui/react";
import Head from "next/head";
// import Image from "next/image";
import { useEffect, useState } from "react";
import {
  Image,
  Box,
  Grid,
  Flex,
  Center,
  VStack,
  Button,
  Text,
  Link,
  Input,
} from "@chakra-ui/react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { isAddress } from "ethers/lib/utils";

const { ethers, Contract } = require("ethers");
let abi = [
  {
    inputs: [
      { internalType: "string", name: "_name", type: "string" },
      { internalType: "string", name: "_symbol", type: "string" },
      { internalType: "string", name: "_initBaseURI", type: "string" },
      { internalType: "uint256", name: "_startMintDate", type: "uint256" },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      { indexed: false, internalType: "bool", name: "approved", type: "bool" },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "address", name: "from", type: "address" },
      { indexed: true, internalType: "address", name: "to", type: "address" },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      { internalType: "address", name: "to", type: "address" },
      { internalType: "uint256", name: "tokenId", type: "uint256" },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "owner", type: "address" }],
    name: "balanceOf",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "baseExtension",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "baseURI",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "cost",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }],
    name: "getApproved",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "owner", type: "address" },
      { internalType: "address", name: "operator", type: "address" },
    ],
    name: "isApprovedForAll",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "maxMintAmount",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "maxSupply",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "_to", type: "address" },
      { internalType: "uint256", name: "_mintAmount", type: "uint256" },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }],
    name: "ownerOf",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "bool", name: "_state", type: "bool" }],
    name: "pause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "paused",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "_user", type: "address" }],
    name: "removeWhitelistUser",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "from", type: "address" },
      { internalType: "address", name: "to", type: "address" },
      { internalType: "uint256", name: "tokenId", type: "uint256" },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "from", type: "address" },
      { internalType: "address", name: "to", type: "address" },
      { internalType: "uint256", name: "tokenId", type: "uint256" },
      { internalType: "bytes", name: "_data", type: "bytes" },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "operator", type: "address" },
      { internalType: "bool", name: "approved", type: "bool" },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "string", name: "_newBaseExtension", type: "string" },
    ],
    name: "setBaseExtension",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "string", name: "_newBaseURI", type: "string" }],
    name: "setBaseURI",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "_newCost", type: "uint256" }],
    name: "setCost",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "_startMintDate", type: "uint256" },
    ],
    name: "setStartMintDate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "_newmaxMintAmount", type: "uint256" },
    ],
    name: "setmaxMintAmount",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "startMintDate",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "bytes4", name: "interfaceId", type: "bytes4" }],
    name: "supportsInterface",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "index", type: "uint256" }],
    name: "tokenByIndex",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "owner", type: "address" },
      { internalType: "uint256", name: "index", type: "uint256" },
    ],
    name: "tokenOfOwnerByIndex",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }],
    name: "tokenURI",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "from", type: "address" },
      { internalType: "address", name: "to", type: "address" },
      { internalType: "uint256", name: "tokenId", type: "uint256" },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "newOwner", type: "address" }],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "_owner", type: "address" }],
    name: "walletOfOwner",
    outputs: [{ internalType: "uint256[]", name: "", type: "uint256[]" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "_user", type: "address" }],
    name: "whitelistUser",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "", type: "address" }],
    name: "whitelisted",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "withdraw",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
];

let burnerabi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }],
    name: "burnVidoozleToken",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint16[]", name: "tokenIds", type: "uint16[]" }],
    name: "burnVidoozleTokenList",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }],
    name: "getSaintNMobAddress",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getTotalBurned",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getTotalSupply",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getVidoozleAddress",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "_emberAddress", type: "address" },
    ],
    name: "setEmberAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "_vidoozleAddress", type: "address" },
    ],
    name: "setVidoozleAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "totalBurned",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "newOwner", type: "address" }],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

let contractAddress = "0xebdc89700CE1104897f7C8E385120f95494091e9";
let burnerAddress = "0x165C480Acc0B4aDDBC3D08ae8492A8D5409cfe83";

const sidePadding = "10%";

const Burn = () => {
  const [value, setValue] = React.useState("");
  const handleChange = (event) => setValue(event.target.value);

  
  const [signerAddress, setSignerAddress] = useState(null);
  const [hasMetamask, setMetamask] = useState(null);
  const [contractObj, setContractObj] = useState(null);
  const [supplyText, setSupplyText] = useState("?");
  const [signerObj, setsignerObj] = useState(null);
  const [providerEth, setProviderEth] = useState(null);
  const [sliderValue, setSliderValue] = useState(10);
  const [connectedStatus, setConnectedStatus] = useState(false);
  const [mintButtonDisabled, setmintButtonDisabled] = useState(true);
  const [correctNetwork, setNetwork] = useState(false);

  async function connectWallet() {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    console.log((await provider.getNetwork()).chainId);
    if ((await provider.getNetwork()).chainId != 137) {
      alert("Error: Wrong network. Please switch to the Matic network.");
      setmintButtonDisabled(true);
      setNetwork(false);
      return;
    }
    setNetwork(true);
    await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner();

    setsignerObj(signer);
    setProviderEth(provider);
    setSignerAddress(await signer.getAddress());

    // await initializeWallet(signer);

    const c = new ethers.Contract(contractAddress, abi, signer);
    // console.log(c)
    setContractObj(c);
    const supply = await c.totalSupply();
    setSupplyText(Number(supply));
    setConnectedStatus(true);
    setmintButtonDisabled(false);
  }

  async function approveSpending() {
    console.log("Approve Spending...");
    // const c = new ethers.Contract(contractAddress, abi, signer);
    const mintWithSigner = contractObj.connect(signerObj);
    console.log(mintWithSigner);
    try {
      console.log("Trying to Approve...");
      console.log(burnerAddress);
      let tx = await mintWithSigner.functions.setApprovalForAll(
        burnerAddress,
        true
      );
    } catch (e) {
      console.log(e);
    }
  }
  const extractNumbers = (text, options) => {
    let numbers;
    options = options || {};
    if (!text || typeof text !== 'string') {
    return [];
    }
  
    numbers = text.match(/(-\d+|\d+)(,\d+)*(\.\d+)*/g);
  
    if (options.string === false) {
    numbers = numbers.map(n => Number(n.replace(/,/g, '')));
    }
  
    return numbers;
  };

  async function burn() {
    // console.log(value);
    // let values = extractNumbers(value, false)
    let result = value.match(/[0-9]+/g);
    // console.log(result)

    const finalResult = [];

    for(let i = 0;i < result.length;i++)
{
   // Note that this is assuming valid input
   // If you want to check then add a try/catch 
   // and another index for the numbers if to continue adding the others (see below)
   finalResult[i] = parseInt(result[i]);
}

console.log(finalResult)

    




    // let arrayToPass = "[";
    // let result = arrayToPass.concat(value);
    // result = result.concat("]");
    // console.log(result);
    // let result2 = [1,2] 
    // console.log(result2)
    const c = new ethers.Contract(burnerAddress, burnerabi, signerObj);
    const mintWithSigner = c.connect(signerObj);
    try{
      console.log("Trying to burn....")
      let tx = await mintWithSigner.functions.burnVidoozleTokenList(finalResult);
      let receipt = await tx.wait();


    }catch(e){console.log(e)}

    console.log(c);
  }

  return (
    <Box p="2rem">
      <Center>
        <VStack>
          <Button fontFamily={"BodoAmat"} color="white"
            onClick={(e) => {
              connectWallet();
            }}
            className="color-change-2x"
          >
            Load Inventory
          </Button>
          <Button fontFamily={"BodoAmat"} className="color-change-2x"color="white" onClick={(e) => approveSpending()}>Approve Spending</Button>
          {connectedStatus ? (
            <Box> <VStack>
              <Input
                p="1rem"
                value={value}
                onChange={handleChange}
                placeholder="1,2,3"
                size="sm"
              ></Input>{" "}
              <Center p="1rem">
                <Button  fontFamily={"BodoAmat"} color="white" onClick={(e) => burn()} className="color-change-5x">
                  Burn
                </Button>
              </Center>{" "}</VStack>
            </Box>
          ) : (
            <div></div>
          )}
        </VStack>
      </Center>
    </Box>
  );
};

export default Burn;
