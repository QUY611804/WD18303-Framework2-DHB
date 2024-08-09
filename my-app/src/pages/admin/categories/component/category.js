import React, { useEffect, useRef, useState } from "react";
import {
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  useColorModeValue,
  Button,
  Flex,
  Text,
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogBody,
  AlertDialogFooter,
  useToast,
} from "@chakra-ui/react";
import { fetchCategories,deleteCategory } from "../../../../service/api/Category";
import { Link } from "react-router-dom";

const CategoryPage = () => {
  const [data, setData] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategories, setselectedCategories] = useState(null);
  const cancelRef = useRef();
  const toast = useToast(); 
  const [categories, setCategories] = useState([]);
  const hoverBgColor = useColorModeValue("gray.100", "gray.700");

  useEffect(() => {
    const getCategories = async () => {
      const data = await fetchCategories();
      if (data) {
        setCategories(data);
      }
    };
    getCategories();
  }, []);

  
  const handleConfirmDelete = async () => {
    try {
      if (selectedCategories) {
        await deleteCategory(selectedCategories.id); // Changed to deleteUser
        setData((prevData) =>
          prevData.filter((categories) => categories.id !== selectedCategories.id)
        );
        toast({
          title: "categories deleted.",
          description: "categories has been deleted successfully.",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
      }
    } catch (error) {
      toast({
        title: "Error deleting categories",
        description: "Failed to delete the categories.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      console.error("Failed to delete categories:", error);
    }
    setIsOpen(false); // Close the dialog
  };
  const onClose = () => setIsOpen(false);
  const handleDeleteClick = (categories) => {
    setselectedCategories(categories);
    setIsOpen(true);
  };
  return (
    <Box p={5} bg="white" borderRadius="lg" boxShadow="md">
      <Flex mb={5} justify="space-between" align="center">
        <Text fontSize="2xl" fontWeight="bold">
          
        </Text>
        <Link to="admin/categories/add">
          <Button
            bg="#1ba43b"
            color="white"
            _hover={{ bg: "#189537" }} // Màu khi hover
            _active={{ bg: "#157f31" }} // Màu khi click
          >
            Thêm danh mục
          </Button>
        </Link>
      </Flex>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>ID</Th>
            <Th>thương hiệu</Th>
            <Th>Hoạt động</Th>
          </Tr>
        </Thead>
        <Tbody>
          {categories.map((category) => (
            <Tr key={category.id} _hover={{ bg: hoverBgColor }}>
              <Td>{category.id}</Td>
              <Td>{category.name}</Td>
              <Td>
<Link to={`admin/Category/edit/${category.id}`}>
                  <Button colorScheme="blue" size="sm" mr={2}>
                    Sửa
                  </Button>
                </Link>
                <Button
                  colorScheme="red"
                  size="sm"
                  onClick={() => handleDeleteClick(category)}
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
              Bạn có chắc chắn muốn xóa người dùng này không?
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

export default CategoryPage;