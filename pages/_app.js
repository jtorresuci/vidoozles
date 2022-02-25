import { ChakraProvider } from '@chakra-ui/react'
import NFTProvider from '../context/NFTContext'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <NFTProvider>
 <ChakraProvider>
  <Component {...pageProps} />

  </ChakraProvider>
    </NFTProvider>
 
  )
}

export default MyApp
