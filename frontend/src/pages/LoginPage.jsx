import Button from '../components/Button';
import Card from '../components/Card';

export default function LoginPage() {
  return (
    <div className="flex justify-center items-center h-full">
      <Card>
        <h2 className="text-xl font-semibold text-center mb-4">Login Page</h2>
        <div className="text-center">
          <Button>Entrar</Button>
        </div>
      </Card>
    </div>
  );
}
