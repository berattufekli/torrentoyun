import './App.css';
import { Center, ChakraProvider } from '@chakra-ui/react';
import Home from './Pages/Home';
import { useEffect } from 'react';
import updateOverflowColor from 'overflow-color';
import NavBar from './Components/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PostGame from './Pages/PostGame';
import Categories from './Pages/Categories';
import Game from './Pages/Game';
import Account from './Pages/Account';
function App() {
  useEffect(() => {
    updateOverflowColor();
  }, []);

  return (
    <ChakraProvider>
      <Router>
        <Center flexDirection={"column"} backgroundColor={"gray.800"} >
          <NavBar />

          <Routes>
            <Route exact path="/" element={<Home />} /> 
            <Route path='/AddGame' element={<PostGame />} />
            <Route path='/category/:category' element={<Categories />} />
            <Route path='/game/:link' element={<Game />} />
            <Route path='/account' element={<Account />} />
          </Routes>
        </Center>
      </Router>
    </ChakraProvider>
  );
}

export default App;
