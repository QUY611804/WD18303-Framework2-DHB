import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminRoutes from './routes/AdminRoutes';
import ClientRoutes from './routes/ClientRoutes';
import SignIn from './pages/auth/Signin';
import PrivateRoute from './components/PrivateRoute';
import { AuthProvider } from './contexts/AuthContext';


const App = () => {
  return (
    <AuthProvider>
    <Router>
      <Routes>
        <Route path="/login" element={<SignIn />} />
        <Route path="/admin/*" element={<PrivateRoute element={<AdminRoutes />} />} />
        <Route path="/*" element={<ClientRoutes />} />
      </Routes>
    </Router>
  </AuthProvider>
  );
};

export default App;
