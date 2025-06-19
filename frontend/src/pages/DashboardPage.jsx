import { useEffect, useState } from 'react';
import Card from '../components/Card';
import { getHealth } from '../services/api';

export default function DashboardPage() {
  const [health, setHealth] = useState(null);

  useEffect(() => {
    getHealth().then(setHealth).catch(() => setHealth({ status: 'erro' }));
  }, []);

  return (
    <div className="p-4 space-y-4">
      <Card>
        <h2 className="text-xl font-semibold text-center mb-2">Dashboard</h2>
        {health && (
          <p className="text-center text-sm text-gray-700">
            Status da API: {health.status}
          </p>
        )}
      </Card>
    </div>
  );
}
