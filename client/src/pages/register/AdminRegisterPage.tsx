import React, { useState, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { User } from '../../interfaces/UserInterface';
import { RegisterFormData } from '../../interfaces/RegisterFormData';

const AdminRegisterPage: React.FC = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState<RegisterFormData>({
    username: '',
    email: '',
    fullname: '',
    password: '',
  });

  const [errorMessages, setErrorMessages] = useState({
    username: '',
    email: '',
    fullname: '',
    password: '',
    general: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrorMessages({ ...errorMessages, [name]: '' });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.username || !formData.email || !formData.fullname || !formData.password) {
      setErrorMessages({ ...errorMessages, general: 'Please fill in all required fields.' });
      return;
    }

    try {
      const existingUser = await axios.get(`http://localhost:8080/users?username=${formData.username}`);
      if (existingUser.data.length > 0) {
        setErrorMessages({ ...errorMessages, username: 'Username already exists. Please choose another one.' });
        return;
      }

      const newUser: Omit<User, 'id'> = {
        ...formData,
        status: 'active',
        role: 'admin',
        avatar: '',
        phone: '',
        address: '',
        created_at: new Date().toLocaleDateString('vi-VN'),
        updated_at: new Date().toLocaleDateString('vi-VN'),
      };

      const response = await axios.post('http://localhost:8080/users', newUser);
      console.log('Admin registered successfully:', response.data);
      navigate('/admin/dashboard');
    } catch (error) {
      console.error('Error registering admin:', error);
      setErrorMessages({ ...errorMessages, general: 'Failed to register. Please try again later.' });
    }
  };

  return (
    <div className="container p-3 my-5 d-flex flex-column w-50">
      <h2>Admin Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">Username</label>
          <input type="text" className="form-control" id="username" name="username" value={formData.username} onChange={handleChange} />
          {errorMessages.username && <div className="text-danger">{errorMessages.username}</div>}
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} />
          {errorMessages.email && <div className="text-danger">{errorMessages.email}</div>}
        </div>
        <div className="mb-3">
          <label htmlFor="fullname" className="form-label">Full Name</label>
          <input type="text" className="form-control" id="fullname" name="fullname" value={formData.fullname} onChange={handleChange} />
          {errorMessages.fullname && <div className="text-danger">{errorMessages.fullname}</div>}
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-control" id="password" name="password" value={formData.password} onChange={handleChange} />
          {errorMessages.password && <div className="text-danger">{errorMessages.password}</div>}
        </div>
        {errorMessages.general && <div className="text-danger mb-3">{errorMessages.general}</div>}
        <button type="submit" className="btn btn-primary">Register</button>
      </form>
    </div>
  );
}

export default AdminRegisterPage;
