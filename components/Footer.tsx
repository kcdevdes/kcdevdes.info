import { Box, Text, useColorModeValue, VStack } from '@chakra-ui/react';
import Link from 'next/link';

const Footer = () => {
  return (
    <div>
      <Box bg={useColorModeValue('gray.200', 'gray.700')} p={'3'} mt={'10'}>
        <VStack>
          <Text>© Copyright 2022 - 2022 </Text>
          <Link href="https://github.com/kcdevdes">
            <Text _hover={{ cursor: 'pointer', bg: 'purple.100' }}>
              Kevin Choi | kcdevdes
            </Text>
          </Link>
        </VStack>
      </Box>
    </div>
  );
};

export default Footer;
