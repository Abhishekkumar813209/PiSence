import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  VStack,
  HStack
} from '@chakra-ui/react'
import React  from 'react';
import {IoHomeOutline} from 'react-icons/io5'
import { TbBooks } from "react-icons/tb";
import { BiCctv } from "react-icons/bi";
import { IoBookSharp } from "react-icons/io5";
import { BsLayoutSidebarInsetReverse } from "react-icons/bs";

import { useDisclosure } from '@chakra-ui/react';
function Sidebar() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  return (
    <>
    <Button leftIcon={<BsLayoutSidebarInsetReverse />} colorScheme='teal' onClick={onOpen} mt="20px">
    Open
  </Button>
  <Drawer
    isOpen={isOpen}
    placement='left'
    onClose={onClose}
    finalFocusRef={btnRef}
  >
    <DrawerOverlay />
    <DrawerContent>
      <DrawerCloseButton />
      <DrawerHeader>Dashboard</DrawerHeader>

      <DrawerBody>
       <VStack gap="5">
       <HStack gap="3" fontSize={'4xl'}> <IoHomeOutline/> <Button variant="ghost">Summary Dashboard</Button> </HStack>  
       <HStack gap="3" fontSize={'4xl'}> <TbBooks /> <Button variant="ghost">Attendance tracking</Button></HStack>
       <HStack gap="3" fontSize={'4xl'}> <BiCctv /> <Button variant="ghost">  Behaviour Analytics</Button></HStack>
       <HStack gap="3" w="60" fontSize={'4xl'}> <IoBookSharp /> <Button variant="ghost">  Performance Tracking</Button></HStack>     


       </VStack>
      </DrawerBody>

      
    </DrawerContent>
  </Drawer>
  </>
  );
}

export default Sidebar;
