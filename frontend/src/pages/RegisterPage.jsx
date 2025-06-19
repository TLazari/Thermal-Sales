import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import Card from '../components/Card';
import { registerUser } from '../services/api';

export default function RegisterPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      await registerUser(email, password);
      navigate('/login');
    } catch (err) {
      setError('Erro ao registrar');
    }
  };

  return (
    <div className="flex justify-center items-center h-full">
      <Card>
        <h2 className="text-xl font-semibold text-center mb-4">Cadastro</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {error && <p className="text-red-600 text-sm text-center">{error}</p>}
          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border p-2 rounded"
            required
          />
          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border p-2 rounded"
            required
          />
          <div className="text-center">
            <Button type="submit">Registrar</Button>
          </div>
        </form>
        <p className="text-center text-sm mt-4">
          Já possui conta?{' '}
          <Link to="/login" className="text-blue-600 hover:underline">
            Fazer login
          </Link>
        </p>
      </Card>
    </div>
  );
}
