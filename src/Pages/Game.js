import { Center, Flex, Text } from '@chakra-ui/react'
import { React, useEffect, useState} from 'react'
import {useParams} from "react-router-dom";
import axios from "axios"

function Game() {
  const { link } = useParams();

  const [mainInfos, setMainInfos] = useState();
  const [detailInfos, setDetailInfos] = useState();

  useEffect(()=>{
    axios.get(`http://localhost:3000/gamesMain/game/${link}`)
        .then(res => {
          console.log(res)
          setMainInfos(res.data);
        })
        .catch(err => {
            console.log(err)
    });
  }, [link])



  return (
    <Center flexDirection={{base: "column", xl:"row"}} marginTop={10} color={"white"}>
      <Flex>left banner</Flex>
      <Center bg={"red.200"} width={{base:"85vw", md:"container.sm", lg:"container.md"}}>asklfhasj</Center>
      <Flex>right banner</Flex>
    </Center>
  )
}

export default Game