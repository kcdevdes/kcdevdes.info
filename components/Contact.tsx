import { Box, Button, Stack } from '@chakra-ui/react';

const Contact = () => {
  return (
    <div>
      <Box display="flex" justifyContent="center">
        <Stack spacing={6} direction={'row'}>
          <Button
            rounded={'full'}
            px={6}
            colorScheme={'gray'}
            bg={'gray.400'}
            _hover={{ bg: 'gray.500' }}
          >
            My GitHub
          </Button>
          <Button
            rounded={'full'}
            px={6}
            colorScheme={'orange'}
            bg={'orange.400'}
            _hover={{ bg: 'orange.500' }}
          >
            Instagram
          </Button>
          <Button
            rounded={'full'}
            px={6}
            colorScheme={'orange'}
            bg={'orange.400'}
            _hover={{ bg: 'orange.500' }}
          >
            Tistory Blog
          </Button>
        </Stack>
      </Box>
    </div>
  );
};

export default Contact;
