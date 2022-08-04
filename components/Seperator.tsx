import {
  Box,
  Center,
  Text,
  useColorModeValue,
  Divider,
  VStack,
} from '@chakra-ui/react';

interface DividerOption {
  hasSolidDivider?: boolean;
  text: string;
}

const Seperator = ({ hasSolidDivider = true, text }: DividerOption) => {
  return (
    <div>
      <Box mt={'24'} mb={'12'}>
        <Center>
          <VStack>
            <Divider variant={hasSolidDivider ? 'solid' : 'dashed'} />
            <Text
              fontWeight={'200'}
              fontSize={{ base: '2xl', sm: '4xl', md: '5xl' }}
              textColor={useColorModeValue('gray.500', 'gray.400')}
            >
              {text}
            </Text>
          </VStack>
        </Center>
      </Box>
    </div>
  );
};

export default Seperator;
