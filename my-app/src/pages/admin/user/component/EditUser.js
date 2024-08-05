import React, { useState } from "react";
import { Box, Button, Input, FormControl, FormLabel, Heading, Select, FormErrorMessage, useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const EditUser = () => {
  const [name, setName] = useState("User Name");
  const [email, setEmail] = useState("user@example.com");
  const [phone, setPhone] = useState("0920183198");
  const [role, setRole] = useState("user");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const toast = useToast();

  const validate = () => {
    const newErrors = {};
    if (!name) newErrors.name = "Họ tên là bắt buộc.";
    if (!email) newErrors.email = "Tài khoản là bắt buộc.";
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = "Tài khoản không hợp lệ.";
    if (!phone) newErrors.phone = "Số điện thoại là bắt buộc.";
    else if (!/^\d{10}$/.test(phone)) newErrors.phone = "Số điện thoại không hợp lệ.";
    if (!role) newErrors.role = "Phân quyền là bắt buộc.";
    return newErrors;
  };

  const handleSubmit = () => {
    const newErrors = validate();
    if (Object.keys(newErrors).length === 0) {
      // Add logic to update the user (e.g., API call)
      console.log({
        name,
        email,
        phone,
        role,
      });

      // Simulate a successful save with a toast notification
      toast({
        title: "User updated.",
        description: "The user information has been updated successfully.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });

      // Redirect to the user list page
      navigate("/admin/user");
    } else {
      setErrors(newErrors);
    }
  };

  const handleCancel = () => {
    navigate("/admin/user");
  };

  return (
    <Box p={5} bg="white" borderRadius="lg" boxShadow="md" fontFamily="math">
      <Heading mb={5}>Sửa thông tin</Heading>
      <FormControl id="name" mb={4} isInvalid={errors.name}>
        <FormLabel>Họ tên</FormLabel>
        <Input
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <FormErrorMessage>{errors.name}</FormErrorMessage>
      </FormControl>
      <FormControl id="email" mb={4} isInvalid={errors.email}>
        <FormLabel>Tài khoản</FormLabel>
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <FormErrorMessage>{errors.email}</FormErrorMessage>
      </FormControl>
      <FormControl id="phone" mb={4} isInvalid={errors.phone}>
        <FormLabel>Số điện thoại</FormLabel>
        <Input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <FormErrorMessage>{errors.phone}</FormErrorMessage>
      </FormControl>
      <FormControl id="role" mb={4} isInvalid={errors.role}>
        <FormLabel>Phân quyền</FormLabel>
        <Select
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="admin">Admin</option>
          <option value="user">User</option>
        </Select>
        <FormErrorMessage>{errors.role}</FormErrorMessage>
      </FormControl>
      <Button colorScheme="teal" mr="10px" onClick={handleSubmit}>Đồng ý</Button>
      <Button colorScheme="gray" onClick={handleCancel}>
        Hủy
      </Button>
    </Box>
  );
};

export default EditUser;
