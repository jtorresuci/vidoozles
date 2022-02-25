import Navbar from '../components/Navbar';
import Footer from '../components/Footer'
import Burn from '../components/Burn';
import { NFTContext } from "../context/NFTContext";
import { useContext } from "react";





function Ember() {
    const { hasMetamask, userNFTs } = useContext(NFTContext);

    return (
        <div>
            <Navbar/>
            <Burn/>
            <Footer/>
        </div>
    )
  }
  
  export default Ember