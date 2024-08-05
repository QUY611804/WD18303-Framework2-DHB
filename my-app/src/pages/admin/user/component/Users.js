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
  Badge,
  Button,
  Flex,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
} from "@chakra-ui/react";

// Sample data
const data = [
  {
    id: 1,
    author: "Esthera Jackson",
    email: "alexa@simmmp.com",
    phone: "0920183198",
    avatar: "https://bit.ly/broken-link",
    function: { title: "Organization", subtitle: "Manager" },
    status: "admin",
    employed: "14/06/21",
  },
  {
    id: 2,
    author: "Alexa Liras",
    email: "laurent@simmmp.com",
    phone: "0920183198",
    avatar: "https://bit.ly/broken-link",
    function: { title: "Developer", subtitle: "Programmer" },
    status: "user",
    employed: "12/05/21",
  },  {
    id: 2,
    author: "Alexa Liras",
    email: "laurent@simmmp.com",
    phone: "0920183198",
    avatar: "https://bit.ly/broken-link",
    function: { title: "Developer", subtitle: "Programmer" },
    status: "user",
    employed: "12/05/21",
  },
  // Add more data as needed...
];

const statusBadgeColor = (status) => {
  switch (status) {
    case "admin":
      return { bg: "red.500", color: "white" };
    case "user":
      return { bg: "gray.500", color: "white" };
    default:
      return { bg: "gray.500", color: "white" };
  }
};

const AuthorsTable = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const cancelRef = useRef();

  const onClose = () => setIsOpen(false);

  const handleDeleteClick = (user) => {
    setSelectedUser(user);
    setIsOpen(true);
  };

  const handleConfirmDelete = () => {
    // Logic to delete the user
    console.log("Deleted user:", selectedUser);
    setIsOpen(false);
  };

  return (
    <Box p={5} bg="white" borderRadius="lg" boxShadow="md" fontFamily="math">
      <Flex mb={5} justify="space-between" align="center">
        <Text fontSize="2xl" fontWeight="bold">
          Thông tin người dùng
        </Text>
        <Link to="user/add">
          <Button
            bg="#1ba43b"
            color="white"
            _hover={{ bg: "#189537" }} // Màu khi hover
            _active={{ bg: "#157f31" }} // Màu khi click
          >
            Thêm người dùng mới
          </Button>
        </Link>
      </Flex>

      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>ID</Th>
            <Th>Họ Tên</Th>
            <Th>Tài khoản</Th>
            <Th>Số điện thoại</Th>
            <Th>Phân quyền</Th>
            <Th>Thời gian đăng ký</Th>
            <Th>Hoạt động</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.map((item) => (
            <Tr key={item.id}>
              <Td>
                <Box display="flex" alignItems="center">
                  <Box>
                    <Text fontWeight="bold">{item.id}</Text>
                  </Box>
                </Box>
              </Td>
              <Td>
                <Box display="flex" alignItems="center">
                  <Avatar src={item.avatar} mr={3} />
                  <Box>
                    <Text fontWeight="bold">{item.author}</Text>
                    <Text fontSize="sm" color="gray.500">
                      {item.email}
                    </Text>
                  </Box>
                </Box>
              </Td>

              <Td>
                <Text fontWeight="bold">{item.function.title}</Text>
                <Text fontSize="sm" color="gray.500">
                  {item.function.subtitle}
                </Text>
              </Td>
              <Td>
                <Box display="flex" alignItems="center">
                  <Box>
                    <Text fontWeight="bold">{item.phone}</Text>
                  </Box>
                </Box>
              </Td>
              <Td>
                <Badge
                  bg={statusBadgeColor(item.status).bg}
                  color={statusBadgeColor(item.status).color}
                >
                  {item.status}
                </Badge>
              </Td>
              <Td>
                <Text>{item.employed}</Text>
              </Td>
              <Td>
                <Link to={`user/edit/${item.id}`}>
                  <Button colorScheme="blue" size="sm" mr={2}>
                    Sửa
                  </Button>
                </Link>
                <Button
                  colorScheme="red"
                  size="sm"
                  onClick={() => handleDeleteClick(item)}
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

export default AuthorsTable;
