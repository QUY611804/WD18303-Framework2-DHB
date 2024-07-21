// src/pages/admin/EditUser.js

import React from 'react';
import { useParams } from 'react-router-dom';
import { Flex, Box, FormControl, FormLabel, Input, Button } from '@chakra-ui/react';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';

const EditUser = () => {
  const { id } = useParams();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Edit user logic
  };

  return (
    <Flex>
      <Sidebar />
      <Flex
        ml={{ base: 0, md: '250px' }}
        direction="column"
        p={4}
        flex="1"
      >
        <Navbar />
        <Flex direction="column" p={4}>
          <h1>Edit User</h1>
          <Box mt={4}>
            <form onSubmit={handleSubmit}>
              <FormControl id="name" mb={4}>
                <FormLabel>Name</FormLabel>
                <Input type="text" placeholder="User Name" />
              </FormControl>
              <FormControl id="email" mb={4}>
                <FormLabel>Email</FormLabel>
                <Input type="email" placeholder="User Email" />
              </FormControl>
              <Button colorScheme="teal" type="submit">
                Save Changes
              </Button>
            </form>
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default EditUser;
