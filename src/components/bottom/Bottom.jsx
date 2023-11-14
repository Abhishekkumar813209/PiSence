import { HStack, VStack } from '@chakra-ui/react';
import Left from './Left';
import Right from './Right';

function Bottom({data}) {
  return (
   <HStack mt="20px" width="95vw" justifyContent={'space-around'}>
    <VStack> <Left data={data} /> </VStack>
    <VStack> <Right data={data} /> </VStack>
   </HStack>
  );
}

export default Bottom;
