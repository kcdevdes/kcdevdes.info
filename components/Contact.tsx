import { Box, Button, ButtonGroup, Flex, Stack, Link } from '@chakra-ui/react';
import { FaInstagram, FaGithub, FaBlog } from 'react-icons/fa';

const Contact = () => {
  return (
    <div>
      <Box width="100" marginTop={10}>
        <Flex
          justifyContent={'center'}
          flexDirection={{ base: 'column', sm: 'column', md: 'row', lg: 'row' }}
        >
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
            <Link href="https://github.com/kcdevdes">GitHub</Link>
          </Button>
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
            <Link href="https://instagram.com/kevinchoi_dev">Instagram</Link>
          </Button>
          <Button
            marginX={'4'}
            marginY={'2'}
            rounded={'full'}
            px={6}
            bg={'gray.300'}
            _hover={{ bg: 'gray.500' }}
            leftIcon={<FaBlog />}
            textColor={'black'}
          >
            <Link href="https://kclog.tistory.com">Tistory Blog</Link>
          </Button>
        </Flex>
      </Box>
    </div>
  );
};

export default Contact;
