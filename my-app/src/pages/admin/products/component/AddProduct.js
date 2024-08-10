


import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  Select,
  useToast,
  FormErrorMessage,
} from "@chakra-ui/react";
import axios from "axios";
import { fetchCategories } from "../../../../service/api/Category";
import { addProduct } from "../../../../service/api/products";

const AddProduct = () => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [sellPrice, setSellPrice] = useState("");
  const [status, setStatus] = useState("");
  const [description, setDescription] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [categories, setCategories] = useState([]);
  const [errors, setErrors] = useState({});
  const toast = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    const getCategories = async () => {
      try {
        const categoriesData = await fetchCategories();
        if (categoriesData) {
          setCategories(categoriesData);
        }
      } catch (error) {
        toast({
          title: "Error fetching categories.",
          description: "Failed to fetch categories.",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
        console.error("Failed to fetch categories:", error);
      }
    };

    getCategories();
  }, [toast]);

  const validateForm = () => {
    const newErrors = {};

    if (!name) newErrors.name = "Tên sản phẩm là bắt buộc.";
    if (!category) newErrors.category = "Loại sản phẩm là bắt buộc.";
    if (!price || isNaN(price)) newErrors.price = "Giá là bắt buộc và phải là số.";
    if (!sellPrice || isNaN(sellPrice)) newErrors.sellPrice = "Giá bán là bắt buộc và phải là số.";
    if (!description) newErrors.description = "Mô tả là bắt buộc.";
    if (!status) newErrors.status = "Trạng thái là bắt buộc.";
    if (!imageFile) newErrors.image = "Ảnh sản phẩm là bắt buộc.";

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    } else {
      setErrors({});
    }

    const formData = new FormData();
    formData.append("file", imageFile);

    let imageUrl = "";

    try {
      const response = await axios.post(
        `http://localhost:3000/api/upload/products`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      imageUrl = response.data.filePath;
    } catch (error) {
      toast({
        title: "Image Upload Error",
        description: "Failed to upload image.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      return;
    }

    const productData = {
      name,
      price,
      sell_price: sellPrice,
      description,
      image: imageUrl,
      status,
      category_id: category,
    };

    try {
      await addProduct(productData);
      toast({
        title: "Product added.",
        description: "Product has been added successfully.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      navigate("/admin/products");
    } catch (error) {
      console.error("Add product error:", error);
      toast({
        title: "Error adding product.",
        description: error.message,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  const handleImageChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  return (
    <Box p={5} bg="white" borderRadius="lg" boxShadow="md" fontFamily="math">
      <form onSubmit={handleSubmit}>
        <FormControl id="name" mb={4} isInvalid={errors.name}>
          <FormLabel>Tên sản phẩm</FormLabel>
          <Input value={name} onChange={(e) => setName(e.target.value)} />
          {errors.name && <FormErrorMessage>{errors.name}</FormErrorMessage>}
        </FormControl>
        <FormControl id="category" mb={4} isInvalid={errors.category}>
          <FormLabel>Loại sản phẩm</FormLabel>
          <Select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="">Chọn loại sản phẩm</option>
            {categories.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.name}
              </option>
            ))}
          </Select>
          {errors.category && <FormErrorMessage>{errors.category}</FormErrorMessage>}
        </FormControl>
        <FormControl id="price" mb={4} isInvalid={errors.price}>
          <FormLabel>Giá</FormLabel>
          <Input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          {errors.price && <FormErrorMessage>{errors.price}</FormErrorMessage>}
        </FormControl>
        <FormControl id="sell_price" mb={4} isInvalid={errors.sellPrice}>
          <FormLabel>Giá bán</FormLabel>
          <Input
            type="number"
            value={sellPrice}
            onChange={(e) => setSellPrice(e.target.value)}
          />
          {errors.sellPrice && <FormErrorMessage>{errors.sellPrice}</FormErrorMessage>}
        </FormControl>
        <FormControl id="description" mb={4} isInvalid={errors.description}>
          <FormLabel>Mô tả</FormLabel>
          <Input
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          {errors.description && <FormErrorMessage>{errors.description}</FormErrorMessage>}
        </FormControl>
        <FormControl id="status" mb={4} isInvalid={errors.status}>
          <FormLabel>Trạng thái</FormLabel>
          <Input value={status} onChange={(e) => setStatus(e.target.value)} />
          {errors.status && <FormErrorMessage>{errors.status}</FormErrorMessage>}
        </FormControl>
        <FormControl id="image" mb={4} isInvalid={errors.image}>
          <FormLabel>Ảnh sản phẩm</FormLabel>
          <Input type="file" onChange={handleImageChange} />
          {errors.image && <FormErrorMessage>{errors.image}</FormErrorMessage>}
        </FormControl>
        <Button type="submit" colorScheme="blue">
          Thêm sản phẩm
        </Button>
      </form>
    </Box>
  );
};

export default AddProduct;
