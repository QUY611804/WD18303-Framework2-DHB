import React from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Avatar,
  Text,
  Badge,
  Button,
  Flex,
} from "@chakra-ui/react";

// Sample product data
const products = [
  {
    id: 1,
    name: "Product A",
    category: "Category 1",
    price: "$20",
    quantity: "120",
    image: "https://bit.ly/broken-link",
  },
  {
    id: 2,
    name: "Product B",
    category: "Category 2",
    price: "$30",
    quantity: "200",
    image: "https://bit.ly/broken-link",
  },
  // Add more products as needed...
];



const ProductsTable = () => {
  return (
    <Box p={5} bg="white" borderRadius="lg" boxShadow="md" fontFamily="math">
      <Flex mb={5} justify="space-between" align="center">
        <Text fontSize="2xl" fontWeight="bold">
          Thông tin sản phẩm
        </Text>
        <Link to="products/add">
          <Button colorScheme="teal">Thêm sản phẩm </Button>
        </Link>
      </Flex>

      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>ID</Th>
            <Th>Tên sản phẩm</Th>
            <Th>Loại sản phẩm</Th>
            <Th>Giá</Th>
            <Th>Số lượng</Th>
            <Th>hoạt động</Th>
          </Tr>
        </Thead>
        <Tbody>
          {products.map((product) => (
            <Tr key={product.id}>
              <Td>
                <Text fontWeight="bold">{product.id}</Text>
              </Td>
              <Td>
                <Box display="flex" alignItems="center">
                  <Avatar src={product.image} mr={3} />
                  <Box>
                    <Text fontWeight="bold">{product.name}</Text>
                  </Box>
                </Box>
              </Td>
              <Td>
                <Text>{product.category}</Text>
              </Td>
              <Td>
                <Text>{product.price}</Text>
              </Td>
              <Td>
                <Text >
                  {product.quantity}
                </Text>
              </Td>
              <Td>
                <Link to={`products/edit/${product.id}`}>
                  <Button colorScheme="blue" size="sm" mr={2}>
                    Sửa
                  </Button>
                </Link>
                <Button colorScheme="red" size="sm">
                  Xóa
                </Button>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default ProductsTable;
