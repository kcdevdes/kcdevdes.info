import { Box, Image, Stack, Flex } from '@chakra-ui/react';

const Header = () => {
  return (
    <div>
      <Box p={4}>
        <Stack as={Box} spacing={{ base: 8, md: 14 }}>
          <Flex
            justifyContent="center"
            alignItems="center"
            w="full"
            overflow="hidden"
            py={{ base: 10, md: 18 }}
          >
            <Image
              borderRadius="full"
              boxSize={{ base: '150px', md: '300px' }}
              src="/profile.jpeg"
              alt="My Profile"
            />
          </Flex>
        </Stack>
      </Box>
    </div>
  );
};

export default Header;
