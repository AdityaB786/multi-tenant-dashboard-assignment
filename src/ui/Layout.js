import { Link } from "react-router-dom";
import { useTenant } from "../tenant/TenantContext";
import { useAuth } from "../auth/AuthContext";

export default function Layout({ children }) {
  const { tenant, setTenant } = useTenant();
  const { user } = useAuth();

  return (
    <div>
      <header>
        <h3>Tenant: {tenant} | Role: {user.role}</h3>

        <button onClick={() => setTenant(tenant === "orgA" ? "orgB" : "orgA")}>
          Switch Tenant
        </button>

        <nav>
          <Link to="/leads">Leads</Link> |{" "}
          <Link to="/calls">Calls</Link>
        </nav>
      </header>

      <main>{children}</main>
    </div>
  );
}
