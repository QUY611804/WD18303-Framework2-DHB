// src/pages/SignIn.js
import React from "react";
import {
  Box,
  Flex,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,

  useColorModeValue,
} from "@chakra-ui/react";
import { useAuth } from "../../contexts/AuthContext";
import { NavLink } from "react-router-dom";

function SignIn() {
  const titleColor = useColorModeValue("teal.300", "teal.200");
  const { login } = useAuth();

  const handleSignIn = () => {
    // Add actual authentication logic here
    login();
  };

  return (
    <Flex position="relative" mb="40px">
      <Flex
        h={{ sm: "initial", md: "75vh", lg: "85vh" }}
        w="100%"
        maxW="1044px"
        mx="auto"
        justifyContent="center"
        mb="30px"
        pt={{ sm: "100px", md: "0px" }}
      >
        <Flex
          alignItems="center"
          justifyContent="start"
          style={{ userSelect: "none" }}
          w={{ base: "100%", md: "50%", lg: "42%" }}
        >
          <Flex
            direction="column"
            w="100%"
            background="transparent"
            p="48px"
            mt={{ md: "150px", lg: "80px" }}
          >
            <Heading
              color={titleColor}
              fontSize="32px"
              mb="10px"
              fontFamily="math"
              display="flex;"
              justifyContent="center"
            >
              Đăng nhập
            </Heading>

            <FormControl>
              <FormLabel
                ms="4px"
                fontSize="sm"
                fontWeight="normal"
                fontFamily="math"
              >
                Email
              </FormLabel>
              <Input
                borderRadius="15px"
                mb="24px"
                fontSize="sm"
                type="text"
                placeholder="Your email address"
                size="lg"
              />
              <FormLabel
                ms="4px"
                fontSize="sm"
                fontWeight="normal"
                fontFamily="math"
              >
                Password
              </FormLabel>
              <Input
                borderRadius="15px"
                mb="36px"
                fontSize="sm"
                type="password"
                placeholder="Your password"
                size="lg"
              />
              <NavLink to="/admin">
                <Button
                  fontFamily="math"
                  fontSize="19px"
                  type="button"
                  bg="teal.300"
                  w="100%"
                  h="45"
                  mb="20px"
                  color="white"
                  mt="20px"
                  onClick={handleSignIn}
                  _hover={{
                    bg: "teal.200",
                  }}
                  _active={{
                    bg: "teal.400",
                  }}
                >
                  SIGN IN
                </Button>
              </NavLink>
            </FormControl>
          </Flex>
        </Flex>
        <Box
          display={{ base: "none", md: "block" }}
          overflowX="hidden"
          h="100%"
          w="40vw"
          position="absolute"
          right="0px"
        ></Box>
      </Flex>
    </Flex>
  );
}

export default SignIn;
