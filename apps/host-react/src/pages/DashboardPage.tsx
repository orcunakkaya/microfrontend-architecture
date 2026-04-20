import { Suspense, lazy } from 'react';

const DashboardRemote = lazy(() => import('dashboard_remote/DashboardApp'));

function DashboardLoading() {
  return (
    <div
      style={{
        border: '1px solid #e5e7eb',
        borderRadius: 12,
        padding: 20,
        backgroundColor: '#f9fafb',
        color: '#6b7280',
      }}
    >
      Dashboard yükleniyor...
    </div>
  );
}

function DashboardPage() {
  return (
    <div>
      <h1 style={{ marginTop: 0 }}>Dashboard</h1>

      <Suspense fallback={<DashboardLoading />}>
        <DashboardRemote />
      </Suspense>
    </div>
  );
}

export default DashboardPage;