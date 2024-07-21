// src/pages/admin/AddProduct.js

import React from 'react';
import { Flex, Box, FormControl, FormLabel, Input, Button } from '@chakra-ui/react';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';

const AddProduct = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Add product logic
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
          <h1>Add New Product</h1>
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
                Add Product
              </Button>
            </form>
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default AddProduct;
