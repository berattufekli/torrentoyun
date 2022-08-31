import { Button, Center, Flex, Heading, Image, Skeleton, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { FaUserAlt } from "react-icons/fa"
import { MdOutlineAccessTimeFilled } from "react-icons/md"
import { BsFillEyeFill } from "react-icons/bs"
import { NavLink,Link } from 'react-router-dom'

function GameCard( props ) {

  const [isLoad, setIsLoad] = useState(false);

  useEffect(() => {
    setTimeout(()=> {
      setIsLoad(true);
    }, 700)
  }, []);
  
  return (
    <NavLink to={`/game/${props.game.link}`}>
      <Flex 
        justify={"space-between"} 
        margin={"3"} 
        flexDirection={"column"} 
        background={"gray.700"} 
        width={{base: "xs", md:"xs"}} 
        height={"lg"}>
        <Flex 
          flexDirection={"column"}>
          
          <Heading 
            width={"full"} 
            borderBottom={"1px"} 
            borderColor={"whiteAlpha.400"} 
            color={"white"} 
            padding={"2"} 
            size={"md"} 
            bg={"gray.600"}>
            {props.game.gameName}
          </Heading>
          
          <Flex 
            margin={2} 
            justify={"space-between"} 
            color={"gray.500"} >
            <Flex>
              <Flex align={"center"}>
                <FaUserAlt size={"12"}/>
                <Text 
                  fontWeight={"semibold"} 
                  marginLeft={"2"} 
                  fontSize={"12"}>
                    {props.game.publisher}
                  </Text>
              </Flex>

              <Flex 
                marginLeft={"2"} 
                align={"center"}>
                <MdOutlineAccessTimeFilled size={"12"}/>
                <Text 
                  fontWeight={"semibold"} 
                  marginLeft={"2"} 
                  fontSize={"12"}>
                    {props.game.gameDate}
                </Text>
              </Flex>
            </Flex>

            <Flex>

              <Flex align={"center"}>
                <BsFillEyeFill size={"12"}/>
                <Text 
                  fontWeight={"semibold"} 
                  marginLeft={"2"} 
                  fontSize={"12"}>
                    {props.game.gameView}
                </Text>
              </Flex>
              
            </Flex>
            
          </Flex>
        </Flex>

        
        
        
        <Center>
          <Skeleton isLoaded={isLoad} startColor={"transparent"} endColor={"transparent"} fadeDuration={3}>
          <Image 
            loading={"lazy"}
            height={"80"} 
            src={props.game.gameCover}/>
          </Skeleton>
        </Center>

        
      
        
        <Flex 
          justify={"space-between"} 
          align={"center"} 
          color={"white"} 
          padding={"2"} 
          bg={"gray.600"}>
          <Flex>
            <Link as={Link} to={`/category/${JSON.stringify(props.game.gameCategory[0]).replace(/"/g, "").toLocaleLowerCase()}`}>
              <Button marginX={1} size={"sm"} colorScheme={"blackAlpha"}>
                {props.game.gameCategory[0]}
              </Button>
            </Link>
            
            <Link as={Link} to={`/category/${JSON.stringify(props.game.gameCategory[1]).replace(/"/g, "").toLocaleLowerCase()}`}>
              <Button marginX={1} size={"sm"} colorScheme={"blackAlpha"}>
                {props.game.gameCategory[1]}
              </Button>
            </Link>
          </Flex>
        </Flex>
      </Flex>
    </NavLink>
  )
}

export default GameCard 