import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";

import ProtectedRoute from "./routes/ProtectedRoute";
import RoleProtectedRoute from "./routes/RoleProtectedRoute";

export default function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      {/* Normal authentication required */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />

      {/* Example admin-only protected route */}
      <Route
        path="/admin-only"
        element={
          <RoleProtectedRoute allowedRoles={["admin"]}>
            <div>Admin Exclusive Page</div>
          </RoleProtectedRoute>
        }
      />
    </Routes>
    </Router>
  );
}
