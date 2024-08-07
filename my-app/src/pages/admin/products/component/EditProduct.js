import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  Select,
  useToast,
} from "@chakra-ui/react";
import {
  fetchProductById,
  updateProduct,
} from "../../../../service/api/products"; 
import { fetchCategories } from "../../../../service/api/Category";
import axios from "axios";

const EditProduct = () => {
  const [product, setProduct] = useState(null);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [sell_price, setSellPrice] = useState("");
  const [status, setStatus] = useState("");
  const [image, setImage] = useState("");
  const [imageFile, setImageFile] = useState(null); 
  const [categories, setCategories] = useState([]);
  const [description, setDescription] = useState("");
  const toast = useToast();
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const getProduct = async () => {
      try {
        const data = await fetchProductById(id);
        if (data) {
          setProduct(data);
          setName(data.name || "");
          setCategory(data.category_id || "");
          setPrice(data.price || "");
          setSellPrice(data.sell_price || "");
          setDescription(data.description || "");
          setStatus(data.status || "");
          setImage(data.image || "");
        }
      } catch (error) {
        toast({
          title: "Error fetching product.",
          description: "Failed to fetch product details.",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
        console.error("Failed to fetch product:", error);
      }
    };

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

    getProduct();
    getCategories();
  }, [id, toast]);

  const validateForm = () => {
    const newErrors = {};

    if (!name) newErrors.name = "Tên sản phẩm là bắt buộc.";
    if (!category) newErrors.category = "Loại sản phẩm là bắt buộc.";
    if (!price || isNaN(price))
      newErrors.price = "Giá là bắt buộc và phải là số.";
    if (!sell_price || isNaN(sell_price))
      newErrors.sell_price = "Giá bán là bắt buộc và phải là số.";
    if (!image) newErrors.image = "Ảnh sản phẩm là bắt buộc.";

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!category) {
      toast({
        title: "Validation Error",
        description: "Please select a category.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      return;
    }
  
    let imageUrl = image;
  
    if (imageFile) {
      const formData = new FormData();
      formData.append("file", imageFile);
  
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
    }
  
    // Now update the product with the productData object
    try {
      const productData = { name, price, sell_price, description, image: imageUrl, status, category_id: category };
      await updateProduct(id, productData);
      toast({
        title: "Product updated.",
        description: "Product details have been updated successfully.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      navigate("/admin/products");
    } catch (error) {
      console.error("Update error:", error);
      toast({
        title: "Error updating product.",
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

  
  if (!product) return <p>Loading...</p>;

  return (
    <Box p={5} bg="white" borderRadius="lg" boxShadow="md" fontFamily="math">
      <form onSubmit={handleSubmit}>
        <FormControl mb={4}>
          <FormLabel>Tên sản phẩm</FormLabel>
          <Input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Tên sản phẩm"
            required
          />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>Loại sản phẩm</FormLabel>
          <Select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">Chọn loại sản phẩm</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </Select>
          {errors.category && (
            <FormErrorMessage>{errors.category}</FormErrorMessage>
          )}
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>Giá</FormLabel>
          <Input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Giá"
            required
          />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>Giảm giá</FormLabel>
          <Input
            type="number"
            value={sell_price}
            onChange={(e) => setSellPrice(e.target.value)}
            placeholder="Giảm giá"
            required
          />
          {errors.sell_price && (
            <FormErrorMessage>{errors.sell_price}</FormErrorMessage>
          )}
        </FormControl>
        <FormControl id="description" mb={4} isInvalid={errors.description}>
          <FormLabel>Mô tả</FormLabel>
          <Input
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          {errors.description && (
            <FormErrorMessage>{errors.description}</FormErrorMessage>
          )}
        </FormControl>
        <FormControl id="status" mb={4} isInvalid={errors.status}>
          <FormLabel>Trạng thái</FormLabel>
          <Input value={status} onChange={(e) => setStatus(e.target.value)} />
          {errors.status && (
            <FormErrorMessage>{errors.status}</FormErrorMessage>
          )}
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>Hình ảnh</FormLabel>
          <Input type="file" onChange={handleImageChange} />
        </FormControl>
        <Button type="submit" colorScheme="blue">
          Cập nhật sản phẩm
        </Button>
      </form>
    </Box>
  );
};

export default EditProduct;
