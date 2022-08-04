import {
  Box,
  Img,
  Center,
  Stack,
  Text,
  VStack,
  Button,
  Link,
} from '@chakra-ui/react';
import SkillJSON from '../json/skills.json';

const SkillPanel = () => {
  return (
    <div>
      <Box>
        <Center>
          <VStack width={'80%'}>
            {SkillJSON.skills.map((skill) => {
              return (
                <div key={skill.id}>
                  <Stack p="4" boxShadow="lg" m="4" borderRadius="sm">
                    <Stack direction="row" alignItems="center">
                      <Text fontWeight="semibold">{skill.skillName}</Text>
                    </Stack>

                    <Stack
                      direction={{ base: 'column', md: 'row' }}
                      justifyContent="space-between"
                    >
                      <Text
                        fontSize={{ base: 'sm' }}
                        textAlign={'left'}
                        maxW={'4xl'}
                      >
                        {skill.description}
                      </Text>
                      <Stack direction={{ base: 'column', md: 'row' }}>
                        <Link href={skill.skillLink}>
                          <Button
                            width={'fit-content'}
                            minWidth={'40'}
                            variant="outline"
                            colorScheme="green"
                          >
                            What is {skill.skillName}?
                          </Button>
                        </Link>
                      </Stack>
                    </Stack>
                  </Stack>
                </div>
              );
            })}
          </VStack>
        </Center>
      </Box>
    </div>
  );
};

export default SkillPanel;
