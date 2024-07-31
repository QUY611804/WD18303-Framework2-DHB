import React from 'react';
import { Flex, Box, Text } from '@chakra-ui/react';

const Navbar = () => {
  return (
    <Flex
      as="nav"
      p={4}
      bg=" #61dafb"
      color="white"
      justify="space-between"
      align="center"
    >
      <Box>
        <Text fontSize="xl" fontWeight="bold"> Panel</Text>
      </Box>
    </Flex>
  );
};

export default Navbar;
