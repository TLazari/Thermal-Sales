export default function Sidebar({ children }) {
  return (
    <aside className="w-64 bg-gray-100 p-4">{children || 'Sidebar'}</aside>
  );
}
