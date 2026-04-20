import { Suspense, lazy } from 'react';

const DashboardRemote = lazy(() => import('dashboard_remote/DashboardApp'));

function DashboardPage() {
  return (
    <div style={{ padding: 24 }}>
      <h1>Dashboard</h1>

      <Suspense fallback={<div>Dashboard yükleniyor...</div>}>
        <DashboardRemote />
      </Suspense>
    </div>
  );
}

export default DashboardPage;