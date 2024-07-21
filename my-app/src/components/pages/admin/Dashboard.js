import React from 'react';
import { Flex } from '@chakra-ui/react';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';

const Dashboard = () => {
  return (
    <Flex>
      <Sidebar />
      <Flex
        ml={{ base: 0, md: '250px' }}
        direction="column"
        p={4}
        flex="1"
      >
        <Navbar />
        <Flex direction="column" p={4}>
          <h1>Dashboard</h1>
          {/* Nội dung của Dashboard */}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Dashboard;
