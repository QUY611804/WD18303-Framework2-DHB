import React, { useEffect, useState } from "react";
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
  useToast,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { fetchOrders, updateOrderStatus, deleteOrder } from "../../../../service/api/orders"; // Import your service functions

const OrdersTable = () => {
  const [orders, setOrders] = useState([]);
  const hoverBgColor = useColorModeValue("gray.100", "gray.700");
  const toast = useToast();

  useEffect(() => {
    const getOrders = async () => {
      try {
        const fetchedData = await fetchOrders();
        if (fetchedData) {
          setOrders(fetchedData);
        }
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };
    getOrders();
  }, []);

  const handleApprove = async (orderId) => {
    try {
      await updateOrderStatus(orderId, "Đã duyệt");
      setOrders((prevOrders) =>
        prevOrders.map((order) =>
          order.id === orderId ? { ...order, status: "Đã duyệt" } : order
        )
      );
      toast({
        title: "Đơn hàng đã được duyệt.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } catch (error) {
      console.error("Error approving order:", error);
    }
  };

  const handleCancel = async (orderId) => {
    const confirmed = window.confirm("Bạn có chắc chắn muốn hủy đơn hàng này?");
    if (confirmed) {
      try {
        await deleteOrder(orderId);
        setOrders((prevOrders) => prevOrders.filter((order) => order.id !== orderId));
        toast({
          title: "Đơn hàng đã bị hủy.",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      } catch (error) {
        console.error("Error canceling order:", error);
      }
    }
  };

  return (
    <Box p={5} bg="white" borderRadius="lg" boxShadow="md">
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>stt</Th>
            <Th display="none">ID</Th>
            <Th>Tên người nhận</Th>
            <Th>Địa chỉ</Th>
            <Th>Số điện thoại</Th>
            <Th>Phương thức thanh toán</Th>
            <Th>Thời gian</Th>
            <Th>Chi tiết</Th>
            <Th>Hành động</Th>
          </Tr>
        </Thead>
        <Tbody>
          {orders.map((order, index) => (
            <Tr key={order.id} _hover={{ bg: hoverBgColor }}>
              <Td fontWeight="bold">{index + 1}</Td>
              <Td display="none">{order.id}</Td>
              <Td>{order.name}</Td>
              <Td>{order.address}</Td>
              <Td>{order.phone}</Td>
              <Td>{order.paymentMethod}</Td>
              <Td>{order.date}</Td>
              <Td>
                <Link to={`admin/orders/${order.id}`}>
                  <Button colorScheme="blue" size="sm">
                    Chi tiết
                  </Button>
                </Link>
              </Td>
              <Td>
               
               
                
                  <Button
                    colorScheme="red"
                    size="sm"
                    onClick={() => handleCancel(order.id)}
                  >
                    Hủy
                  </Button>
                
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default OrdersTable;
