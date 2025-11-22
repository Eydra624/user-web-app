import RoleGate from "../roles/RoleGate";

export default function Dashboard() {
  return (
    <RoleGate allowed={["ADMIN", "SUPER_ADMIN"]}>
      <div className="p-8 text-center text-3xl">
        Dashboard Placeholder
      </div>
    </RoleGate>
  );
}
