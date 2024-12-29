import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-8">
        Bienvenido a nuestra aplicación
      </h1>
      <div className="space-x-4">
        <Button asChild>
          <Link href="/login">Iniciar sesión</Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/dashboard">Ver Dashboard</Link>
        </Button>
      </div>
    </div>
  );
}
