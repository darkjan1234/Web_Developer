import { Flex, VStack , Heading } from "@chakra-ui/layout";
import { IconButton } from "@chakra-ui/button";
import { FaSun, FaMoon, FaTwitter, FaFacebook, FaInstagram, FaGithub, FaLinkedin} from 'react-icons/fa'
import { useColorMode } from "@chakra-ui/color-mode";
import { Spacer } from "@chakra-ui/react";
import Header from "./components/Header";


function App() {

  const {colorMode, toggleColorMode} = useColorMode();
  const isDark = colorMode == "dark";


  return (
    <VStack p={5}>
    <Flex w="100%">
        <Heading 
        ml="8" size="md" fontWeight='semibold' color="cyan.400">PORTFOLIO</Heading>

    
    <Spacer></Spacer>
    <IconButton icon={ <FaLinkedin/>} isRound="True" onClick={toggleColorMode}></IconButton>
    <IconButton ml={2} icon={ <FaFacebook/>} isRound="True" onClick={toggleColorMode}></IconButton>
    <IconButton ml={2} icon={ <FaInstagram/>} isRound="True" onClick={toggleColorMode}></IconButton>
    <IconButton ml={2} icon={ <FaGithub/>} isRound="True" onClick={toggleColorMode}></IconButton>
    <IconButton ml={2} icon={ <FaTwitter/>} isRound="True" onClick={toggleColorMode}></IconButton>
    <IconButton ml={8}  icon={isDark? <FaSun/> : <FaMoon/>} isRound="True" onClick={toggleColorMode}></IconButton>
    </Flex >
    <Header></Header>
</VStack>
  );
}

export default App;
