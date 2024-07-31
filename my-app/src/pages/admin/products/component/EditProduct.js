import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  Select,
  useToast,
  Heading,
} from "@chakra-ui/react";

const EditProduct = () => {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [image, setImage] = useState("");
  const navigate = useNavigate();
  const toast = useToast();

  useEffect(() => {
    // Fetch product data based on `id` (e.g., from API)
    // Here is a mock example:
    const fetchProduct = async () => {
      // Simulate API call
      const product = {
        id,
        name: "Sample Product",
        category: "Category 1",
        price: "$20",
        quantity: "2000",
        image: "https://bit.ly/broken-link",
      };
      setName(product.name);
      setCategory(product.category);
      setPrice(product.price);
      setQuantity(product.quantity);
      setImage(product.image);
    };
    fetchProduct();
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to update the product (e.g., API call)

    // Simulate a successful update with a toast notification
    toast({
      title: "Product updated.",
      description: "The product has been updated successfully.",
      status: "success",
      duration: 9000,
      isClosable: true,
    });

    // Redirect to the products list or other desired location
    navigate("/admin/products");
  };

  return (
    <Box p={5} bg="white" borderRadius="lg" boxShadow="md" fontFamily="math">
      <Heading mb={5}>Sửa thông tin</Heading>
      <form onSubmit={handleSubmit}>
        <FormControl id="name" mb={4}>
          <FormLabel>Tên sản phẩm </FormLabel>
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
        <FormControl id="stock" mb={4}>
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
          Đồng ý
        </Button>
      </form>
    </Box>
  );
};

export default EditProduct;
