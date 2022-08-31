import { Flex, Text } from '@chakra-ui/react'
import React from 'react'
import {useParams} from "react-router-dom"

function Categories() {
    const {category} = useParams();
    return (
    <Flex color={"white"}>
        <Text fontWeight={"bold"}>{category}</Text>
    </Flex>
  )
}

export default Categories