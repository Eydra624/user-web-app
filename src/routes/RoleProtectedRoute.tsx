import { Navigate } from "react-router-dom"; 
import { useAuth } from "../context/AuthContext";
import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  allowedRoles: ("admin" | "super_admin")[];
}

export default function RoleProtectedRoute({ children, allowedRoles }: Props) {
  const { role } = useAuth();

  if (!role || !allowedRoles.includes(role)) {
    return <Navigate to="/dashboard" replace />;
  }

  return children;
}
