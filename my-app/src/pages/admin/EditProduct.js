// src/pages/admin/EditProduct.js

import React from 'react';
import { useParams } from 'react-router-dom';
import { Flex, Box, FormControl, FormLabel, Input, Button } from '@chakra-ui/react';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';

const EditProduct = () => {
  const { id } = useParams();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Edit product logic
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
          <h1>Edit Product</h1>
          <Box mt={4}>
            <form onSubmit={handleSubmit}>
              <FormControl id="name" mb={4}>
                <FormLabel>Name</FormLabel>
                <Input type="text" placeholder="Product Name" />
              </FormControl>
              <FormControl id="price" mb={4}>
                <FormLabel>Price</FormLabel>
                <Input type="text" placeholder="Product Price" />
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

export default EditProduct;
