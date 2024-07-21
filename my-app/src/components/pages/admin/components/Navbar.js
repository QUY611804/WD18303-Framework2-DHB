import React from 'react';
import { Flex, Box, Text } from '@chakra-ui/react';

const Navbar = () => {
  return (
    <Flex
      as="nav"
      p={4}
      bg="teal.500"
      color="white"
      justify="space-between"
      align="center"
    >
      <Box>
        <Text fontSize="xl" fontWeight="bold">Admin Panel</Text>
      </Box>
    </Flex>
  );
};

export default Navbar;
