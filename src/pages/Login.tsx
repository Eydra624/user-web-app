import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (role: "admin" | "super-admin") => {
    login(role);
    navigate("/dashboard");
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center gap-4">
      <h1 className="text-2xl font-bold">Login Page</h1>

      <button
        onClick={() => handleLogin("admin")}
        className="px-4 py-2 bg-blue-600 text-white rounded"
      >
        Login as Admin
      </button>

      <button
        onClick={() => handleLogin("super-admin")}
        className="px-4 py-2 bg-green-600 text-white rounded"
      >
        Login as Super Admin
      </button>
    </div>
  );
}
