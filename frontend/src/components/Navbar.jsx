import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4 flex space-x-4">
      <Link to="/dashboard" className="hover:underline">Dashboard</Link>
      <Link to="/login" className="hover:underline">Login</Link>
    </nav>
  );
}
