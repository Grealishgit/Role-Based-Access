import { loginUser } from '@/api';
import { useAuth } from '@/context/AuthContext';
import { createFileRoute, useNavigate } from '@tanstack/react-router';
import { useState } from 'react';

export const Route = createFileRoute('/_auth/login')({
  component: RouteComponent,
});

function RouteComponent() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login: authLogin } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!username || !password) {
      alert("Please fill in all fields");
      return;
    }

    const user = await loginUser(username, password);
    if (user) {
      authLogin(user); // This will store in context (and in localStorage if your AuthProvider handles it)
      console.log("User logged in:", user);
      navigate({ to: "/dashboard" });
    } else {
      alert("Invalid username or password");
      setUsername("");
      setPassword("");
    }
  };

  return (
    <div className="flex flex-col items-center bg-gray-200 justify-center h-screen">
      <form
        onSubmit={handleSubmit}
        className="flex border w-sm p-8 border-gray-500 bg-white rounded-lg flex-col space-y-4"
      >
        <h1 className="text-2xl text-center font-bold mb-4">Login</h1>
        <label>Your Username</label>
        <input
          type="text"
          required
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border border-gray-300 pl-3 py-1.5 w-full rounded"
        />
        <label>Your Password</label>
        <input
          type="password"
          required
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border border-gray-300 pl-3 py-1.5 w-full rounded"
        />
        <button
          type="submit"
          className="bg-orange-500 cursor-pointer text-white p-2 rounded"
        >
          Login
        </button>
      </form>
    </div>
  );
}
