import React from 'react';
import { Box, Stack, Text, Link, useDisclosure, Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, IconButton, useBreakpointValue, useColorModeValue } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isMobile = useBreakpointValue({ base: true, md: false });
  const sidebarBgColor = useColorModeValue('gray.800', 'gray.900');
  const linkColor = useColorModeValue('gray.100', 'gray.300');

  return (
    <>
      {isMobile && (
        <IconButton
          aria-label="Open sidebar"
          icon={<HamburgerIcon />}
          onClick={onOpen}
          position="fixed"
          top="4"
          left="4"
          zIndex="overlay"
        />
      )}

      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader>
            <IconButton
              aria-label="Close sidebar"
              icon={<CloseIcon />}
              onClick={onClose}
              position="absolute"
              top="4"
              right="4"
            />
          </DrawerHeader>
          <DrawerBody>
            <Stack spacing={4} mt={8}>
              <NavLink to="/admin/dashboard">
                <Link>Dashboard</Link>
              </NavLink>
              <NavLink to="/admin/products">
                <Link>Products</Link>
              </NavLink>
              <NavLink to="/admin/users">
                <Link>Users</Link>
              </NavLink>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>

      {!isMobile && (
        <Box
          width="250px"
          height="100vh"
          bg={sidebarBgColor}
          color="white"
          p={4}
          position="fixed"
          top="0"
          left="0"
          overflowY="auto"
          boxShadow="md"
        >
          <Stack spacing={4}>
            <Text fontSize="lg" fontWeight="bold">Sidebar</Text>
            <NavLink to="/admin/dashboard">
              <Link color={linkColor}>Dashboard</Link>
            </NavLink>
            <NavLink to="/admin/products">
              <Link color={linkColor}>Products</Link>
            </NavLink>
            <NavLink to="/admin/users">
              <Link color={linkColor}>Users</Link>
            </NavLink>
          </Stack>
        </Box>
      )}
    </>
  );
};

export default Sidebar;
