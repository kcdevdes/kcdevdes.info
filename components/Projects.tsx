import {
  Box,
  Link,
  Wrap,
  WrapItem,
  Image,
  Heading,
  Text,
  Flex,
  HStack,
  Divider,
} from '@chakra-ui/react';
import React from 'react';

import ProjectJSON from '../json/projects.json';

const Projects = () => {
  return (
    <>
      <Wrap spacing={10}>
        {ProjectJSON.projects.map((project) => {
          return (
            <>
              <WrapItem
                width={{ base: '100%', sm: '45%', md: '45%', lg: '30%' }}
                key={project.id}
              >
                <Flex justifyContent="center" alignItems="center">
                  <Box w="100%" px="6">
                    <Box borderRadius="lg" overflow="hidden">
                      <Link
                        textDecoration="none"
                        _hover={{ textDecoration: 'none' }}
                      >
                        <Image src={project.img} alt="some text" />
                      </Link>
                    </Box>
                    <Heading fontSize="xl" marginTop="2">
                      <Link
                        textDecoration="none"
                        _hover={{ textDecoration: 'none' }}
                      >
                        {project.title}
                      </Link>
                    </Heading>
                    <Text textAlign={'left'}>{project.date}</Text>
                    <Text as="p" fontSize="md" marginTop="2">
                      {project.description}
                    </Text>
                  </Box>
                </Flex>
              </WrapItem>
            </>
          );
        })}
      </Wrap>
    </>
  );
};

export default Projects;
