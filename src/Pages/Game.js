import { Center, Flex } from '@chakra-ui/react'
import { React} from 'react'
// import axios from "axios"
import AdSense from 'react-adsense';

function Game() {
  // const { link } = useParams();

  // const [mainInfos, setMainInfos] = useState();
  // const [detailInfos, setDetailInfos] = useState();

  // useEffect(()=>{
  //   axios.get(`http://localhost:3000/gamesMain/game/${link}`)
  //       .then(res => {
  //         console.log(res)
  //         setMainInfos(res.data);
  //       })
  //       .catch(err => {
  //           console.log(err)
  //   });
  // }, [link])



  return (
    <Center flexDirection={{base: "column", xl:"row"}} marginTop={10} color={"white"}>
      <Flex>
        <AdSense.Google
          client='ca-pub-5568009053532438'
          slot='3638039982'
          style={{ display: 'block' }}
          layout='in-article'
          format='fluid'
        />
      </Flex>
      <Center bg={"red.200"} width={{base:"85vw", md:"container.sm", lg:"container.md"}}>asklfhasj</Center>
      <Flex>
        <AdSense.Google
          client='ca-pub-5568009053532438'
          slot='3638039982'
          style={{ display: 'block' }}
          layout='in-article'
          format='fluid'
        />
      </Flex>
    </Center>
  )
}

export default Game