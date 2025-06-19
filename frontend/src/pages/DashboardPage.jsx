import { useEffect, useState } from 'react';
import Card from '../components/Card';
import { getHealth, getKpis } from '../services/api';

export default function DashboardPage() {
  const [health, setHealth] = useState(null);
  const [kpis, setKpis] = useState(null);

  useEffect(() => {
    getHealth().then(setHealth).catch(() => setHealth({ status: 'erro' }));
    getKpis().then(setKpis).catch(() => setKpis(null));
  }, []);

  return (
    <div className="p-4 space-y-4">
      <Card>
        <h2 className="text-xl font-semibold text-center mb-2">Dashboard</h2>
        {health && (
          <p className="text-center text-sm text-gray-700 mb-4">
            Status da API: {health.status}
          </p>
        )}
        {kpis && (
          <div className="space-y-2 text-sm text-gray-800">
            <p>Total de visitantes: {kpis.total_visitors}</p>
            <div>
              <p className="font-medium">Tempo médio por zona:</p>
              <ul className="list-disc list-inside">
                {Object.entries(kpis.avg_time_per_zone).map(([zone, time]) => (
                  <li key={zone}>
                    {zone}: {time} min
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-medium">Taxa de conversão por zona:</p>
              <ul className="list-disc list-inside">
                {Object.entries(kpis.conversion_rate).map(([zone, rate]) => (
                  <li key={zone}>
                    {zone}: {(rate * 100).toFixed(1)}%
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </Card>
    </div>
  );
}
