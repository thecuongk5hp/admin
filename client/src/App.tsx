import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/user/Home/Home';
import HomePage from './pages/user/HomePage/HomePage';
import LoginForm from './pages/login/LoginForm';
import HomeAdmin from './pages/admin/Home/HomeAdmin';
import Customer from './pages/admin/customer/Customer';
import RegisterPage from './pages/register/RegisterPage'; 
import AdminLogin from './pages/admin/loginadmin/AdminLogin';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    // <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<HomePage />} />
          </Route>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/admin" element={<HomeAdmin />}>
            <Route path="/admin/customers" element={<Customer />} />
          </Route>
            <Route path="/loginadmin" element={<AdminLogin />} />
        </Routes>
      </div>
    // </Router>
  );
}

export default App;
