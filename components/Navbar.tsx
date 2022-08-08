import {
  Box,
  Flex,
  Button,
  useColorModeValue,
  useColorMode,
  Heading,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import useStore from './store/store';

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { selectedLanguage, setLanguage } = useStore();

  const handleLanguage = () => {
    if (selectedLanguage == 'ENG') setLanguage('KOR');
    else if (selectedLanguage == 'KOR') setLanguage('ENG');
    // more languages
  };

  return (
    <div>
      <Box bg={useColorModeValue('#d6e9ff', '#5896e0')} px={12}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Box>
            <Heading
              fontSize={{ base: 'xl', sm: '2xl', md: '4xl' }}
              fontWeight={500}
            >
              Kevin Choi
            </Heading>
          </Box>
          <Box>
            <Button onClick={toggleColorMode} marginRight={6}>
              {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            </Button>
            <Button onClick={handleLanguage}>{selectedLanguage}</Button>
          </Box>
        </Flex>
      </Box>
    </div>
  );
};

export default Navbar;
