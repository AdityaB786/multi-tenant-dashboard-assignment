Multi-Tenant Sales Dashboard (Frontend)
Overview

This project is a frontend-only React application that simulates a multi-tenant SaaS sales dashboard.
It demonstrates tenant isolation, role-based access control (RBAC), modular architecture, and frontend scalability practices.
No backend is implemented; all data and authentication are mocked.

Tech Stack

React 18

Vite

React Router v6

Context API (state management)

JavaScript (ES6+)

Features
Multi-Tenancy

Two tenants: Organization A (orgA) and Organization B (orgB)

User belongs to one tenant at a time

Switching tenant updates all visible data instantly

Data is fully isolated per tenant

Role-Based Access Control

Admin

Full access

Can edit lead status (UI-level permission)

Agent

Read-only access

Role permissions apply only within the active tenant

Core Modules

Leads Module

List leads (name, phone, status)

Filter leads by status

Tenant-specific data

Call Logs Module

List calls (lead, time, duration, outcome)

Tenant-specific data

Project Structure
src/
├─ app/                 # App shell & routing
│  └─ App.jsx
│
├─ auth/                # Authentication & RBAC
│  └─ AuthContext.jsx
│
├─ tenant/              # Tenant management
│  └─ TenantContext.jsx
│
├─ modules/             # Business modules
│  ├─ leads/
│  │  └─ Leads.jsx
│  └─ calls/
│     └─ Calls.jsx
│
├─ ui/                  # Shared UI components
│  └─ Layout.jsx
│
├─ data/                # Mock tenant data
│  └─ mockData.js
│
└─ main.jsx             # Application entry point
Why this structure?

Clear separation of concerns

Modules are tenant-agnostic and reusable

Easy to scale with new tenants, roles, or features

Mirrors real-world SaaS frontend architecture

Tenancy Approach

Active tenant is stored in TenantContext

All modules consume tenant context to fetch data

Mock data is keyed by tenant ID (orgA, orgB)

Switching tenant triggers reactive UI updates without reload

Authentication & RBAC

Authentication is mocked using AuthContext

User role (admin or agent) controls UI-level permissions

RBAC logic is enforced inside components, not routes

Frontend Optimization Notes

Implemented:

Context split (Auth vs Tenant) to avoid unnecessary re-renders

Stateless, reusable modules

Minimal shared state

Planned / Explained:

Route-level code splitting using React.lazy

Memoization (useMemo, React.memo) for large lists

Table virtualization for large datasets

Easy migration to Redux or Zustand if complexity grows

Running the Project
Install dependencies
npm install
Start development server
npm run dev

Open the URL printed in terminal (usually http://localhost:5173).

⚠️ Important:
Do NOT use VS Code Live Server. This project must be run using Vite.

Notes for Evaluation

No backend is required or implemented

Focus is on structure, scalability, tenancy, and RBAC

UI is intentionally minimal but functional

Code prioritizes clarity over feature completeness

Future Improvements

Backend integration

Persistent authentication

Fine-grained permission guards

Analytics and reporting modules

TypeScript migration
