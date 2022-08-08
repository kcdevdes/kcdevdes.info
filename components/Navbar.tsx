import {
  Box,
  Flex,
  Button,
  useColorModeValue,
  useColorMode,
  Heading,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
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
          <Button onClick={toggleColorMode}>
            {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
          </Button>
        </Flex>
      </Box>
    </div>
  );
};

export default Navbar;
