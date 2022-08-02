import { Box, Text, Flex } from '@chakra-ui/react';

const NotFound = () => {
  return (
    <Box>
      <Flex height="100vh" justifyContent={'center'} alignItems={'center'}>
        <Text color={'grey'} fontSize={'3xl'}>
          The page you requested is not available.
        </Text>
      </Flex>
    </Box>
  );
};

export default NotFound;
