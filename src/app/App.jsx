import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "../ui/Layout";
import LeadsPage from "../modules/leads/LeadsPage";
import CallLogsPage from "../modules/calls/CallLogsPage";

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate to="/leads" />} />
        <Route path="/leads" element={<LeadsPage />} />
        <Route path="/calls" element={<CallLogsPage />} />
      </Routes>
    </Layout>
  );
}
