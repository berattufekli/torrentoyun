import { Center, Flex } from '@chakra-ui/react'
import {React} from 'react'
import GameMain from '../Components/GameMain';
import GameDetails from '../Components/GameDetails';

function PostGame() {
    return (
        <Center 
        paddingTop={20} 
        flexDirection={"column"} 
        color={"white"}>
            <Flex 
            width={{base:"85vw", md:"container.sm", lg:"container.md"}}>
                <Flex 
                flexDirection={"column"} align={"center"} 
                width={"full"}>
                    <GameMain />
                    <GameDetails />
                </Flex>
            </Flex>
        </Center>
    )
}

export default PostGame