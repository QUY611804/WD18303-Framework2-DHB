import React, { useEffect, useState } from "react";
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
  Spinner,
  Button,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { fetchOrderDetailById, updateOrderDetailStatus } from "../../../../service/api/order_detail"; // Import your service functions

const OrderDetailTable = () => {
  const { orderId } = useParams(); // Get the order ID from the URL
  const [orderDetails, setOrderDetails] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state
  const toast = useToast();
  const hoverBgColor = useColorModeValue("gray.100", "gray.700");
  const headerBgColor = useColorModeValue("gray.200", "gray.800");

  // Fetch order details when the component mounts
  useEffect(() => {
    const fetchOrderDetails = async () => {
      try {
        const data = await fetchOrderDetailById(orderId);
        setOrderDetails(data);
      } catch (error) {
        setError("Failed to fetch order details");
        console.error("Error fetching order details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrderDetails();
  }, [orderId]);
  const handleApprove = async (itemId) => {
    try {
      console.log(`Updating status for order ID: ${itemId}`);
      await updateOrderDetailStatus(itemId, "Đã duyệt");
      setOrderDetails((prevDetails) =>
        prevDetails.map((item) =>
          item.id === itemId ? { ...item, statuss: "Đã duyệt" } : item
        )
      );
      toast({
        title: "Đơn hàng đã được duyệt.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } catch (error) {
      console.error("Error updating order status:", error);
      toast({
        title: "Có lỗi xảy ra.",
        description: "Không thể duyệt đơn hàng.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };
  
  

  if (loading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="300px"
      >
        <Spinner size="xl" />
      </Box>
    );
  }

  if (error) {
    return (
      <Box p={5} bg="red.100" borderRadius="lg">
        <Text fontSize="lg" color="red.500">
          {error}
        </Text>
      </Box>
    );
  }

 
  return (
    <Box p={5} bg="white" borderRadius="lg" boxShadow="md">
      <Text fontSize="2xl" fontWeight="bold" mb={4}>
        Chi tiết đơn hàng #{orderId}
      </Text>
      <Table variant="simple">
        <Thead bg={headerBgColor}>
          <Tr>
            <Th>ID Đơn hàng</Th>
            <Th>Tên khách hàng</Th>
            <Th>Tên sản phẩm</Th>
            <Th>Hình ảnh</Th>
            <Th>Giá</Th>
            <Th>Giảm giá</Th>
            <Th>Số lượng</Th>
            <Th>Tổng</Th>
            <Th>Trạng thái</Th>
            <Th>Hành động</Th>
          </Tr>
        </Thead>
        <Tbody>
          {orderDetails.map((item) => {
            console.log("Rendering Item:", item); // Debugging log
            return (
              <Tr key={item.id} _hover={{ bg: hoverBgColor }}>
                <Td>{item.id}</Td>
                <Td>{item.order_name}</Td>
                <Td>{item.product_name}</Td>
                <Td>
                  <Image
                    src={item.image}
                    alt={item.product_name}
                    boxSize="50px"
                    objectFit="cover"
                  />
                </Td>
                <Td>{item.price}</Td>
                <Td>{item.sell_price}</Td>
                <Td>{item.quantity}</Td>
                <Td>{item.total}</Td>
                <Td>{item.statuss}</Td>
                <Td>
                  {item.statuss === "Chờ xác nhận" && (
                    <Button
                      colorScheme="green"
                      size="sm"
                      onClick={() => handleApprove(item.id)}
                    >
                      Duyệt
                    </Button>
                   )} 
                </Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </Box>
  );
};


export default OrderDetailTable;
