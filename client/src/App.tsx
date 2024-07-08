import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/login/LoginForm';
import Admin from './pages/admin/Admin';
import PrivateRoute from './pages/admin/PrivateRoute';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/admin/*" element={<PrivateRoute />}>
          <Route path="" element={<Admin />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
