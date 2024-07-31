import React from "react";
import { Box, Button, Input, FormControl, FormLabel, Heading } from "@chakra-ui/react";

const AddUser = () => {
  return (
    <Box p={5} bg="white" borderRadius="lg" boxShadow="md" fontFamily="math">
      <Heading mb={5}>Thêm thông tin</Heading>
      <FormControl id="name" mb={4}>
        <FormLabel>Họ tên</FormLabel>
        <Input placeholder="Enter user name" />
      </FormControl>
      <FormControl id="email" mb={4}>
        <FormLabel>Email</FormLabel>
        <Input placeholder="Enter user email" />
      </FormControl>
      <Button colorScheme="teal">Thêm</Button>
    </Box>
  );
};

export default AddUser;
