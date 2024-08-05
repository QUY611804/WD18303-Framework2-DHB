import React, { useState, useRef } from "react";
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
  Button,
  Flex,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
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
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const cancelRef = useRef();

  const onClose = () => setIsOpen(false);

  const handleDeleteClick = (product) => {
    setSelectedProduct(product);
    setIsOpen(true);
  };

  const handleConfirmDelete = () => {
    // Logic to delete the product
    console.log("Deleted product:", selectedProduct);
    setIsOpen(false);
  };

  return (
    <Box p={5} bg="white" borderRadius="lg" boxShadow="md" fontFamily="math">
      <Flex mb={5} justify="space-between" align="center">
        <Text fontSize="2xl" fontWeight="bold">
          Thông tin sản phẩm
        </Text>
        <Link to="products/add">
          <Button
            bg="#1ba43b"
            color="white"
            _hover={{ bg: "#189537" }} // Màu khi hover
            _active={{ bg: "#157f31" }} // Màu khi click
          >
            Thêm sản phẩm
          </Button>
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
                <Text>{product.quantity}</Text>
              </Td>
              <Td>
                <Link to={`products/edit/${product.id}`}>
                  <Button colorScheme="blue" size="sm" mr={2}>
                    Sửa
                  </Button>
                </Link>
                <Button
                  colorScheme="red"
                  size="sm"
                  onClick={() => handleDeleteClick(product)}
                >
                  Xóa
                </Button>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Xác nhận xóa
            </AlertDialogHeader>

            <AlertDialogBody>
              Bạn có chắc chắn muốn xóa sản phẩm này không?
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Hủy
              </Button>
              <Button colorScheme="red" onClick={handleConfirmDelete} ml={3}>
                Xóa
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </Box>
  );
};

export default ProductsTable;
