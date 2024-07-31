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

// Sample data
const data = [
  {
    id: 1,
    author: "Esthera Jackson",
    email: "alexa@simmmp.com",
    avatar: "https://bit.ly/broken-link",
    function: { title: "Organization", subtitle: "Manager" },
    status: "admin",
    employed: "14/06/21",
  },
  {
    id: 2,
    author: "Alexa Liras",
    email: "laurent@simmmp.com",
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
      return "red";
    case "user":
      return "gray";
    default:
      return "gray";
  }
};

const AuthorsTable = () => {
  return (
    <Box p={5} bg="white" borderRadius="lg" boxShadow="md" fontFamily="math">
      <Flex mb={5} justify="space-between" align="center">
        <Text fontSize="2xl" fontWeight="bold">
          Thông tin người dùng
        </Text>
        <Link to="user/add">
          <Button colorScheme="teal">Thêm người dùng mới</Button>
        </Link>
      </Flex>

      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>ID</Th>
            <Th>họ Tên</Th>
            <Th>Tài khoản</Th>
            <Th>Phân quyền</Th>
            <Th>THời gian đăng ký</Th>
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
                <Badge colorScheme={statusBadgeColor(item.status)}>
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

export default AuthorsTable;
