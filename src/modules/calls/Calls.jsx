import { calls } from "../../data/mockData";
import { useTenant } from "../../tenant/TenantContext";

export default function CallLogsPage() {
  const { tenant } = useTenant();
  const data = calls[tenant];

  return (
    <div>
      <h2>Call Logs</h2>

      {data.length === 0 && <p>No calls</p>}

      <ul>
        {data.map(c => (
          <li key={c.id}>
            {c.lead} | {c.time} | {c.duration} | {c.outcome}
          </li>
        ))}
      </ul>
    </div>
  );
}
