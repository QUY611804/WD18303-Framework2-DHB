import React from "react";
import {
  Box,
  Stack,
  Text,
  Link,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  IconButton,
  useBreakpointValue,
  useColorModeValue,
  Button,
  Avatar,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { NavLink } from "react-router-dom";
import { HomeIcon, ProfileIcon, BagIcon } from "../../../components/icon/icon";

// Placeholder user data
const user = {
  name: "John Doe",
  email: "john.doe@example.com",
  avatar: "https://bit.ly/broken-link",
};

const Sidebar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isMobile = useBreakpointValue({ base: true, md: false });
  const sidebarBgColor = "#f7fafc"; // Fixed color value for the sidebar background
  const linkColor = useColorModeValue("#a0aec0", "#cbd5e0"); // Adjust fallback color for dark mode
  const activeBg = useColorModeValue("white");
  const activeColor = useColorModeValue("black", "white");

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

      <Drawer placement="left" onClose={onClose} isOpen={isOpen} fontFamily="math">
        <DrawerOverlay />
        <DrawerContent bg={sidebarBgColor}>
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
              <Box textAlign="center">
                <Avatar size="xl" name={user.name} src={user.avatar} mb={4} />
                <Text fontSize="lg" fontWeight="bold">
                  {user.name}
                </Text>
                <Text fontSize="sm" color="gray.500">
                  {user.email}
                </Text>
              </Box>
              <NavLink to="/admin/dashboard" activeClassName="active">
                <Link
                  _activeLink={{
                    bg: activeBg,
                    color: activeColor,
                    fontWeight: "bold",
                  }}
                  _hover={{ textDecoration: "none" }}
                  p={2}
                  borderRadius="md"
                >
                  Dashboard
                </Link>
              </NavLink>
              <NavLink to="/admin/products" activeClassName="active">
                <Link
                  _activeLink={{
                    bg: activeBg,
                    color: activeColor,
                    fontWeight: "bold",
                  }}
                  _hover={{ textDecoration: "none" }}
                  p={2}
                  borderRadius="md"
                >
                  Products
                </Link>
              </NavLink>
              <NavLink to="/admin/users" activeClassName="active">
                <Link
                  _activeLink={{
                    bg: activeBg,
                    color: activeColor,
                    fontWeight: "bold",
                  }}
                  _hover={{ textDecoration: "none" }}
                  p={2}
                  borderRadius="md"
                >
                  Users
                </Link>
              </NavLink>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>

      {!isMobile && (
        <Box
          width="250px"
          height="120vh"
          bg={sidebarBgColor}
          color="#5a5757"
          p={4}
          position="fixed"
          top="0"
          left="0"
          overflowY="auto"
          boxShadow="none"
        >
          <Stack spacing={4}>
            <Box textAlign="center">
              <Avatar size="xl" name={user.name} src={user.avatar} mb={4} />
              <Text fontSize="lg" fontWeight="bold" color={linkColor}>
                {user.name}
              </Text>
              <Text fontSize="sm" color="gray.500">
                {user.email}
              </Text>
            </Box>
            <NavLink to="/admin/dashboard" activeClassName="active">
              <Button
                fontFamily="math"
                as={Link}
                to="/admin/dashboard"
                justifyContent="flex-start"
                alignItems="center"
                bg="inherit"
                _hover={{ bg: activeBg, textDecoration: "none" }}
                _activeLink={{
                  bg: activeBg,
                  color: activeColor,
                  fontWeight: "bold",
                }}
                mb="0.5px"
                mx="auto"
                ps="16px"
                py="12px"
                borderRadius="15px"
                w="100%"
                height="50px"
              >
                <HomeIcon boxSize={5} color="#21e4e0" mr="10px" /> Tổng kết
              </Button>
            </NavLink>
            <NavLink to="/admin/products" activeClassName="active">
              <Button
                fontFamily="math"
                as={Link}
                to="/admin/products"
                justifyContent="flex-start"
                alignItems="center"
                bg="inherit"
                _hover={{ bg: activeBg, textDecoration: "none" }}
                _activeLink={{
                  bg: activeBg,
                  color: activeColor,
                  fontWeight: "bold",
                }}
                mb="0.5px"
                mx="auto"
                ps="16px"
                py="12px"
                borderRadius="15px"
                w="100%"
                height="50px"
              >
                <BagIcon boxSize={5} color="#21e4e0" mr="10px" /> Sản phẩm
              </Button>
            </NavLink>
            <NavLink to="/admin/user" activeClassName="active">
              <Button
                fontFamily="math"
                as={Link}
                to="/admin/user"
                justifyContent="flex-start"
                alignItems="center"
                bg="inherit"
                _hover={{ bg: activeBg, textDecoration: "none" }}
                _activeLink={{
                  bg: activeBg,
                  color: activeColor,
                  fontWeight: "bold",
                }}
                mb="0.5px"
                mx="auto"
                ps="16px"
                py="12px"
                borderRadius="15px"
                w="100%"
                height="50px"
              >
                <ProfileIcon boxSize={5} color="#21e4e0" mr="10px" /> Người dùng
              </Button>
            </NavLink>
          </Stack>
        </Box>
      )}
    </>
  );
};

export default Sidebar;
