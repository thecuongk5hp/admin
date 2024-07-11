import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/user/Home/Home';
import HomePage from './pages/user/HomePage/HomePage';
import LoginForm from './pages/login/LoginForm';
import HomeAdmin from './pages/admin/Home/HomeAdmin';
import Customer from './pages/admin/customer/Customer';
import RegisterPage from './pages/register/RegisterPage'; 
import AdminRegisterPage from './pages/register/AdminRegisterPage';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<HomePage />} />
          </Route>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/admin" element={<HomeAdmin />}>
            <Route path="customers" element={<Customer />} />
            <Route path="register" element={<AdminRegisterPage />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
