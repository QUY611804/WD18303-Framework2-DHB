import React from "react";
import {
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Image,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";

// Sample data for order details
const orderDetails = [
  {
    orderId: 1,
    productName: "Product A",
    imageUrl: "https://via.placeholder.com/50",
    price: "$20.00",
    quantity: 2,
    time: "2024-08-01 14:30",
  },
  {
    orderId: 1,
    productName: "Product B",
    imageUrl: "https://via.placeholder.com/50",
    price: "$30.00",
    quantity: 1,
    time: "2024-08-01 14:30",
  },
  // Add more items as needed...
];

const OrderDetailTable = () => {
  const { orderId } = useParams(); // Get the order ID from the URL
  const hoverBgColor = useColorModeValue("gray.100", "gray.700");
  const headerBgColor = useColorModeValue("gray.200", "gray.800");

  // Filter order details based on the order ID
  const filteredDetails = orderDetails.filter(
    (item) => item.orderId === parseInt(orderId)
  );

  return (
    <Box p={5} bg="white" borderRadius="lg" boxShadow="md">
      <Text fontSize="2xl" fontWeight="bold" mb={4}>
        Chi tiết đơn hàng #{orderId}
      </Text>
      <Table variant="simple">
        <Thead bg={headerBgColor}>
          <Tr>
            <Th>Tên sản phẩm</Th>
            <Th>Hình ảnh</Th>
            <Th>Giá</Th>
            <Th>Số lượng</Th>
            <Th>Thời gian</Th>
          </Tr>
        </Thead>
        <Tbody>
          {filteredDetails.map((item, index) => (
            <Tr key={index} _hover={{ bg: hoverBgColor }}>
              <Td>{item.productName}</Td>
              <Td>
                <Image src={item.imageUrl} alt={item.productName} boxSize="50px" objectFit="cover" />
              </Td>
              <Td>{item.price}</Td>
              <Td>{item.quantity}</Td>
              <Td>{item.time}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default OrderDetailTable;
