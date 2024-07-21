



import Navbar from './pages/client/component/Navbar';


// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminRoutes from './components/routes/AdminRoutes';
import ClientRoutes from './components/routes/ClientRoutes';
import { ChakraProvider } from '@chakra-ui/react';

const App = () => {
  return (
    <ChakraProvider>
      <Router>
        <Routes>
          <Route path="/admin/*" element={<AdminRoutes />} />
          <Route path="/*" element={<ClientRoutes />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
};

export default App;
