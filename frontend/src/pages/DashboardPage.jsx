import { useEffect, useState } from 'react';
import Card from '../components/Card';
import StatsCard from '../components/StatsCard';
import { getHealth, getKpis } from '../services/api';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from 'recharts';

export default function DashboardPage() {
  const [health, setHealth] = useState(null);
  const [kpis, setKpis] = useState(null);

  useEffect(() => {
    getHealth().then(setHealth).catch(() => setHealth({ status: 'erro' }));
    getKpis().then(setKpis).catch(() => setKpis(null));
  }, []);

  const avgTimeData =
    kpis &&
    Object.entries(kpis.avg_time_per_zone).map(([name, value]) => ({ name, value }));
  const conversionData =
    kpis &&
    Object.entries(kpis.conversion_rate).map(([name, value]) => ({ name, value: value * 100 }));

  const overallAvgTime =
    kpis &&
    (
      Object.values(kpis.avg_time_per_zone).reduce((a, b) => a + b, 0) /
      Object.keys(kpis.avg_time_per_zone).length
    );
  const overallConversion =
    kpis &&
    (
      Object.values(kpis.conversion_rate).reduce((a, b) => a + b, 0) /
      Object.keys(kpis.conversion_rate).length
    );

  return (
    <div className="p-4 space-y-4">
      <h2 className="text-xl font-semibold text-center">Dashboard</h2>
      {health && (
        <p className="text-center text-sm text-gray-700">Status da API: {health.status}</p>
      )}
      {kpis && (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <StatsCard title="Total de visitantes" value={kpis.total_visitors} />
            <StatsCard
              title="Tempo médio (min)"
              value={overallAvgTime.toFixed(1)}
            />
            <StatsCard
              title="Taxa de conversão (%)"
              value={(overallConversion * 100).toFixed(1)}
            />
          </div>
          <Card>
            <h3 className="font-medium mb-2">Tempo médio por zona</h3>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={avgTimeData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#3182ce" />
              </BarChart>
            </ResponsiveContainer>
          </Card>
          <Card>
            <h3 className="font-medium mb-2">Taxa de conversão por zona (%)</h3>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={conversionData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#38a169" />
              </BarChart>
            </ResponsiveContainer>
          </Card>
        </>
      )}
    </div>
  );
}
