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
        gridTemplateColumns: '260px 1fr',
        minHeight: '100vh',
        backgroundColor: '#f3f4f6',
      }}
    >
      <Sidebar />

      <main
        style={{
          padding: 32,
          boxSizing: 'border-box',
        }}
      >
        <div
          style={{
            backgroundColor: '#ffffff',
            border: '1px solid #e5e7eb',
            borderRadius: 16,
            padding: 24,
            minHeight: 'calc(100vh - 64px)',
            boxSizing: 'border-box',
          }}
        >
          {children}
        </div>
      </main>
    </div>
  );
}

export default AppLayout;