import React from 'react';
import { Link } from 'react-router-dom';
interface UserLayoutProps {
  children: React.ReactNode;
}
const UserLayout: React.FC<UserLayoutProps> = ({ children }) => {
  return (
    <div>
      <header>
        <h1>Our Website</h1>
        <nav>
          <ul>
            <li><Link to="/">Trang chủ</Link></li>
            <li><Link to="/products">Sản phẩm</Link></li>
          </ul>
        </nav>
      </header>
      <main>
        {children}
      </main>
      <footer>
      </footer>
    </div>
  );
}
export default UserLayout;