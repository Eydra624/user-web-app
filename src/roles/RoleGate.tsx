import type { ReactNode } from "react";
import { useAuth } from "../context/AuthContext";

export default function RoleGate({
  allowed,
  children,
}: {
  allowed: ("admin" | "super_admin")[];
  children: ReactNode;
}) {
  const { role } = useAuth();

  if (!role) return <div className="p-8 text-center text-red-500">Access Denied</div>;
  if (!allowed.includes(role))
    return <div className="p-8 text-center text-red-500">You don't have permission</div>;

  return <>{children}</>;
}
