import { Text, VStack } from '@chakra-ui/react';

function Left({data}) {
  const subjects = data.homework;
  const numRows = 3;
  const numCols = 2;

  // Create a 2D array from the subjects
  const subjectsGrid = [];
  for (let i = 0; i < numRows; i++) {
    subjectsGrid.push(subjects.slice(i * numCols, (i + 1) * numCols));
  }
  return (
    <VStack background={'gray.300'} width={'40vw'} height="30vh">
          <table style={{ borderCollapse: 'collapse', width: '100%' }}>
      <thead>
        <Text fontSize={'2xl'} ml="56px"> Homeworks </Text>
        <tr>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {subjectsGrid.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((subject, colIndex) => (
              <td key={colIndex}>{subject}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
    </VStack>
  );
}

export default Left;
