import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 p-4">
        <Outlet />
      </main>
      <footer className="text-center py-4 text-sm text-gray-500">
        Thermal Sales &copy; 2025
      </footer>
    </div>
  );
}
