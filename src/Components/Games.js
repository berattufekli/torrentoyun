import { React, useState, useEffect } from 'react'
import { Flex, SimpleGrid } from '@chakra-ui/react'
import GameCard from './GameCard'
import axios from "axios"

function Games() {

 
  const [games, setGames] = useState([])
  useEffect(()=>{
      axios.get("http://localhost:3000/gamesMain")
          .then(res => {
            setGames(res.data)
          })
          .catch(err => {
              console.log(err)
      })
  }, [])

  return (
    <SimpleGrid 
      color={"white"}
      marginTop={"4"} 
      columns={{base:1, md:2, xl: 3, "2xl": 4}}>
      {
        games.map((item, key)=>{
          return <Flex 
          key={key}>
            <GameCard game={item}/>
          </Flex>
        })
      }
    </SimpleGrid>
  )
}

export default Games