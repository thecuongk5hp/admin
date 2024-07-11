import React, { useState, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGoogle } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import './LoginForm.scss';
import { User } from '../../interfaces/UserInterface';
const LoginForm: React.FC = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [errorMessages, setErrorMessages] = useState({
    email: '',
    password: '',
    general: '',
  });
  const [rememberMe, setRememberMe] = useState(false);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
    setErrorMessages(prevState => ({
      ...prevState,
      [name]: '',
    }));
  };
  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData(prevState => ({
      ...prevState,
      email: e.target.value,
    }));
    setErrorMessages(prevState => ({
      ...prevState,
      email: '',
    }));
  };
  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData(prevState => ({
      ...prevState,
      password: e.target.value,
    }));
    setErrorMessages(prevState => ({
      ...prevState,
      password: '',
    }));
  };
  const handleRememberMeChange = (e: ChangeEvent<HTMLInputElement>) => {
    setRememberMe(e.target.checked);
  };
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      setErrorMessages({ ...errorMessages, general: 'Please fill in all required fields.' });
      return;
    }
    try {
      const response = await axios.get<User[]>(`http://localhost:8080/users?email=${formData.email}&password=${formData.password}`);
      if (response.data.length === 0) {
        setErrorMessages({ ...errorMessages, general: 'Invalid email or password. Please try again.' });
        return;
      }
      const user = response.data[0];
      if (user.role === 'admin' && user.status === 'active') {
        navigate('/admin');
      } else if (user.role === 'user' && user.status === 'active') {
        navigate('/');
      } else {
        setErrorMessages({ ...errorMessages, general: 'Your account is inactive. Please contact support.' });
      }
    } catch (error) {
      console.error('Error logging in:', error);
      setErrorMessages({ ...errorMessages, general: 'Failed to log in. Please check your credentials.' });
    }
  };
  return (
    <div className="container-fluid p-3 my-5 h-custom">
      <div className="row">
        <div className="col-md-6">
          <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" className="img-fluid" alt="Sample image" />
        </div>
        <div className="col-md-6">
          <div className="d-flex flex-row align-items-center justify-content-center">
            <p className="lead fw-normal mb-0 me-3">Đăng nhập bằng</p>
            <a className="btn btn-outline-primary btn-floating me-2" href="#!">
              <FaFacebookF />
            </a>
            <a className="btn btn-outline-primary btn-floating me-2" href="#!">
              <FaTwitter />
            </a>
            <a className="btn btn-outline-primary btn-floating me-2" href="#!">
              <FaLinkedinIn />
            </a>
          </div>
          <div className="divider d-flex align-items-center my-4">
            <p className="text-center fw-bold mx-3 mb-0">Hoặc</p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="form-label">Tài khoản Email</label>
              <input
                type="email"
                className="form-control form-control-lg"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleEmailChange}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="form-label">Mật khẩu đăng nhập</label>
              <input
                type="password"
                className="form-control form-control-lg"
                id="password"
                name="password"
                value={formData.password}
                onChange={handlePasswordChange}
                required
              />
            </div>
            <div className="d-flex justify-content-between mb-4">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="rememberMe"
                  checked={rememberMe}
                  onChange={handleRememberMeChange}
                />
                <label className="form-check-label" htmlFor="rememberMe">
                  Remember me
                </label>
              </div>
              <a href="#!">Quên mật khẩu?</a>
            </div>
            <div className="text-center text-md-start mt-4 pt-2">
              <Link to="/">
              <button type="submit" className="btn btn-primary px-5">Đăng nhập</button>
              </Link>
              <Link to="/register">
              <p className="small fw-bold mt-2 pt-1 mb-2">Bạn chưa có tài khoản? <a href="#!" className="text-danger">Đăng ký</a></p>
              </Link>
            </div>
          </form>
        </div>
      </div>
      <div className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary text-white">
        <div className="mb-3 mb-md-0">
          Bạn có thể đăng nhập bằng!
        </div>
        <div>
          <a className="btn btn-outline-light btn-floating mx-3" href="#!">
            <FaFacebookF />
          </a>
          <a className="btn btn-outline-light btn-floating mx-3" href="#!">
            <FaTwitter />
          </a>
          <a className="btn btn-outline-light btn-floating mx-3" href="#!">
            <FaGoogle />
          </a>
          <a className="btn btn-outline-light btn-floating mx-3" href="#!">
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
