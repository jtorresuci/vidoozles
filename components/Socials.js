import React from 'react'
import { ButtonGroup, ButtonGroupProps, IconButton } from '@chakra-ui/react'
import { FaDiscord, FaGithub, FaInstagram, FaLinkedin, FaTwitter, FaLink} from 'react-icons/fa'


const twitterHandle ="https://twitter.com/vidoozles"
const igHandle ="https://instagram.com/saintn.wtf"
const discordHandle ="https://discord.gg/h4fpPpHjvw"
const openseaHandle ="https://instagram.com/saintn.wtf"

const hoverColor ="white"
const hoverBackgroundcolor ="pink"
const sidePadding = "5"
const Socials = (props, ButtonGroupProps) => {
    return (
        <ButtonGroup     
        variant="ghost" color="black" {...props}>
        {/* <IconButton as="a" href="#" aria-label="LinkedIn" icon={<FaLinkedin size="20px" />} />x */}
        {/* <IconButton as="a" href="#" aria-label="GitHub" icon={<FaGithub size="20px" />} /> */}
        <IconButton  color="white" pl={["0", sidePadding]} pr={["0", sidePadding]} _hover={{ color: hoverColor  }} as="a" href={twitterHandle} aria-label="Twitter" icon={<FaTwitter                               
 size={["5px", "30px"]} />} />
        {/* <IconButton _hover={{ bg: hoverBackgroundcolor, color: hoverColor  }} as="a" href={openseaHandle} aria-label="Link" icon={<FaLink size="20px" />} /> */}

        <IconButton color="white" pl={["0", sidePadding]} pr={["0", sidePadding]} _hover={{ color: hoverColor  }} as="a" href={discordHandle} aria-label="Discord" icon={<FaDiscord size={["5px", "30px"]} />} />
            {/* <IconButton as="a" href={igHandle} aria-label="Instagram" icon={<FaInstagram size="20px" />} /> */}

      </ButtonGroup>
    )
}

export default Socials
