import type { ReactNode } from 'react';
import Sidebar from './Sidebar';

type AppLayoutProps = {
  children: ReactNode;
};

function AppLayout({ children }: AppLayoutProps) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '240px 1fr',
        minHeight: '100vh',
      }}
    >
      <Sidebar />

      <main
        style={{
          padding: 24,
          backgroundColor: '#f9fafb',
        }}
      >
        {children}
      </main>
    </div>
  );
}

export default AppLayout;