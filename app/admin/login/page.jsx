"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function AdminLogin() {
  const router = useRouter();
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const correctPassword = process.env.NEXT_PUBLIC_ADMIN_PASSWORD;

    if (password === correctPassword) {
      localStorage.setItem("admin", "true");
      router.push("/admin");
    } else {
      alert("Hatalı şifre!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="p-10 border rounded bg-white shadow-lg space-y-4 w-full max-w-sm">
        <h1 className="text-xl font-bold text-center text-sky-600">
          Yönetici Girişi
        </h1>
        <input
          type="password"
          placeholder="Şifre"
          className="w-full border p-2 rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          onClick={handleLogin}
          className="bg-sky-600 text-white px-4 py-2 rounded w-full hover:bg-sky-700"
        >
          Giriş Yap
        </button>
      </div>
    </div>
  );
}
