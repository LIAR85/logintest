"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function DashboardPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn) {
      setIsAuthenticated(true);
    } else {
      router.push("/login");
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    router.push("/login");
  };

  if (!isAuthenticated) {
    return null; // El layout se encargará de redirigir si no está autenticado
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <p className="mb-4">
        Bienvenido al dashboard. Aquí puedes ver tu contenido.
      </p>
      <Button onClick={handleLogout}>Cerrar sesión</Button>
    </div>
  );
}
