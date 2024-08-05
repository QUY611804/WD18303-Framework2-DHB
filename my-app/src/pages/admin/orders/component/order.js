import React from "react";
import {
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

// Sample data
const orders = [
  {
    id: 1,
    recipientName: "Jane Doe",
    address: "123 Main St, Springfield",
    phoneNumber: "123-456-7890",
    quantity: 2,
    totalPrice: "$50.00",
    time: "2024-08-01 14:30",
  },
  {
    id: 2,
    recipientName: "John Smith",
    address: "456 Elm St, Springfield",
    phoneNumber: "987-654-3210",
    quantity: 1,
    totalPrice: "$30.00",
    time: "2024-08-02 09:15",
  },
  // Add more orders as needed...
];

const OrdersTable = () => {
  const hoverBgColor = useColorModeValue("gray.100", "gray.700");
  const headerBgColor = useColorModeValue("gray.200", "gray.800");

  return (
    <Box p={5} bg="white" borderRadius="lg" boxShadow="md">
      <Table variant="simple">
        <Thead bg={headerBgColor}>
          <Tr>
            <Th>ID</Th>
            <Th>Tên người nhận</Th>
            <Th>Địa chỉ</Th>
            <Th>Số điện thoại</Th>
            <Th>Số lượng</Th>
            <Th>Tổng giá</Th>
            <Th>Thời gian</Th>
            <Th>Chi tiết</Th>
          </Tr>
        </Thead>
        <Tbody>
          {orders.map((order) => (
            <Tr key={order.id} _hover={{ bg: hoverBgColor }}>
              <Td>{order.id}</Td>
              <Td>{order.recipientName}</Td>
              <Td>{order.address}</Td>
              <Td>{order.phoneNumber}</Td>
              <Td>{order.quantity}</Td>
              <Td>{order.totalPrice}</Td>
              <Td>{order.time}</Td>
              <Td>
                <Link to={`/orders/:orderId/${order.id}`}>
                  <Button colorScheme="blue" size="sm">
                    Chi tiết
                  </Button>
                </Link>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default OrdersTable;
