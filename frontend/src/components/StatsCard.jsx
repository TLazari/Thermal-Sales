export default function StatsCard({ title, value }) {
  return (
    <div className="bg-white shadow rounded p-4 text-center">
      <p className="text-sm text-gray-500">{title}</p>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  );
}
