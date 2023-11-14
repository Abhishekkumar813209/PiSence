import React from 'react';
import "./style.css"
import { Box, HStack, Text, VStack } from '@chakra-ui/react';
import Red from '../Signals/Red';
import Green from '../Signals/Green';

function Attendance({data}) {
  const days = Object.keys(data.ATTENDANCE);
  return (
<>
     <Text mt="10" fontSize={'3xl'}>HELLO! PISENCE </Text>
     <Text fontSize={'3xl'} textAlign={'center'}>ATTENDANCE </Text>
     <Box bg="gray.300">
     <VStack height={'250'}>
         <table style={{ borderCollapse: 'collapse', width: '100%'  , height:'100%'}}>
      <thead>
        <tr>
          <th></th>
          {days.map(day => (
            <th key={day}>{day}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          <td></td>
          {days.map(day => (
            <td key={day}>{data.ATTENDANCE[day].date}</td>
          ))}
        </tr>
        <tr>
          <td>FN</td>
          {days.map(day => (
            <td className='fn' key={day}>{data.ATTENDANCE[day].fn==='absent'?<HStack justifyContent={'center'}> <Red /></HStack>:<HStack justifyContent={'center'}> <Green /></HStack>}</td>
          ))}
        </tr>
        <tr>
          <td>AN</td>
          {days.map(day => (
            <td className='an' key={day}>{data.ATTENDANCE[day].an==='absent'?<HStack justifyContent={'center'}><Red /></HStack>:<HStack justifyContent={'center'}><Green /></HStack>}</td>
          ))}
        </tr>
      </tbody>
    </table>
    </VStack>
   </Box>
   </>
  );
}

export default Attendance;
