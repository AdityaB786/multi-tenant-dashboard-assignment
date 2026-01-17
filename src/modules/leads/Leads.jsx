import { useState } from "react";
import { leads } from "../../data/mockData";
import { useTenant } from "../../tenant/TenantContext";
import { useAuth } from "../../auth/AuthContext";

export default function LeadsPage() {
  const { tenant } = useTenant();
  const { user } = useAuth();
  const [filter, setFilter] = useState("All");

  const data = leads[tenant].filter(lead =>
    filter === "All" ? true : lead.status === filter
  );

  return (
    <div>
      <h2>Leads</h2>

      <select onChange={e => setFilter(e.target.value)}>
        <option>All</option>
        <option>New</option>
        <option>Contacted</option>
      </select>

      {data.length === 0 && <p>No leads</p>}

      <ul>
        {data.map(l => (
          <li key={l.id}>
            {l.name} | {l.phone} | {l.status}
            {user.role === "admin" && <button>Edit</button>}
          </li>
        ))}
      </ul>
    </div>
  );
}
