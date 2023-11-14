import { VStack } from '@chakra-ui/react';
import React from 'react';
import { PieChart } from '../data/DoughnutChart';

function Right() {
  return (
   <VStack backgroundColor={'gray.300'} width="50vw" height="30vh">
      <PieChart />
   </VStack>
  );
}

export default Right;
