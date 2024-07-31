import React from 'react';
import { Flex, Box, Text, Button } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <Flex
      as="nav"
      p={4}
      bg="none"
      color="white"
      justify="space-between"
      align="center"
      height="100%"
    >
      <Box>
        <Text fontSize="xl" fontWeight="bold" color="black" fontFamily="math">
          Admin Panel
        </Text>
      </Box>
      <NavLink to="/login" activeClassName="active">
      <Button
      fontFamily="math"
        variant="outline"
        colorScheme="teal"
        borderColor="#00aa9f"
        color="#00aa9f"
        _hover={{ borderColor: "#32dfd4", color: "#32dfd4", bg: "transparent" }}
      >
        Đăng xuất
      </Button>
      </NavLink>
    </Flex>
  );
};

export default Navbar;
