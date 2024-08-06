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
import { addProduct } from "../../../../service/api/products"; // Import the API function

const AddProduct = () => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [sell_price, setSellPrice] = useState("");
  const [status, setStatus] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null); // Ensure this is a File object
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const toast = useToast();

  const validateForm = () => {
    const newErrors = {};

    if (!name) newErrors.name = "Tên sản phẩm là bắt buộc.";
    if (!category) newErrors.category = "Loại sản phẩm là bắt buộc.";
    if (!price || isNaN(price))
      newErrors.price = "Giá là bắt buộc và phải là số.";
    if (!sell_price || isNaN(sell_price))
      newErrors.sell_price = "Số lượng là bắt buộc và phải là số.";
    if (!status) newErrors.status = "Trạng thái là bắt buộc.";
    if (!description) newErrors.description = "Mô tả là bắt buộc.";
    if (!image) newErrors.image = "Ảnh sản phẩm là bắt buộc.";

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
  
    const formData = new FormData();
    formData.append("name", name);
    formData.append("category", category);
    formData.append("price", price);
    formData.append("sell_price", sell_price);
    formData.append("description", description);
    formData.append("status", status);
  
    if (image) {
      formData.append("image", image);
    }
  
    try {
      await addProduct(formData);
      toast({
        title: "Product added.",
        description: "The product has been added successfully.",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
      navigate("/admin/products");
    } catch (error) {
      toast({
        title: "Error adding product.",
        description: error.message,
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleCancel = () => {
    navigate("/admin/products");
  };

  return (
    <Box p={5} bg="white" borderRadius="lg" boxShadow="md" fontFamily="math">
      <Heading mb={5}>Thêm sản phẩm</Heading>
      <form onSubmit={handleSubmit}>
        <FormControl id="name" mb={4} isInvalid={!!errors.name}>
          <FormLabel>Tên sản phẩm</FormLabel>
          <Input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {errors.name && <FormErrorMessage>{errors.name}</FormErrorMessage>}
        </FormControl>
        <FormControl id="category" mb={4} isInvalid={!!errors.category}>
          <FormLabel>Loại sản phẩm</FormLabel>
          <Input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
          {errors.category && (
            <FormErrorMessage>{errors.category}</FormErrorMessage>
          )}
        </FormControl>
        <FormControl id="price" mb={4} isInvalid={!!errors.price}>
          <FormLabel>Giá</FormLabel>
          <Input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          {errors.price && <FormErrorMessage>{errors.price}</FormErrorMessage>}
        </FormControl>
        <FormControl id="sell_price" mb={4} isInvalid={!!errors.sell_price}>
          <FormLabel>Giảm giá</FormLabel>
          <Input
            type="number"
            value={sell_price}
            onChange={(e) => setSellPrice(e.target.value)}
          />
          {errors.sell_price && (
            <FormErrorMessage>{errors.sell_price}</FormErrorMessage>
          )}
        </FormControl>
        <FormControl id="description" mb={4} isInvalid={!!errors.description}>
          <FormLabel>Mô tả</FormLabel>
          <Input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          {errors.description && (
            <FormErrorMessage>{errors.description}</FormErrorMessage>
          )}
        </FormControl>
        <FormControl id="status" mb={4} isInvalid={!!errors.status}>
          <FormLabel>Trạng thái</FormLabel>
          <Input
            type="text"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          />
          {errors.status && <FormErrorMessage>{errors.status}</FormErrorMessage>}
        </FormControl>
        <FormControl id="image" mb={4} isInvalid={!!errors.image}>
          <FormLabel>Ảnh sản phẩm</FormLabel>
          <Input type="file" accept="image/*" onChange={handleFileChange} />
          {errors.image && <FormErrorMessage>{errors.image}</FormErrorMessage>}
        </FormControl>

        <Button
          colorScheme="teal"
          type="submit"
          mr="10px"
        >
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
