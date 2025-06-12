import React from 'react'
import Login from './pages/Auth/Login';
import Home from './pages/Dashboard/Home';
import Income from './pages/Dashboard/Income';
import Expense from './pages/Dashboard/Expense';
import{
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

const App = () => {
  return (
    <div className='text-3xl text-black'>
      <Router>
        <Routes>
          <Route path='/' element={<Root />} />
          {/* <Route path= '/login' exact element={<Login />} />
          <Route path= '/signup' exact element={<Login />} /> */}
          <Route path= '/dashboard' exact element={<Home />} />
          <Route path= '/income' exact element={<Income />} />
          <Route path= '/expense' exact element={<Expense />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App

const Root = () => {
  // Check if token exists in localStorage
  const isAuthenticated = !!localStorage.getItem("token");

  // Redirect to dashboard if authenticated, otherwise to login
  return isAuthenticated ? (
    <Navigate to="/dashboard" />
  ) : (
    <Navigate to= "/login" />
  );
};

