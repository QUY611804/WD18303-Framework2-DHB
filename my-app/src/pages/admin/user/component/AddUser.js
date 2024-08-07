import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  Heading,
  useToast,
  FormErrorMessage,
  Select,
} from "@chakra-ui/react";
import axios from "axios";

const AddUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [image, setImage] = useState(null);
  const [role, setRole] = useState("user");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const toast = useToast();

  const validate = () => {
    const newErrors = {};
    if (!name) newErrors.name = "Họ tên là bắt buộc.";
    if (!email) newErrors.email = "Email là bắt buộc.";
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = "Email không hợp lệ.";
    if (!password) newErrors.password = "Password là bắt buộc.";
    if (!phone) newErrors.phone = "Số điện thoại là bắt buộc.";
    else if (!/^\d{10}$/.test(phone)) newErrors.phone = "Số điện thoại không hợp lệ.";
    if (!image) newErrors.image = "Profile image là bắt buộc.";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length === 0) {
      try {
        // Add logic to save the user (e.g., API call)
        const formData = new FormData();
        formData.append("name", name);
        formData.append("email", email);
        formData.append("password", password);
        formData.append("phone", phone);
        formData.append("image", image);
        formData.append("role", role);

        // Assuming there's an API endpoint for adding users
        await axios.post("http://localhost:3000/api/users", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });

        // Simulate a successful save with a toast notification
        toast({
          title: "User added.",
          description: "The user has been added successfully.",
          status: "success",
          duration: 5000,
          isClosable: true,
        });

        // Redirect to the user list page
        navigate("/admin/user");
      } catch (error) {
        console.error("Error adding user:", error);
        toast({
          title: "Error adding user.",
          description: error.message,
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      }
    } else {
      setErrors(newErrors);
    }
  };

  const handleCancel = () => {
    navigate("/admin/user");
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  return (
    <Box p={5} bg="white" borderRadius="lg" boxShadow="md" fontFamily="math">
      <Heading mb={5}>Thêm thông tin</Heading>
      <form onSubmit={handleSubmit}>
        <FormControl id="name" mb={4} isInvalid={errors.name}>
          <FormLabel>Họ tên</FormLabel>
          <Input
            type="text"
            placeholder="Enter user name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <FormErrorMessage>{errors.name}</FormErrorMessage>
        </FormControl>
        <FormControl id="email" mb={4} isInvalid={errors.email}>
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            placeholder="Enter user email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <FormErrorMessage>{errors.email}</FormErrorMessage>
        </FormControl>
        <FormControl id="password" mb={4} isInvalid={errors.password}>
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            placeholder="Enter user password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <FormErrorMessage>{errors.password}</FormErrorMessage>
        </FormControl>
        <FormControl id="phone" mb={4} isInvalid={errors.phone}>
          <FormLabel>Phone</FormLabel>
          <Input
            type="text"
            placeholder="Enter user phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <FormErrorMessage>{errors.phone}</FormErrorMessage>
        </FormControl>
        <FormControl id="image" mb={4} isInvalid={errors.image}>
          <FormLabel>Profile Image</FormLabel>
          <Input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
          />
          <FormErrorMessage>{errors.image}</FormErrorMessage>
        </FormControl>
        <FormControl id="role" mb={4}>
          <FormLabel>Role</FormLabel>
          <Select value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </Select>
        </FormControl>
        <Button colorScheme="teal" type="submit" mr="10px">
          Thêm
        </Button>
        <Button colorScheme="gray" onClick={handleCancel}>
          Hủy
        </Button>
      </form>
    </Box>
  );
};

export default AddUser;
