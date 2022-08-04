import { Box, Button, ButtonGroup, Flex, Stack, Link } from '@chakra-ui/react';
import { FaInstagram, FaGithub, FaBlog, FaMailBulk } from 'react-icons/fa';

const Contact = () => {
  return (
    <div>
      <Box width="100" marginTop={10}>
        <Flex
          justifyContent={'center'}
          flexDirection={{ base: 'column', sm: 'column', md: 'row', lg: 'row' }}
        >
          <Link href="https://github.com/kcdevdes">
            <Button
              marginX={'4'}
              marginY={'2'}
              rounded={'full'}
              px={6}
              bg={'gray.700'}
              textColor={'white'}
              _hover={{ bg: 'gray.500' }}
              leftIcon={<FaGithub />}
            >
              GitHub
            </Button>
          </Link>
          <Link href="https://instagram.com/kevinchoi_dev">
            <Button
              marginX={'4'}
              marginY={'2'}
              rounded={'full'}
              px={6}
              bgGradient={'linear(to-l, #7928CA, #FF0080)'}
              textColor={'white'}
              _hover={{ bgGradient: 'linear(to-l, #FF0080, #7928CA)' }}
              _active={{ bg: 'purple' }}
              leftIcon={<FaInstagram />}
            >
              Instagram
            </Button>
          </Link>
          <Link href="https://velog.io/@kcdevdes">
            <Button
              marginX={'4'}
              marginY={'2'}
              rounded={'full'}
              px={6}
              bg={'green.300'}
              _hover={{ bg: 'green.500' }}
              leftIcon={<FaBlog />}
              textColor={'black'}
            >
              velog (Blog)
            </Button>
          </Link>
          <Link href="mailto: kcdevdes@gmail.com">
            <Button
              marginX={'4'}
              marginY={'2'}
              rounded={'full'}
              px={6}
              bg={'#87efff'}
              _hover={{ bg: '#3893a1' }}
              leftIcon={<FaMailBulk />}
              textColor={'black'}
            >
              Gmail
            </Button>
          </Link>
        </Flex>
      </Box>
    </div>
  );
};

export default Contact;
