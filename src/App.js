import { Box } from '@chakra-ui/react';
import './App.css';
import Sidebar from './components/Drawer/Sidebar';
import Attendance from './components/attendance/Attendance';
import Bottom from './components/bottom/Bottom';
import Data from './components/data';
function App() {
  return (
  <Box style={{backgroundColor:"white"}} width={'95%'} margin={'auto'}>
    <Sidebar />
    <Attendance data = {Data} />
    <Bottom data={Data} />
  </Box >
  );
}

export default App;
