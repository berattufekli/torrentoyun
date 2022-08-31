import { Flex, Select } from '@chakra-ui/react'
import { Button, Wrap } from '@chakra-ui/react'
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { HiSearch } from "react-icons/hi"
import { React } from 'react'
import Games from '../Components/Games'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <Flex  
      align={"center"} 
      backgroundColor={"gray.800"} 
      flexDirection={"column"}>
        
        <Wrap
          width={{base:"85vw", md:"container.sm", lg:"container.md"}} 
          marginTop={6} 
          justify={"center"}>
            <Link to={"/category/aksiyon"}>
              <Button colorScheme={"blackAlpha"}>
                Aksiyon
              </Button>
            </Link>
            <Link to={"/category/fps"}>
            <Button colorScheme={"blackAlpha"}>
              FPS
            </Button>
            </Link>
            <Link to={"/category/korku"}>
            <Button colorScheme={"blackAlpha"}>
              Korku
            </Button>
            </Link>
            <Link to={"/category/macera"}>
            <Button colorScheme={"blackAlpha"}>
              Macera
            </Button>
            </Link>
            <Link to={"/category/rpg"}>
            <Button colorScheme={"blackAlpha"}>
              RPG
            </Button>
            </Link>
            <Link to={"category/simulasyon"}>
            <Button colorScheme={"blackAlpha"}>
              Simülasyon
            </Button>
            </Link>
            <Link to={"/category/spor"}>
            <Button colorScheme={"blackAlpha"}>
              Spor
            </Button>
            </Link>
            <Link to={"/category/strateji"}>
            <Button colorScheme={"blackAlpha"}>
              Strateji
            </Button>
            </Link>
        </Wrap>

        <Flex align={"flex-end"} flexDirection={{base:"column", md:"row"}} justify={"space-between"} marginTop={6} width={{base:"85vw", md:"container.sm", lg:"container.md"}}>
          <InputGroup width={{base: "100%", md:"75%"}}>
              <InputLeftElement
                pointerEvents='none'
                children={<HiSearch color="white" />}/>
                <Input 
                  variant='filled' 
                  shadow={"md"} 
                  backgroundColor={"gray.700"} 
                  type='tel' 
                  fontWeight={"bold"} 
                  textAlign={"center"} 
                  color={"white"} 
                  _hover={{backgroundColor:"none"}}/>
          </InputGroup>

          <Select bgColor={"white"} fontWeight={"bold"} marginTop={{base:"2", md: "0"}} width={{base: "35%", sm:"35%", md:"20%"}}>
            <option value='option1'>Popülerlik</option>
            <option value='option2'>Tarih</option>
          </Select>
        </Flex>
        
        <Games />       
    </Flex>
  )
}

export default Home