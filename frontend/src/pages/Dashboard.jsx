// pages/Dashboard.jsx
import { useAuthStore } from "../store/useAuthStore";

export default function Dashboard() {
  const { user, logout } = useAuthStore();

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <div className="bg-white shadow-lg rounded-2xl p-8 text-center">
        <h1 className="text-2xl font-bold mb-2">Dashboard</h1>
        <p className="text-gray-600 mb-4">Welcome, {user?.email}</p>

        <button
          onClick={logout}
          className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
