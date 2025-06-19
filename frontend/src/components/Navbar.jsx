import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export default function Navbar() {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="bg-gray-800 text-white p-4 flex space-x-4">
      <Link to="/dashboard" className="hover:underline">Dashboard</Link>
      {isAuthenticated ? (
        <button onClick={handleLogout} className="hover:underline">Sair</button>
      ) : (
        <>
          <Link to="/login" className="hover:underline">Login</Link>
          <Link to="/register" className="hover:underline">Cadastrar</Link>
        </>
      )}
    </nav>
  );
}
