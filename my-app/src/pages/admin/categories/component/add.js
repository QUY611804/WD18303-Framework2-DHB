import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Heading,
  useToast,
  useColorModeValue,
  FormErrorMessage,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { addCategory } from "../../../../service/api/Category"; // Make sure to create this function in your service

const AddCategoryPage = () => {
  const [name, setName] = useState("");
  const [errors, setErrors] = useState({});
  const toast = useToast();
  const navigate = useNavigate();
  const bgColor = useColorModeValue("white", "gray.800");

  const validate = () => {
    const newErrors = {};
    if (!name) newErrors.name = "Tên thương hiệu là bắt buộc.";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const categoryData = { name };

    try {
      await addCategory(categoryData); // Call your API to add the category
      toast({
        title: "Category added.",
        description: "New category has been added successfully.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      navigate("/admin/Category"); // Redirect to the category list page
    } catch (error) {
      console.error("Failed to add category:", error);
      toast({
        title: "Error adding category.",
        description: "Failed to add the category.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <Box p={5} bg={bgColor} borderRadius="lg" boxShadow="md">
      <Heading mb={5}>Thêm danh mục mới</Heading>
      <form onSubmit={handleSubmit}>
        <FormControl id="name" mb={4} isInvalid={errors.name}>
          <FormLabel>Tên thương hiệu</FormLabel>
          <Input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Nhập tên thương hiệu"
          />
          {errors.name && <FormErrorMessage>{errors.name}</FormErrorMessage>}
        </FormControl>

        <Button colorScheme="teal" type="submit">
          Thêm
        </Button>
      </form>
    </Box>
  );
};

export default AddCategoryPage;