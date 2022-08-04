import { Box, Center, Img, VStack } from '@chakra-ui/react';

const BOJBadge = () => {
  return (
    <Box>
      <Center>
        <VStack>
          <Img src="http://mazassumnida.wtf/api/v2/generate_badge?boj=kcdevdes" />
        </VStack>
      </Center>
    </Box>
  );
};

export default BOJBadge;
