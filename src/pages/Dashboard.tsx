import RoleGate from "../roles/RoleGate";

export default function Dashboard() {
  return (
    <RoleGate allowed={["admin", "super_admin"]}>
      <div className="p-8 text-center text-3xl">
        Dashboard Placeholder
      </div>
    </RoleGate>
  );
}
