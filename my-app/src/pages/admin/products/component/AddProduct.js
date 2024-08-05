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
} from "@chakra-ui/react";

const AddProduct = () => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [image, setImage] = useState(null);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const toast = useToast();

  const validateForm = () => {
    const newErrors = {};

    if (!name) newErrors.name = "Tên sản phẩm là bắt buộc.";
    if (!category) newErrors.category = "Loại sản phẩm là bắt buộc.";
    if (!price || isNaN(price)) newErrors.price = "Giá là bắt buộc và phải là số.";
    if (!quantity || isNaN(quantity)) newErrors.quantity = "Số lượng là bắt buộc và phải là số.";
    if (!image) newErrors.image = "Ảnh sản phẩm là bắt buộc.";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setErrors({});

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
    }
  };

  const handleCancel = () => {
    navigate("/admin/products");
  };

  return (
    <Box p={5} bg="white" borderRadius="lg" boxShadow="md" fontFamily="math">
      <Heading mb={5}>Thêm thông tin</Heading>
      <form onSubmit={handleSubmit}>
        <FormControl id="name" mb={4} isInvalid={errors.name}>
          <FormLabel>Tên sản phẩm</FormLabel>
          <Input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {errors.name && <FormErrorMessage>{errors.name}</FormErrorMessage>}
        </FormControl>
        <FormControl id="category" mb={4} isInvalid={errors.category}>
          <FormLabel>Loại sản phẩm</FormLabel>
          <Input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
          {errors.category && <FormErrorMessage>{errors.category}</FormErrorMessage>}
        </FormControl>
        <FormControl id="price" mb={4} isInvalid={errors.price}>
          <FormLabel>Giá</FormLabel>
          <Input
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          {errors.price && <FormErrorMessage>{errors.price}</FormErrorMessage>}
        </FormControl>
        <FormControl id="quantity" mb={4} isInvalid={errors.quantity}>
          <FormLabel>Số lượng</FormLabel>
          <Input
            type="text"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
          {errors.quantity && <FormErrorMessage>{errors.quantity}</FormErrorMessage>}
        </FormControl>
        <FormControl id="image" mb={4} isInvalid={errors.image}>
          <FormLabel>Ảnh sản phẩm</FormLabel>
          <Input
            type="file"
            onChange={(e) => setImage(e.target.files[0])}
          />
          {errors.image && <FormErrorMessage>{errors.image}</FormErrorMessage>}
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

export default AddProduct;
