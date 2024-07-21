// src/pages/admin/Products.js

import React from 'react';
import { Flex, Box, Table, Thead, Tbody, Tr, Th, Td, Button, useDisclosure } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';

const Products = () => {
  // Sample data
  const products = [
    { id: 1, name: 'Product 1', price: '$10' },
    { id: 2, name: 'Product 2', price: '$20' },
    { id: 3, name: 'Product 3', price: '$30' },
  ];

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
          <Flex mb={4} justify="space-between" align="center">
            <h1>Products</h1>
            <Link to="/admin/products/add">
              <Button colorScheme="teal">Add New Product</Button>
            </Link>
          </Flex>
          <Box overflowX="auto">
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th>ID</Th>
                  <Th>Name</Th>
                  <Th>Price</Th>
                  <Th>Actions</Th>
                </Tr>
              </Thead>
              <Tbody>
                {products.map(product => (
                  <Tr key={product.id}>
                    <Td>{product.id}</Td>
                    <Td>{product.name}</Td>
                    <Td>{product.price}</Td>
                    <Td>
                      <Link to={`/admin/products/edit/${product.id}`}>
                        <Button colorScheme="blue" size="sm" mr={2}>
                          Edit
                        </Button>
                      </Link>
                      <Button colorScheme="red" size="sm">
                        Delete
                      </Button>
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Products;
