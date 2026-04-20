import { Suspense, lazy } from 'react';
import RemoteErrorBoundary from '../components/remote/RemoteErrorBoundary';

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

      <RemoteErrorBoundary
        fallbackTitle="Dashboard yüklenemedi"
        fallbackMessage="React remote uygulaması şu anda görüntülenemiyor."
      >
        <Suspense fallback={<DashboardLoading />}>
          <DashboardRemote />
        </Suspense>
      </RemoteErrorBoundary>
    </div>
  );
}

export default DashboardPage;