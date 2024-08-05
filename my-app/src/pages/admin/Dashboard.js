import React from 'react';
import { Box, Flex, SimpleGrid, Text } from '@chakra-ui/react';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';


const Dashboard = () => {
  return (
    <Flex direction="column" height="100vh" bg="#f7fafc" fontFamily="math">
      <Flex>
        <Sidebar />
        <Flex
          ml={{ base: 0, md: "250px" }}
          direction="column"
          flex="1"
          p={4}
          bg="#f7fafc"
        >
          <Navbar />
          <Flex direction="column" p={4} mt="60px">
            <h1 fontFamily="math">Tổng kết</h1>
          </Flex>
        </Flex>
        
      </Flex>
     
    </Flex>

  );
};
export default Dashboard;
