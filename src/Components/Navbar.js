import { Flex, Heading } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import React from 'react'
import { GiGamepad } from "react-icons/gi"
import { BsPerson } from "react-icons/bs"


function NavBar() {
  return (
    <Flex
        align={"center"} 
        justify={"space-between"} 
        width={{base:"85vw", md:"container.sm", lg:"container.md"}}
        marginTop={4}>
        <Link to={"/"}>
          <GiGamepad 
          size={"40"} 
          className={"icon"}/>
        </Link>
        
        <Heading 
            size={"lg"} 
            color={"white"}>
              <Link to={"/"}>
                torrent-oyun
              </Link>
        </Heading>
        <Link to={"/account"}>
          <BsPerson 
              size={"34"} 
              className={"icon"}/>
        </Link>
    </Flex>
  )
}

export default NavBar