import { Suspense, lazy } from 'react';

const DashboardRemote = lazy(() => import('dashboard_remote/DashboardApp'));
import VueRemote from './components/remote/VueRemote';

function App() {
  return (
    <div style={{ padding: 24 }}>
      <h1>Host App</h1>

      <Suspense fallback={<div>Dashboard yükleniyor...</div>}>
        <DashboardRemote />
      </Suspense>

      <h2>Vue Remote</h2>
      <VueRemote />

    </div>
  );
}

export default App;