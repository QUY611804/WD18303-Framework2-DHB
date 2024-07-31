import React from "react";
import { Box, Button, Input, FormControl, FormLabel, Heading } from "@chakra-ui/react";

const EditUser = () => {
  return (
    <Box p={5} bg="white" borderRadius="lg" boxShadow="md" fontFamily="math">
      <Heading mb={5}>Sửa thông tin</Heading>
      <FormControl id="name" mb={4}>
        <FormLabel>Họ tên</FormLabel>
        <Input defaultValue="User Name" />
      </FormControl>
      <FormControl id="email" mb={4}>
        <FormLabel>Email</FormLabel>
        <Input defaultValue="user@example.com" />
      </FormControl>
      <Button colorScheme="teal">Đồng ý</Button>
    </Box>
  );
};

export default EditUser;
