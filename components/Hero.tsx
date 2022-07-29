import { Box, Heading, Container, Text, Stack, Flex } from '@chakra-ui/react';

const Hero = () => {
  return (
    <div>
      <Container maxW={'6xl'}>
        <Stack
          as={Box}
          textAlign={'center'}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 5, md: 18 }}
        >
          <Heading
            fontWeight={600}
            fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
            lineHeight={'110%'}
          >
            Hi! I am Kevin Choi!
          </Heading>
          <Text
            color={'cyan.600'}
            fontSize={{ base: '2xl', sm: '4xl', md: '4xl' }}
            fontWeight={'500'}
            lineHeight={'90%'}
          >
            Software Developer <br />
            Graphic Designer
          </Text>
          <Text color={'gray.500'}>
            I am a CS student studying various things like Node.js, React, and
            Android (Kotlin) 🌱 <br /> I enjoy talking and playing video games
            with friends!⌨️
          </Text>
        </Stack>
      </Container>
    </div>
  );
};

export default Hero;
