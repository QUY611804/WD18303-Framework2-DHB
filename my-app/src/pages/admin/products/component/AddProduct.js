import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  Textarea,
  Select,
  useToast,
  Heading,
} from "@chakra-ui/react";

const AddProduct = () => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [image, setImage] = useState("");
  const navigate = useNavigate();
  const toast = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to save the product (e.g., API call)

    // Simulate a successful save with a toast notification
    toast({
      title: "Product added.",
      description: "The product has been added successfully.",
      status: "success",
      duration: 9000,
      isClosable: true,
    });

    // Redirect to the products list or other desired location
    navigate("/admin/products");
  };

  return (
    <Box p={5} bg="white" borderRadius="lg" boxShadow="md" fontFamily="math">
      <Heading mb={5}>Thêm sẩn phẩm</Heading>
      <form onSubmit={handleSubmit}>
        <FormControl id="name" mb={4}>
          <FormLabel>Tên sản phẩm</FormLabel>
          <Input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </FormControl>
        <FormControl id="category" mb={4}>
          <FormLabel>Loại sản phẩm</FormLabel>
          <Input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          />
        </FormControl>
        <FormControl id="price" mb={4}>
          <FormLabel>Giá</FormLabel>
          <Input
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </FormControl>
        <FormControl id="quantity" mb={4}>
          <FormLabel>Số lượng</FormLabel>
          <Input
            type="text"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            required
          />
        </FormControl>
        <FormControl id="image" mb={4}>
          <FormLabel>Ảnh sản phẩm</FormLabel>
          <Input
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            required
          />
        </FormControl>
        <Button colorScheme="teal" type="submit">
         Thêm
        </Button>
      </form>
    </Box>
  );
};

export default AddProduct;
